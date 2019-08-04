import { ChipSprite, DrawPath } from "./chip-sprite";
import { NotGate } from "../../chips/gates";
import { Input } from "../../chips/input";
import { Output } from "../../chips/output";

export class NotSprite extends ChipSprite {
    chip: NotGate

    constructor(chip: NotGate) {
        super()
        this.chip = chip
    }

    makeChipBodyPath(ctx: DrawPath) {
        ctx.beginPath()
        ctx.moveTo(this.topLeft.x, this.topLeft.y)
        ctx.lineTo(this.bottomLeft.x, this.bottomLeft.y)
        ctx.lineTo(this.out.x - this._scale / 5, this.out.y)
        ctx.closePath()
    }

    draw(ctx: CanvasRenderingContext2D) {
        const x = this.position.x
        const y = this.position.y
        ctx.strokeStyle = '#eeeeee'
        ctx.lineWidth = 3

        // Body
        this.makeChipBodyPath(ctx)
        ctx.stroke()

        // DOT
        ctx.beginPath()
        ctx.arc(this.out.x - this._scale / 10, this.out.y, this._scale / 10, 0, Math.PI * 2)
        ctx.stroke()
    }

    getInputPos(input: Input) {
        if (this.chip.a === input) {
            return {
                x: this.topLeft.x,
                y: this.position.y
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