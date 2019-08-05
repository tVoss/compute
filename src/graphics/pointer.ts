import { Entity, Point, Group } from './core'
import { Board } from '../board/board';
import { ButtonSprite } from './sprites/button-sprite';
import { Port, Wire } from '../chips/core';
import { Output } from '../chips/output';
import { Input } from '../chips/input';

export enum PointerMode {
    Pointer,
    Move,
    Holding,
    Delete,
    Wire,
    _size
}

export namespace PointerModes {
    export function getAll() {
        return Array.from(Array(PointerMode._size).keys()).map(i => PointerMode[i])
    }
}

class HeldWire extends Entity {
    port: Port
    start: Point

    constructor(port: Port, start: Point) {
        super()
        this.port = port
        this.start = start
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.strokeStyle = 'cyan'
        ctx.lineWidth = 2

        ctx.beginPath()
        ctx.moveTo(this.start.x, this.start.y)
        ctx.lineTo(this.position.x, this.position.y)
        ctx.closePath()
        ctx.stroke()
    }    
    
    cointainsPoint(point: Point, ctx: CanvasRenderingContext2D): Entity | null {
        return null
    }
}

export class Pointer extends Group {

    public board: Board

    private _oldParent?: Group
    private _mode: PointerMode
    private _lastMode: PointerMode
    private _light?: Point

    constructor(canvas: HTMLCanvasElement, board: Board) {
        super()
        canvas.onmousemove = e => this.onMouseMove(e)
        this.board = board
        this._mode = PointerMode.Pointer
    }

    readonly onModeChange: ((mode: PointerMode) => void)[] = []

    get heldEntity() {
        return this._children[0]
    }

    setMode(mode: PointerMode) {
        if (!this.heldEntity && mode === PointerMode.Holding) {
            this.onModeChange.forEach(cd => cd(this._mode))
            return false
        }
        if (this.heldEntity && mode !== PointerMode.Holding) {
            this.onModeChange.forEach(cd => cd(this._mode))
            return false
        }
        this._light = undefined
        this._lastMode = this._mode
        this._mode = mode
        this.onModeChange.forEach(cb => cb(mode))
        return true
    }

    draw(ctx: CanvasRenderingContext2D): void {
        this.heldEntity && this.heldEntity.draw(ctx)
        if (this._light) {
            ctx.fillStyle = 'yellow'
            
            ctx.beginPath()
            ctx.arc(this._light.x, this._light.y, 10, 0, Math.PI * 2)
            ctx.closePath()
            ctx.fill()
        }
    }

    onMouseMove(e: MouseEvent) {
        this.position = {
            x: e.offsetX,
            y: e.offsetY
        }
    }

    onMove(point: Point) {
        if (this._mode !== PointerMode.Wire) {
            return
        }

        const port = this.board.tryFindPort(point, 10)
        if (!port) {
            return
        }

        this._light = port[1]
    }

    onClick(point: Point, ctx: CanvasRenderingContext2D) {
        switch(this._mode) {
            case PointerMode.Pointer:
                this.click(point, ctx)
                break;
            case PointerMode.Move:
                this.tryGrab(point, ctx)
                break;
            case PointerMode.Holding:
                this.drop();
                break;
            case PointerMode.Delete:
                this.delete(point, ctx);
                break;
            case PointerMode.Wire:
                this.wire(point)
        }
    }

    click(point: Point, ctx: CanvasRenderingContext2D) {
        const chip = this.board.cointainsPoint(point, ctx)
        if (chip && chip instanceof ButtonSprite) {
            chip.onPress(point)
        }
    }

    tryGrab(point: Point, ctx: CanvasRenderingContext2D) {
        const chip = this.board.cointainsPoint(point, ctx)
        if (chip) {
            this.grab(chip)
        }
    }

    grab(chip: Entity) {
        this._oldParent = chip.parent
        chip.setParent(this)
        chip.position = { x: 0, y: 0 }
        this.setMode(PointerMode.Holding)
    }

    drop() {
        const held = this.heldEntity
        held.removeParent()
        if (this._oldParent) {
            held.setParent(this._oldParent)
            this._oldParent = undefined
        }
        this.setMode(this._lastMode)
    }

    delete(point: Point, ctx: CanvasRenderingContext2D) {
        const chip = this.board.cointainsPoint(point, ctx)
        if (chip) {
            this.board.removeChip(chip)
        }
    }

    wire(point: Point) {
        const port = this.board.tryFindPort(point, 10)
        if (!port) {
            return
        }

        if (!this.heldEntity) {
            this.startWire(port[0], port[1])
        } else {
            this.placeWire(port[0])
        }
    }

    startWire(port: Port, point: Point) {
        const wire = new HeldWire(port, point)
        wire.setParent(this)
    }

    private _nextWireId = 0
    placeWire(port: Port) {
        const held = this.heldEntity as HeldWire
        // Stop wire on self click
        if (held.port === port) {
            held.removeParent()
        }
        // Do nothing on same port
        if (held.port instanceof Output && port instanceof Output) {
            return
        }
        if (held.port instanceof Input && port instanceof Input) {
            return
        }

        // Create wire
        const wire = new Wire('placed_' + this._nextWireId++)
        if (held.port instanceof Input) {
            wire.inputs.set(held.port.id, held.port)
        }
        if (held.port instanceof Output) {
            wire.outputs.set(held.port.id, held.port)
        }
        if (port instanceof Input) {
            wire.inputs.set(port.id, port)
        }
        if (port instanceof Output) {
            wire.outputs.set(port.id, port)
        }

        // Add to board
        this.board.addWire(wire)

        // Drop
        held.removeParent()
    }
}