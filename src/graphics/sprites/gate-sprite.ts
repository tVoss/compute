import { Entity, Point } from "../core";
import { Gate } from "../../circuit/gates";

export abstract class GateSprite extends Entity {
    protected readonly _gate: Gate

    constructor(gate: Gate) {
        super()
        this._gate = gate
    }

    public get gate(): Gate {
        return this._gate
    }

    protected get topLeft(): Point {
        return {
            x: this.position.x - this._scale,
            y: this.position.y + this._scale
        }
    }

    protected get bottomLeft(): Point {
        return {
            x: this.position.x - this._scale,
            y: this.position.y - this._scale
        }
    }

    protected get out(): Point {
        return {
            x: this.position.x + this._scale, 
            y: this.position.y
        }
    }

    public get output(): Point {
        return {
            x: this.out.x + this._scale, 
            y: this.out.y
        }
    }

    abstract makeGateBodyPath(ctx: CanvasRenderingContext2D): void
    
    cointainsPoint(point: Point, ctx: CanvasRenderingContext2D): boolean {
        this.makeGateBodyPath(ctx)
        return ctx.isPointInPath(point.x, point.y)
    }
}