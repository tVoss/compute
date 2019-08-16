import { Entity, Point } from "../core";
import { ChipSprite, DrawPath } from "./chip-sprite";
import { Button } from "../../chips/gates";
import { Output } from "../../chips/output";
import { Input } from "../../chips/input";

export class ButtonSprite extends ChipSprite {
    chip: Button
    constructor(source: Button) {
        super()
        this.chip = source
    }

    makeChipBodyPath(ctx: DrawPath): void {
        const { x, y } = this.position
        ctx.beginPath()
        ctx.arc(x, y, this.scale / 2, 0, Math.PI * 2)
        ctx.closePath()
    }

    draw(ctx: CanvasRenderingContext2D): void {
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