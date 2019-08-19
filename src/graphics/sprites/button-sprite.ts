import { ChipSprite, DrawPath } from "./chip-sprite";
import { Button } from "../../chips/gates";
import { Point } from "../../util/point";

export class ButtonSprite extends ChipSprite {
    chip: Button
    constructor(source: Button) {
        super()
        this.chip = source
    }

    makeChipBodyPath(ctx: DrawPath): void {
        ctx.beginPath()
        ctx.arc(0, 0, ChipSprite.kSize / 2, 0, Math.PI * 2)
        ctx.closePath()
    }

    onDraw(ctx: CanvasRenderingContext2D): void {
        const value = this.chip.x.get()
        const color = value === null ? 'gray' : value ? 'green' : 'red'
        ctx.fillStyle = color

        this.makeChipBodyPath(ctx)
        ctx.fill()
    }

    onPress(point: Point): void {
        this.chip.press()
    }
}