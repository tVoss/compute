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
        ctx.moveTo(x, y + this.scale)
        ctx.lineTo(x - this.scale, y + this.scale)
        ctx.lineTo(x - this.scale, y - this.scale)
        ctx.lineTo(x, y - this.scale)
        ctx.arc(x, y, this.scale, Math.PI * 3 / 2, Math.PI / 2)
        ctx.closePath()
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = '#eeeeee'
        ctx.lineWidth = 3

        // Body
        this.makeChipBodyPath(ctx)
        ctx.stroke()
    }
}