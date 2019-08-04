import { ChipSprite, DrawPath } from "./chip-sprite";
import { Point } from "../core";
import { AndGate } from "../../chips/gates";
import { Output } from "../../chips/output";
import { Input } from "../../chips/input";

export class AndSprite extends ChipSprite {
    chip: AndGate

    constructor(chip: AndGate) {
        super()
        this.chip = chip
    }

    makeChipBodyPath(ctx: DrawPath) {
        const x = this.position.x
        const y = this.position.y

        ctx.beginPath()
        ctx.moveTo(x, this.topLeft.y)
        ctx.lineTo(this.topLeft.x, this.topLeft.y)
        ctx.lineTo(this.bottomLeft.x, this.bottomLeft.y)
        ctx.lineTo(x, this.bottomLeft.y)
        ctx.arc(x, y, this._scale, Math.PI * 3 / 2, Math.PI / 2)
    }

    draw(ctx: CanvasRenderingContext2D) {
        const x = this.position.x
        const y = this.position.y
        ctx.strokeStyle = '#eeeeee'
        ctx.lineWidth = 3

        // Body
        this.makeChipBodyPath(ctx)
        ctx.stroke()
    }

    getInputPos(input: Input): Point | null {
        if (input === this.chip.a) {
            return {
                x: this.position.x - this._scale,
                y: this.position.y - this._scale * 2 / 3
            }
        }
        if (input === this.chip.b) {
            return {
                x: this.position.x - this._scale,
                y: this.position.y + this._scale * 2 / 3
            }
        }
        return null
    }

    getOutputPos(output: Output) {
        if (output === this.chip.x) {
            return this.out
        }
        return null
    }
}