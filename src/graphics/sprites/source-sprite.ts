import { Entity, Point } from "../core";
import { Output } from "../../circuit/core"

export class SourceSprite extends Entity {

    private _source: Output

    constructor(source: Output) {
        super()
        this._source = source
    }

    draw(ctx: CanvasRenderingContext2D): void {
        const { x, y } = this.position
        const value = this._source()
        const color = value === null ? 'gray' : value ? 'green' : 'red'
        ctx.fillStyle = color

        ctx.beginPath()
        ctx.arc(x, y, this._scale, 0, Math.PI * 2)
        ctx.fill()
    }

    cointainsPoint(point: Point, ctx: CanvasRenderingContext2D): Entity | null {
        return Point.dist(this.position, point) < this._scale ? this : null
    }
}