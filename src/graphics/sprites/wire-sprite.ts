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
        
        this.wire.outputs.forEach(output => {
            const outPos = this._bm.getOutputPos(output)
            if (outPos === null) {
                console.warn(`Missing output pos for wire ${this.wire.id}`)
                return
            }
            if (this.wire.inputs.size === 0) {
                const inPos = { x: outPos.x + this._scale, y: outPos.y }
                ctx.beginPath()
                ctx.moveTo(inPos.x, inPos.y)
                ctx.lineTo(outPos.x, outPos.y)
                ctx.stroke()
                return 
            }
            this.wire.inputs.forEach(input => {
                let inPos = this._bm.getInputPos(input)
                if (!inPos) {
                    console.warn(`Missing input post for wire ${this.wire.id}`)
                    return
                }

                ctx.beginPath()
                ctx.moveTo(inPos.x, inPos.y)
                ctx.lineTo(outPos.x, outPos.y)
                ctx.stroke()
            })
        })
    }

    cointainsPoint(point: Point, ctx: CanvasRenderingContext2D): Entity | null {
        return null
    }
}