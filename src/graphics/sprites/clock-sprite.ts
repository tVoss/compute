import {ChipSprite, DrawPath} from './chip-sprite'
import { Input } from '../../chips/input';
import { Point } from '../core';
import { Output } from '../../chips/output';
import { Clock } from '../../chips/clock';
import { Signal } from '../../chips/core';

export class ClockSprite extends ChipSprite {
    chip: Clock   
    
    constructor(clock: Clock) {
        super()
        this.chip = clock
    }

    getInputPos(input: Input) {
        return null
    }
    getOutputPos(output: Output) {
        if (output === this.chip.x) {
            return this.position
        }
        return null
    }
    makeChipBodyPath(ctx: DrawPath): void {
        const { x, y } = this.position

        ctx.beginPath()
        ctx.rect(x - this.scale, y - this.scale, this.scale * 2, this.scale * 2)
        ctx.closePath()
    }
    draw(ctx: CanvasRenderingContext2D): void {
        this.makeChipBodyPath(ctx)
        ctx.strokeStyle = Signal.getColor(this.chip.x.get())
        ctx.stroke()
    }
}