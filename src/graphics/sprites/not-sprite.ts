import { ChipSprite } from "./chip-sprite";
import { NotGate } from "../../circuit/chips";
import { Output, Signal } from "../../circuit/core";

export class NotSprite extends ChipSprite {
    private _gate: NotGate

    constructor(gate: NotGate) {
        super()
        this._gate = gate
    }

    makeGateBodyPath(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.moveTo(this.topLeft.x, this.topLeft.y)
        ctx.lineTo(this.bottomLeft.x, this.bottomLeft.y)
        ctx.lineTo(this.out.x - this._scale / 5, this.out.y)
        ctx.closePath()
    }

    draw(ctx: CanvasRenderingContext2D) {
        const x = this.position.x
        const y = this.position.y
        ctx.strokeStyle = '#eeeeee'
        ctx.lineWidth = 3

        // Body
        this.makeGateBodyPath(ctx)
        ctx.stroke()

        // DOT
        ctx.beginPath()
        ctx.arc(this.out.x - this._scale / 10, this.out.y, this._scale / 10, 0, Math.PI * 2)
        ctx.stroke()

        // In
        ctx.beginPath()
        ctx.moveTo(this.topLeft.x - this._scale, y)
        ctx.lineTo(x - this._scale, y)
        ctx.strokeStyle = this._gate._a ? 'green' : 'red'
        ctx.stroke()

        // Output
        ctx.beginPath()
        ctx.moveTo(this.out.x, this.out.y)
        ctx.lineTo(this.output.x, this.output.y)
        ctx.strokeStyle = this._gate.x() ? 'green' : 'red'
        ctx.stroke()
    }
}