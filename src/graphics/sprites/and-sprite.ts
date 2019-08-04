import { AndGate } from "../../circuit/chips";
import { ChipSprite } from "./chip-sprite";

export class AndSprite extends ChipSprite {
    private _gate: AndGate

    constructor(gate: AndGate) {
        super()
        this._gate = gate
    }

    makeGateBodyPath(ctx: CanvasRenderingContext2D) {
        const x = this.position.x
        const y = this.position.y

        ctx.beginPath()
        ctx.moveTo(x, this.topLeft.y)
        ctx.lineTo(this.topLeft.x, this.topLeft.y)
        ctx.lineTo(this.bottomLeft.x, this.bottomLeft.y)
        ctx.lineTo(x, this.bottomLeft.y)
        ctx.arc(x, y, this._scale, Math.PI * 3 / 2, Math.PI / 2)
    }

    draw(ctx: CanvasRenderingContext2D) {
        const x = this.position.x
        const y = this.position.y
        ctx.strokeStyle = '#eeeeee'
        ctx.lineWidth = 3

        // Body
        this.makeGateBodyPath(ctx)
        ctx.stroke()

        // Top Wire
        ctx.beginPath()
        ctx.moveTo(this.topLeft.x - this._scale, y - this._scale / 3)
        ctx.lineTo(x - this._scale, y - this._scale / 3)
        ctx.strokeStyle = this._gate._a ? 'green' : 'red'
        ctx.stroke()

        // Bottom wire
        ctx.beginPath()
        ctx.moveTo(this.topLeft.x - this._scale, y + this._scale / 3)
        ctx.lineTo(x - this._scale, y + this._scale / 3)
        ctx.strokeStyle = this._gate._b ? 'green' : 'red'
        ctx.stroke()

        // Output
        ctx.beginPath()
        ctx.moveTo(this.out.x, this.out.y)
        ctx.lineTo(this.output.x, this.output.y)
        ctx.strokeStyle = this._gate.x() ? 'green' : 'red'
        ctx.stroke()
    }
}