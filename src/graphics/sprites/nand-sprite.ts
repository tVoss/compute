import { ChipSprite, DrawPath } from "./chip-sprite";
import { Point } from "../core";
import { NandGate } from "../../chips/gates";
import { Input } from "../../chips/input";
import { Output } from "../../chips/output";

export class NandSprite extends ChipSprite {
    chip: NandGate

    constructor(chip: NandGate) {
        super()
        this.chip = chip
    }

    makeChipBodyPath(ctx: DrawPath) {
        const x = this.position.x
        const y = this.position.y

        ctx.beginPath()
        ctx.moveTo(x - this._scale / 5, y + this._scale)
        ctx.lineTo(x - this._scale, y + this._scale)
        ctx.lineTo(x - this._scale, y - this._scale)
        ctx.lineTo(x - this._scale / 5, y - this._scale)
        ctx.arc(x - this._scale / 5, y, this._scale, Math.PI * 3 / 2, Math.PI / 2)
        ctx.closePath()
    }

    draw(ctx: CanvasRenderingContext2D) {
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
            return {
                x: this.position.x + this._scale,
                y: this.position.y
            }
        }
        return null
    }
}