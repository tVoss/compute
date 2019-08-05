import { Entity, Point } from './core'

export class EmptyEntity extends Entity {
    draw(ctx: CanvasRenderingContext2D) {
    }    
    cointainsPoint(point: Point, ctx: CanvasRenderingContext2D) {
        return null
    }
}