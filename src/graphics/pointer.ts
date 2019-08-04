import { Entity, Point, Group } from './core'

export class Pointer extends Group {

    private _oldParent?: Group
    private _cb: (p: Point) => void

    constructor(canvas: HTMLCanvasElement, cb: (p: Point) => void) {
        super()
        canvas.onmousemove = e => this.onMouseMove(e)
        canvas.onclick = e => this.onClick(e)
        this.position = { x: 0, y: 0 }
        this._cb = cb
    }

    get holding() {
        return this._children[0]
    }

    draw(ctx: CanvasRenderingContext2D): void {
        this.holding && this.holding.draw(ctx)
    }

    hold(e: Entity) {
        this._oldParent = e.parent
        e.setParent(this)
        e.position = { x: 0, y: 0 }
    }

    onMouseMove(e: MouseEvent) {
        this.position = {
            x: e.offsetX,
            y: e.offsetY
        }
    }

    onClick(e: MouseEvent) {
        const held = this.holding
        if (held) {
            held.removeParent()
            if (this._oldParent) {
                held.setParent(this._oldParent)
                this._oldParent = undefined
            }
        } else {
            this._cb({
                x: e.offsetX,
                y: e.offsetY
            })
        }
    }
}