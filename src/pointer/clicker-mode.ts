import { PointerMode, Pointer, PointerModes } from "./pointer";
import { ButtonSprite } from "../graphics/sprites/button-sprite";
import { Point } from "../util/point";

export class ClickerMode implements PointerMode {
    readonly type = PointerModes.Clicker  
    readonly pointer: Pointer
    readonly canChange = true
    constructor(pointer: Pointer) {
        this.pointer = pointer
    }

    onMove(pos: Point): void {
    }

    onClick(point: Point, ctx: CanvasRenderingContext2D): void {
        const chip = this.pointer.board.tryFindEntity(point, ctx)
        if (chip && chip instanceof ButtonSprite) {
            chip.onPress(point)
        }
    }

    onRemove(): void {
    }
}