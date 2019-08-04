import { Entity, Point, Group } from './core'
import { Board } from '../board/board';
import { ButtonSprite } from './sprites/button-sprite';

export enum PointerMode {
    Pointer,
    Move,
    Holding,
    Delete
}

export class Pointer extends Group {

    private _oldParent?: Group

    private _mode: PointerMode
    private _lastMode: PointerMode
    private readonly _bm: Board

    constructor(canvas: HTMLCanvasElement, bm: Board) {
        super()
        canvas.onmousemove = e => this.onMouseMove(e)
        this._bm = bm
        this._mode = PointerMode.Pointer
    }

    get heldEntity() {
        return this._children[0]
    }

    setMode(mode: PointerMode) {
        if (this.heldEntity) {
            console.warn('Cannot switch modes while holding entity')
            return
        }
        this._lastMode = this._mode
        this._mode = mode
    }

    draw(ctx: CanvasRenderingContext2D): void {
        this.heldEntity && this.heldEntity.draw(ctx)
    }

    onMouseMove(e: MouseEvent) {
        this.position = {
            x: e.offsetX,
            y: e.offsetY
        }
    }

    onClick(point: Point, ctx: CanvasRenderingContext2D) {
        switch(this._mode) {
            case PointerMode.Pointer:
                this.click(point, ctx)
                break;
            case PointerMode.Move:
                this.grab(point, ctx)
                break;
            case PointerMode.Holding:
                this.drop();
                break;
            case PointerMode.Delete:
                this.delete(point, ctx);
                break;
        }
    }

    click(point: Point, ctx: CanvasRenderingContext2D) {
        const chip = this._bm.cointainsPoint(point, ctx)
        if (chip && chip instanceof ButtonSprite) {
            chip.onPress(point)
        }
    }

    grab(point: Point, ctx: CanvasRenderingContext2D) {
        const chip = this._bm.cointainsPoint(point, ctx)
        if (!chip) {
            return
        }
        this.setMode(PointerMode.Holding)
        this._oldParent = chip.parent
        chip.setParent(this)
        chip.position = { x: 0, y: 0 }
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
        const chip = this._bm.cointainsPoint(point, ctx)
        if (chip) {
            this._bm.removeChip(chip)
        }
    }
}