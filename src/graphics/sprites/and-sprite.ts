import { AndGate } from "../../circuit/chips";
import { ChipSprite } from "./chip-sprite";
import { Input, Output } from "../../circuit/core";
import { Point } from "../core";

export class AndSprite extends ChipSprite {
    private _gate: AndGate

    constructor(gate: AndGate) {
        super()
        this._gate = gate
    }

    makeChipBodyPath(ctx: CanvasRenderingContext2D) {
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
        this.makeChipBodyPath(ctx)
        ctx.stroke()
    }

    getInputPos(input: Input): Point | null {
        if (input === this._gate.a) {
            return {
                x: this.position.x - this._scale,
                y: this.position.y - this._scale * 2 / 3
            }
        }
        if (input === this._gate.b) {
            return {
                x: this.position.x - this._scale,
                y: this.position.y + this._scale * 2 / 3
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