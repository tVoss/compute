import { Entity, Point } from "../core";
import { Wire } from "../../chips/core";
import { Board } from "../../board/board";

export class WireSprite extends Entity {
    wire: Wire
    private _bm: Board


    constructor(bm: Board, wire: Wire) {
        super()
        this.wire = wire
        this._bm = bm
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.strokeStyle = this._bm.getSignalColor(this.wire._nextSignal)
        ctx.lineWidth = 2

        if (!this.wire.input || !this.wire.output) {
            console.warn(`Wire ${this.wire.id} has no input or output`)
            return
        }

        const outPos = this._bm.getOutputPos(this.wire.output)
        const inPos = this._bm.getInputPos(this.wire.input)

        if (!outPos || !inPos) {
            console.warn(`Could not get input or output pos for wire ${this.wire.id}`)
            return
        }

        ctx.beginPath()
        ctx.moveTo(inPos.x, inPos.y)
        ctx.lineTo(outPos.x, outPos.y)
        ctx.stroke()
    }

    cointainsPoint(point: Point, ctx: CanvasRenderingContext2D): Entity | null {
        return null
    }
}