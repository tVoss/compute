import { PointerMode, Pointer, PointerModes } from "./pointer";
import { Point } from "../graphics/core";
import { ButtonSprite } from "../graphics/sprites/button-sprite";

export class ClickerMode implements PointerMode {
    readonly type = PointerModes.Clicker  
    readonly pointer: Pointer
    constructor(pointer: Pointer) {
        this.pointer = pointer
    }

    onMove(pos: Point): void {
    }

    onClick(point: import("../graphics/core").Point, ctx: CanvasRenderingContext2D): void {
        const chip = this.pointer.board.cointainsPoint(point, ctx)
        if (chip && chip instanceof ButtonSprite) {
            chip.onPress(point)
        }
    }
}