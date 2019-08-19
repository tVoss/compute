import { ChipSprite, DrawPath } from './chip-sprite'
import { Chip } from '../../chips/chip';
import { NorGate } from '../../chips/gates'

export class NorSprite extends ChipSprite {
    readonly chip: Chip;

    constructor(chip: NorGate) {
        super()
        this.chip = chip
    }

    makeChipBodyPath(ctx: DrawPath) {
        const { x, y } = this.position

        ctx.beginPath()
        ctx.moveTo(x - ChipSprite.kSize, y + ChipSprite.kSize)
        ctx.quadraticCurveTo(x, y + ChipSprite.kSize, this.position.x + ChipSprite.kSize * 4 / 5, this.position.y)
        ctx.quadraticCurveTo(x, y - ChipSprite.kSize, x - ChipSprite.kSize, y - ChipSprite.kSize)
        ctx.quadraticCurveTo(x - ChipSprite.kSize / 2, y, x - ChipSprite.kSize, y + ChipSprite.kSize)
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