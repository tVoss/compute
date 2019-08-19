import { ChipSprite, DrawPath } from "./chip-sprite";
import { AndGate } from "../../chips/gates";

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
        ctx.moveTo(x, y + ChipSprite.kSize)
        ctx.lineTo(x - ChipSprite.kSize, y + ChipSprite.kSize)
        ctx.lineTo(x - ChipSprite.kSize, y - ChipSprite.kSize)
        ctx.lineTo(x, y - ChipSprite.kSize)
        ctx.arc(x, y, ChipSprite.kSize, Math.PI * 3 / 2, Math.PI / 2)
        ctx.closePath()
    }

    onDraw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = '#eeeeee'
        ctx.lineWidth = 3

        // Body
        this.makeChipBodyPath(ctx)
        ctx.stroke()
    }
}