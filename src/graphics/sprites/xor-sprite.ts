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
        ctx.moveTo(x - this.scale * 2 / 3, y + this.scale)
        ctx.quadraticCurveTo(x, y + this.scale, this.position.x + this.scale, this.position.y)
        ctx.quadraticCurveTo(x, y - this.scale, x - this.scale * 2 / 3, y - this.scale)
        ctx.quadraticCurveTo(x - this.scale / 2 + this.scale / 3, y, x - this.scale * 2 / 3, y + this.scale)
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
        ctx.moveTo(x - this.scale, y - this.scale)
        ctx.quadraticCurveTo(x - this.scale / 2, y, x - this.scale, y + this.scale)
        ctx.stroke()
    }
}