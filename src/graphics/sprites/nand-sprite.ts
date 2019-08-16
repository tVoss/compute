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
        ctx.moveTo(x - this.scale / 5, y + this.scale)
        ctx.lineTo(x - this.scale, y + this.scale)
        ctx.lineTo(x - this.scale, y - this.scale)
        ctx.lineTo(x - this.scale / 5, y - this.scale)
        ctx.arc(x - this.scale / 5, y, this.scale, Math.PI * 3 / 2, Math.PI / 2)
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
        ctx.arc(this.position.x + 9 * this.scale / 10, this.position.y, this.scale / 10, 0, Math.PI * 2)
        ctx.closePath()
        ctx.stroke()
    }
}