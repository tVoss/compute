import {ChipSprite, DrawPath} from './chip-sprite'
import { Clock } from '../../chips/clock';
import { Signal } from '../../chips/core';

export class ClockSprite extends ChipSprite {
    chip: Clock   
    
    constructor(clock: Clock) {
        super()
        this.chip = clock
    }
    makeChipBodyPath(ctx: DrawPath): void {
        const { x, y } = this.position

        ctx.beginPath()
        ctx.rect(x - this.scale, y - this.scale, this.scale * 2, this.scale * 2)
        ctx.closePath()
    }
    onDraw(ctx: CanvasRenderingContext2D): void {
        this.makeChipBodyPath(ctx)
        ctx.strokeStyle = Signal.getColor(this.chip.x.get())
        ctx.stroke()
    }
}