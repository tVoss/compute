import { ChipSprite, DrawPath } from "./chip-sprite";
import { NandGate } from "../../chips/gates";

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
        ctx.moveTo(x - ChipSprite.kSize / 5, y + ChipSprite.kSize)
        ctx.lineTo(x - ChipSprite.kSize, y + ChipSprite.kSize)
        ctx.lineTo(x - ChipSprite.kSize, y - ChipSprite.kSize)
        ctx.lineTo(x - ChipSprite.kSize / 5, y - ChipSprite.kSize)
        ctx.arc(x - ChipSprite.kSize / 5, y, ChipSprite.kSize, Math.PI * 3 / 2, Math.PI / 2)
        ctx.closePath()
    }

    onDraw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = '#eeeeee'
        ctx.lineWidth = 3

        // Body
        this.makeChipBodyPath(ctx)
        ctx.stroke()

        // DOT
        ctx.beginPath()
        ctx.arc(this.position.x + 9 * ChipSprite.kSize / 10, this.position.y, ChipSprite.kSize / 10, 0, Math.PI * 2)
        ctx.closePath()
        ctx.stroke()
    }
}