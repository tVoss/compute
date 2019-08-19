import { Entity } from "../entity";
import { Wire, Signal } from "../../chips/core";
import { Board } from "../../board/board";
import { Point } from "../../util/point";

export class WireSprite extends Entity {
    wire: Wire
    private board: Board

    private _nodes: Point[] = []

    constructor(bm: Board, wire: Wire) {
        super()
        this.wire = wire
        this.board = bm
        this._zIndex = -1
        this.updateNodes()
    }

    updateNodes() {
        const inPos = this.board.getInputPos(this.wire.input)
        const outPos = this.board.getOutputPos(this.wire.output)
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

    onDraw(ctx: CanvasRenderingContext2D): void {
        ctx.restore()
        ctx.strokeStyle = Signal.getColor(this.wire._nextSignal)
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
        this.transformCtx(ctx)
    }

    tryFindEntity(point: Point, ctx: CanvasRenderingContext2D): Entity | null {
        return null
    }
}