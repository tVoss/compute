import { Entity, Point } from "../core";
import { Source } from "../../circuit/chips";
import { ChipSprite } from "./chip-sprite";
import { Input, Output } from "../../circuit/core";

export class SourceSprite extends ChipSprite {

    private _source: Source

    constructor(source: Source) {
        super()
        this._source = source
    }

    makeChipBodyPath(ctx: CanvasRenderingContext2D): void {
        const { x, y } = this.position
        ctx.beginPath()
        ctx.arc(x, y, this._scale, 0, Math.PI * 2)
    }

    draw(ctx: CanvasRenderingContext2D): void {
        const value = this._source.x()
        const color = value === null ? 'gray' : value ? 'green' : 'red'
        ctx.fillStyle = color

        this.makeChipBodyPath(ctx)
        ctx.fill()
    }

    getInputPos(input: Input): Point | null {
        return null
    }

    getOutputPos(output: Output) {
        if (output === this._source.x) {
            return this.position
        }
        return null
    }
}