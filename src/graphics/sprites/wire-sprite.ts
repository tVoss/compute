import { Entity, Point } from "../core";
import {GateSprite} from './gate-sprite'

export class WireSprite extends Entity {

    constructor(out: GateSprite, outIdx: number, input: GateSprite, inputIdx: number) {
        super()
        input.gate.inputs[inputIdx].connect(out.gate.outputs[outIdx])
    }

    draw(ctx: CanvasRenderingContext2D): void {
        throw new Error("Method not implemented.");
    }

    cointainsPoint(point: Point, ctx: CanvasRenderingContext2D): boolean {
        return false
    }
}