import { ChipSprite, DrawPath } from './chip-sprite'
import { Chip } from '../../chips/chip';
import { XorGate } from '../../chips/gates'

export class XorSprite extends ChipSprite {
    readonly chip: Chip;

    constructor(chip: XorGate) {
        super()
        this.chip = chip
    }

    makeChipBodyPath(ctx: DrawPath) {
        const { x, y } = this.position

        ctx.beginPath()
        ctx.moveTo(x - ChipSprite.kSize * 2 / 3, y + ChipSprite.kSize)
        ctx.quadraticCurveTo(x, y + ChipSprite.kSize, this.position.x + ChipSprite.kSize, this.position.y)
        ctx.quadraticCurveTo(x, y - ChipSprite.kSize, x - ChipSprite.kSize * 2 / 3, y - ChipSprite.kSize)
        ctx.quadraticCurveTo(x - ChipSprite.kSize / 2 + ChipSprite.kSize / 3, y, x - ChipSprite.kSize * 2 / 3, y + ChipSprite.kSize)
        ctx.closePath()
        
    }

    onDraw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = '#eeeeee'
        ctx.lineWidth = 3

        // Body
        this.makeChipBodyPath(ctx)
        ctx.stroke()

        const { x, y } = this.position

        ctx.beginPath()
        ctx.moveTo(x - ChipSprite.kSize, y - ChipSprite.kSize)
        ctx.quadraticCurveTo(x - ChipSprite.kSize / 2, y, x - ChipSprite.kSize, y + ChipSprite.kSize)
        ctx.stroke()
    }
}