import { Entity, Point } from "../core";
import { Input } from "../../chips/input";
import { Output } from "../../chips/output";
import { Chip } from "../../chips/chip";

export type DrawPath = CanvasPath & CanvasDrawPath

export abstract class ChipSprite extends Entity {
    abstract chip: Chip

    protected get topLeft(): Point {
        return {
            x: this.position.x - this._scale,
            y: this.position.y + this._scale
        }
    }

    protected get bottomLeft(): Point {
        return {
            x: this.position.x - this._scale,
            y: this.position.y - this._scale
        }
    }

    protected get out(): Point {
        return {
            x: this.position.x + this._scale, 
            y: this.position.y
        }
    }

    public get output(): Point {
        return {
            x: this.out.x + this._scale, 
            y: this.out.y
        }
    }

    abstract getInputPos(input: Input): Point | null
    abstract getOutputPos(output: Output): Point | null
    abstract makeChipBodyPath(ctx: DrawPath): void
    
    cointainsPoint(point: Point, ctx: DrawPath): Entity | null {
        this.makeChipBodyPath(ctx)
        return ctx.isPointInPath(point.x, point.y) ? this : null
    }
}