import { Entity } from "./entity";
import { Point } from '../util/point';

export class EmptyEntity extends Entity {
    onDraw(ctx: CanvasRenderingContext2D) {
    }
    tryFindEntity(point: Point, ctx: CanvasRenderingContext2D) {
        return null
    }
}