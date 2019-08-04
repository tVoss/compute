import { Entity, Point } from "../core";
import { Wire } from "../../circuit/core";
import { BoardManager } from "../board-manager";

export class WireSprite extends Entity {
    _wire: Wire
    private _bm: BoardManager


    constructor(bm: BoardManager, wire: Wire) {
        super()
        this._wire = wire
        this._bm = bm
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.strokeStyle = this._bm.getSignalColor(this._wire._nextSignal)
        ctx.lineWidth = 2
        
        this._wire.outputs.forEach(output => {
            const outPos = this._bm.getOutputPos(output)
            if (outPos === null) {
                console.warn(`Missing output pos for wire ${this._wire.name}`)
                return
            }
            if (this._wire.inputs.size === 0) {
                const inPos = { x: outPos.x + this._scale, y: outPos.y }
                ctx.beginPath()
                ctx.moveTo(inPos.x, inPos.y)
                ctx.lineTo(outPos.x, outPos.y)
                ctx.stroke()
                return 
            }
            this._wire.inputs.forEach(input => {
                let inPos = this._bm.getInputPos(input)
                if (!inPos) {
                    console.warn(`Missing input post for wire ${this._wire.name}`)
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