import { Entity, Point } from "../core";
import { Wire } from "../../chips/core";
import { Board } from "../../board/board";

export class WireSprite extends Entity {
    wire: Wire
    private _bm: Board

    private _nodes: Point[] = []

    constructor(bm: Board, wire: Wire) {
        super()
        this.wire = wire
        this._bm = bm
        this.updateNodes()
    }

    updateNodes() {
        const inPos = this._bm.getInputPos(this.wire.input)
        const outPos = this._bm.getOutputPos(this.wire.output)
        if (!inPos || !outPos) {
            console.warn(`Could not get input or output pos for wire ${this.wire.id}`)
            return
        }
        const dx = inPos.x - outPos.x
        const dy = inPos.y - outPos.y

        const next0 = {
            x: outPos.x + dx / 2,
            y: outPos.y
        }
        const next1 = {
            x: outPos.x + dx / 2,
            y: inPos.y
        }

        this._nodes = [outPos, next0, next1, inPos]
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.strokeStyle = this._bm.getSignalColor(this.wire._nextSignal)
        ctx.lineWidth = 2

        if (this._nodes.length === 0) {
            return
        }
        const start = this._nodes[0]

        ctx.beginPath()
        ctx.moveTo(start.x, start.y)
        for (let i = 1; i < this._nodes.length; i++) {
            ctx.lineTo(this._nodes[i].x, this._nodes[i].y)
        }
        ctx.stroke()
    }

    cointainsPoint(point: Point, ctx: CanvasRenderingContext2D): Entity | null {
        return null
    }
}