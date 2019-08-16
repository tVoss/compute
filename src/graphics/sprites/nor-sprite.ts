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
        ctx.moveTo(x - this.scale, y + this.scale)
        ctx.quadraticCurveTo(x, y + this.scale, this.position.x + this.scale * 4 / 5, this.position.y)
        ctx.quadraticCurveTo(x, y - this.scale, x - this.scale, y - this.scale)
        ctx.quadraticCurveTo(x - this.scale / 2, y, x - this.scale, y + this.scale)
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