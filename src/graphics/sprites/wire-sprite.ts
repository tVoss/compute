import { Entity, Point } from "../core";
import { Wire } from "../../circuit/core";
import { BoardManager } from "../board-manager";

export class WireSprite extends Entity {
    private _wire: Wire
    private _bm: BoardManager


    constructor(bm: BoardManager, wire: Wire) {
        super()
        this._wire = wire
        this._bm = bm
    }

    draw(ctx: CanvasRenderingContext2D): void {
        // just one for now
        const input = this._wire.inputs[0]
        const output = this._wire.outputs[0]

        const inPos = this._bm.getInputPos(input)
        const outPos = this._bm.getOutputPos(output)

        ctx.strokeStyle = this._bm.getSignalColor(this._wire._next)
        ctx.lineWidth = 2

        ctx.beginPath()
        ctx.moveTo(inPos.x, inPos.y)
        ctx.lineTo(outPos.x, outPos.y)
        ctx.stroke()
    }

    cointainsPoint(point: Point, ctx: CanvasRenderingContext2D): Entity | null {
        return null
    }
}