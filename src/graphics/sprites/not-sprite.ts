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
        ctx.moveTo(x - this._scale, y - this._scale)
        ctx.lineTo(x - this._scale, y + this._scale)
        ctx.lineTo(this.position.x + this._scale * 4 / 5, this.position.y)
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
        ctx.arc(this.position.x + 9 * this._scale / 10, this.position.y, this._scale / 10, 0, Math.PI * 2)
        ctx.closePath()
        ctx.stroke()
    }

    getInputPos(input: Input) {
        if (this.chip.a === input) {
            return {
                x: this.position.x - this._scale,
                y: this.position.y
            }
        }
        return null
    }

    getOutputPos(output: Output) {
        if (output === this.chip.x) {
            return {
                x: this.position.x + this._scale,
                y: this.position.y
            }
        }
        return null
    }
}