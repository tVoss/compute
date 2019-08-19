import { Entity } from "../graphics/entity";
import { Port, Wire } from "../chips/core";
import { PointerMode, PointerModes, Pointer } from "./pointer";
import { Output } from "../chips/output";
import { Input } from "../chips/input";
import { StartWireMode } from './start-wire-mode'
import { Highlight } from "./highlight";
import { Point } from "../util/point";

class HeldWire extends Entity {
    port: Port
    start: Point
    parent: Pointer
    constructor(port: Port, start: Point) {
        super()
        this.port = port
        this.start = start
    }

    onDraw(ctx: CanvasRenderingContext2D): void {
        ctx.strokeStyle = 'cyan'
        ctx.lineWidth = 2
        
        const portPos = Point.sub(this.start, this.parent.position)

        ctx.beginPath()
        ctx.moveTo(portPos.x, portPos.y)
        ctx.lineTo(this.position.x, this.position.y)
        ctx.closePath()
        ctx.stroke()
    }

    tryFindEntity(point: Point, ctx: CanvasRenderingContext2D): Entity | null {
        return null
    }
}

export class PlaceWireMode implements PointerMode {
    static _nextWireId = 0

    readonly type = PointerModes.PlaceWire
    readonly pointer: Pointer
    readonly highlight = new Highlight()
    wire: HeldWire
    canChange = false

    constructor(pointer: Pointer, port: Port) {
        this.pointer = pointer
        const start = pointer.board.getPortPos(port)
        if (!start) {
            throw new Error('Could not find position for port: ' + port.id)
        }
        this.wire = new HeldWire(port, start)
        this.wire.setParent(pointer)
    }

    onMove(pos: Point): void {
        const port = this.pointer.board.tryFindPort(pos, 10)
        if (!port) {
            this.highlight.removeParent()
            return
        }
        const portPos = this.pointer.board.getPortPos(port)
        if (!portPos) {
            this.highlight.removeParent()
            return
        }
        this.highlight.position = portPos
        this.highlight.setParent(this.pointer.board)
    }

    onClick(point: Point, ctx: CanvasRenderingContext2D): void {
        const port = this.pointer.board.tryFindPort(point, 10)
        if (!port) {
            return
        }

        // Stop wire on self click
        if (this.wire.port === port) {
            this.wire.removeParent()
        }
        // Do nothing on same port
        if (this.wire.port instanceof Output && port instanceof Output) {
            return
        }
        if (this.wire.port instanceof Input && port instanceof Input) {
            return
        }

        const input = this.wire.port instanceof Input
            ? this.wire.port
            : port instanceof Input
                ? port
                : null
        const output = this.wire.port instanceof Output
            ? this.wire.port
            : port instanceof Output
                ? port
                : null
        if (!input || !output) {
            throw new Error('Did not have input or output')
        }

        // Create wire
        const wire = new Wire('placed_' + PlaceWireMode._nextWireId++, output, input)

        // Add to board
        this.pointer.board.addWire(wire)

        // Drop
        this.wire.removeParent()

        const startWire = new StartWireMode(this.pointer)

        this.canChange = true
        this.pointer.setMode(startWire)
    }

    onRemove() {
        this.highlight.removeParent()
        this.wire.removeParent()
    }
}