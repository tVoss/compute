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
        const { x, y } = this.position

        ctx.beginPath()
        ctx.moveTo(x - this.scale, y - this.scale)
        ctx.lineTo(x - this.scale, y + this.scale)
        ctx.lineTo(this.position.x + this.scale * 4 / 5, this.position.y)
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
        ctx.arc(this.position.x + 9 * this.scale / 10, this.position.y, this.scale / 10, 0, Math.PI * 2)
        ctx.closePath()
        ctx.stroke()
    }

    _getInputPos(input: Input) {
        if (this.chip.a === input) {
            return {
                x: this.position.x - this.scale,
                y: this.position.y
            }
        }
        return null
    }

    _getOutputPos(output: Output) {
        if (output === this.chip.x) {
            return {
                x: this.position.x + this.scale,
                y: this.position.y
            }
        }
        return null
    }
}