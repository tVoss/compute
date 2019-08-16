import { Entity, Point } from "../core";
import { ChipSprite, DrawPath } from "./chip-sprite";
import { Button, Led } from "../../chips/gates";
import { Output } from "../../chips/output";
import { Input } from "../../chips/input";
import { Board } from "../../board/board";
import { Signal } from "../../chips/core";

export class LedSprite extends ChipSprite {
    chip: Led
    constructor(source: Led) {
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
        ctx.fillStyle = 'gray'
        this.makeChipBodyPath(ctx)
        ctx.fill()

        ctx.fillStyle = Signal.getColor(this.chip.a.sig)
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.scale / 4, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
    }
}