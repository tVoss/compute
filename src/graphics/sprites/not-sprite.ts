import { ChipSprite } from "./chip-sprite";
import { NotGate } from "../../circuit/chips";
import { Output, Signal, Input } from "../../circuit/core";

export class NotSprite extends ChipSprite {
    private _gate: NotGate

    constructor(gate: NotGate) {
        super()
        this._gate = gate
    }

    makeChipBodyPath(ctx: CanvasRenderingContext2D) {
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
        this.makeChipBodyPath(ctx)
        ctx.stroke()

        // DOT
        ctx.beginPath()
        ctx.arc(this.out.x - this._scale / 10, this.out.y, this._scale / 10, 0, Math.PI * 2)
        ctx.stroke()
    }

    getInputPos(input: Input) {
        if (this._gate.a === input) {
            return {
                x: this.topLeft.x,
                y: this.position.y
            }
        }
        return null
    }

    getOutputPos(output: Output) {
        if (output === this._gate.x) {
            return this.out
        }
        return null
    }
}