import { Entity, Point } from "../graphics/core";

export class Highlight extends Entity {
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = 'yellow'
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this._scale * 5, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
    }    
    
    cointainsPoint(point: Point, ctx: CanvasRenderingContext2D) {
        return null
    }
}