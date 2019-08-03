import { AndGate } from "../../circuit/gates";
import { GateSprite } from "./gate-sprite";

export class AndSprite extends GateSprite {

    constructor(gate: AndGate) {
        super(gate)
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
        ctx.strokeStyle = this._gate.inputs[0].value ? 'green' : 'red'
        ctx.stroke()

        // Bottom wire
        ctx.beginPath()
        ctx.moveTo(this.topLeft.x - this._scale, y + this._scale / 3)
        ctx.lineTo(x - this._scale, y + this._scale / 3)
        ctx.strokeStyle = this._gate.inputs[1].value ? 'green' : 'red'
        ctx.stroke()

        // Output
        ctx.beginPath()
        ctx.moveTo(this.out.x, this.out.y)
        ctx.lineTo(this.output.x, this.output.y)
        ctx.strokeStyle = this._gate.outputs[0].value ? 'green' : 'red'
        ctx.stroke()
    }
}