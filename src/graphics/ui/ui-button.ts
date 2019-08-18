import { Entity } from "../entity";
import { Point } from "../../util/point";

export class UiButton extends Entity {
    
    readonly title: string
    readonly action: () => void

    constructor(title: string, action: () => void) {
        super()
        this.scale = 2
        this.title = title
        this.action = action
    }

    private get topLeft() {
        return {
            x: this.position.x - this.scale,
            y: this.position.y - this.scale
        }
    }

    private get bottomRight() {
        return {
            x: this.position.x + this.scale,
            y: this.position.y + this.scale
        }
    }

    protected onDraw(ctx: CanvasRenderingContext2D): void {
        ctx.strokeStyle = 'yellow'
        ctx.lineWidth = 1
        ctx.strokeRect(this.topLeft.x, this.topLeft.y, this.scale * 2, this.scale * 2)
    }    
    
    tryFindEntity(point: Point, ctx: CanvasRenderingContext2D): Entity | null {
        return Point.inRect(point, this.topLeft, this.bottomRight)
            ? this
            : null
    }
}