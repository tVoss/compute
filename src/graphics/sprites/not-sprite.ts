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
        ctx.moveTo(x - ChipSprite.kSize, y - ChipSprite.kSize)
        ctx.lineTo(x - ChipSprite.kSize, y + ChipSprite.kSize)
        ctx.lineTo(this.position.x + ChipSprite.kSize * 4 / 5, this.position.y)
        ctx.closePath()
    }

    onDraw(ctx: CanvasRenderingContext2D) {
        const x = this.position.x
        const y = this.position.y
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