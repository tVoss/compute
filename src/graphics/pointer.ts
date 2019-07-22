import { Entity, Drawable, Point, Group } from './core'

export class Pointer extends Group implements Drawable {
    private _holding?: Entity & Drawable

    private _cb: (p: Point) => void

    constructor(canvas: HTMLCanvasElement, cb: (p: Point) => void) {
        super()
        canvas.onmousemove = e => this.onMouseMove(e)
        canvas.onclick = e => this.onClick(e)
        this.localPosition = { x: 0, y: 0 }
        this._cb = cb
    }

    draw(ctx: CanvasRenderingContext2D): void {
        if (!this._holding) {
            return
        }
        this._holding.draw(ctx)
    }

    set holding(e: Entity & Drawable) {
        this._holding = e
        this._holding.parent = this
        this._holding.localPosition = { x: 0, y: 0 }
    }

    onMouseMove(e: MouseEvent) {
        this.localPosition = {
            x: e.offsetX,
            y: e.offsetY
        }
    }

    onClick(e: MouseEvent) {
        if (this._holding) {
            this._holding.removeParent()
            this._holding = undefined
        } else {
            this._cb({
                x: e.offsetX,
                y: e.offsetY
            })
        }
    }
}