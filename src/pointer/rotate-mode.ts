import { PointerMode, PointerModes, Pointer } from "./pointer";
import { Point, Orientation } from "../graphics/core";
import { ChipSprite } from "../graphics/sprites/chip-sprite";

export class RotateMode implements PointerMode {
    readonly type = PointerModes.Rotate
    readonly canChange = true
    
    readonly pointer: Pointer
    hoverChip?: ChipSprite
    constructor(pointer: Pointer) {
        this.pointer = pointer
    }

    onMove(pos: Point, ctx: CanvasRenderingContext2D): void {
        const chip = this.pointer.board.cointainsPoint(pos, ctx)
        if (!chip) {
            this.onRemove()
            return
        }
        chip.scale = 1.2
        chip.updateWires(this.pointer.board)
        this.hoverChip = chip
    }
    
    onClick(point: Point, ctx: CanvasRenderingContext2D): void {
        const chip = this.pointer.board.cointainsPoint(point, ctx)
        if (!chip) {
            return
        }
        chip.orientation = Orientation.add(chip.orientation, 1)
    }
    
    onRemove(): void {
        if (this.hoverChip) {
            this.hoverChip.scale = 1
            this.hoverChip.updateWires(this.pointer.board)
            this.hoverChip = undefined
        }
    }
}