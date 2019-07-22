import { Entity, Point, Drawable, DS } from "./core";
import { AndGate } from "../circuit/gates";

export class AndSprite extends Entity implements Drawable {
    private _gate: AndGate

    private get topLeft(): Point {
        return {
            x: this.globalPosition.x - DS,
            y: this.globalPosition.y + DS
        }
    }

    private get bottomLeft(): Point {
        return {
            x: this.globalPosition.x - DS,
            y: this.globalPosition.y - DS
        }
    }

    private get out(): Point {
        return {
            x: this.globalPosition.x + DS, 
            y: this.globalPosition.y
        }
    }

    constructor(gate: AndGate) {
        super()
        this._gate = gate
    }

    makeGateBodyPath(ctx: CanvasRenderingContext2D) {
        const x = this.globalPosition.x
        const y = this.globalPosition.y

        ctx.beginPath()
        ctx.moveTo(x, this.topLeft.y)
        ctx.lineTo(this.topLeft.x, this.topLeft.y)
        ctx.lineTo(this.bottomLeft.x, this.bottomLeft.y)
        ctx.lineTo(x, this.bottomLeft.y)
        ctx.arc(x, y, DS, Math.PI * 3 / 2, Math.PI / 2)
    }

    draw(ctx: CanvasRenderingContext2D) {
        const x = this.globalPosition.x
        const y = this.globalPosition.y
        ctx.strokeStyle = '#eeeeee'
        ctx.lineWidth = 3

        // Body
        this.makeGateBodyPath(ctx)
        ctx.stroke()

        // Top Wire
        ctx.beginPath()
        ctx.moveTo(this.topLeft.x - DS, y - DS / 3)
        ctx.lineTo(x - DS, y - DS / 3)
        ctx.strokeStyle = this._gate.a.value ? 'green' : 'red'
        ctx.stroke()

        // Bottom wire
        ctx.beginPath()
        ctx.moveTo(this.topLeft.x - DS, y + DS / 3)
        ctx.lineTo(x - DS, y + DS / 3)
        ctx.strokeStyle = this._gate.b.value ? 'green' : 'red'
        ctx.stroke()

        // Output
        ctx.beginPath()
        ctx.moveTo(this.out.x, this.out.y)
        ctx.lineTo(this.out.x + DS, this.out.y)
        ctx.strokeStyle = this._gate.x.value ? 'green' : 'red'
        ctx.stroke()
    }
    
    cointainsPoint(point: Point, ctx: CanvasRenderingContext2D): boolean {
        this.makeGateBodyPath(ctx)
        return ctx.isPointInPath(point.x, point.y)
    }

}