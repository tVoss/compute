import { Entity, Point } from "../core";
import { ChipSprite, DrawPath } from "./chip-sprite";
import { Button, Sink } from "../../chips/gates";
import { Output } from "../../chips/output";
import { Input } from "../../chips/input";

export class SinkSprite extends ChipSprite {
    chip: Sink
    constructor(source: Sink) {
        super()
        this.chip = source
    }

    makeChipBodyPath(ctx: DrawPath): void {
        const { x, y } = this.position
        ctx.beginPath()
        ctx.arc(x, y, this._scale / 2, 0, Math.PI * 2)
        ctx.closePath()
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = 'gray'
        this.makeChipBodyPath(ctx)
        ctx.fill()
    }

    getInputPos(input: Input): Point | null {
        if (input === this.chip.a) {
            return this.position
        }
        return null
    }

    getOutputPos(output: Output) {
        return null
    }
}