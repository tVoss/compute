import { Entity, Point } from "../core";
import { Input } from "../../chips/input";
import { Output } from "../../chips/output";
import { Chip } from "../../chips/chip";

export type DrawPath = CanvasPath & CanvasDrawPath

export abstract class ChipSprite extends Entity {
    abstract chip: Chip

    abstract getInputPos(input: Input): Point | null
    abstract getOutputPos(output: Output): Point | null
    abstract makeChipBodyPath(ctx: DrawPath): void
    
    tryFindPort(point: Point, radius: number): [Input | Output, Point] | null {
        for (const input of this.chip.inputs.values()) {
            const pos = this.getInputPos(input) as Point
            const hit = Point.dist(point, pos) <= radius
            if (hit) {
                return [input, pos]
            }
        }
        for (const output of this.chip.outputs.values()) {
            const pos = this.getOutputPos(output) as Point
            const hit = Point.dist(point, pos) <= radius
            if (hit) {
                return [output, pos]
            }
        }
        return null
    }

    cointainsPoint(point: Point, ctx: DrawPath): Entity | null {
        this.makeChipBodyPath(ctx)
        return ctx.isPointInPath(point.x, point.y) ? this : null
    }
}