import { Entity } from "../graphics/entity";
import { Point } from "../util/point";

export class Highlight extends Entity {
    _size = 5
    _zIndex = 10

    onDraw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = 'yellow'
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this._size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
    }    
    
    tryFindEntity(point: Point, ctx: CanvasRenderingContext2D) {
        return null
    }
}