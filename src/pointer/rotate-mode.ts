import { PointerMode, PointerModes, Pointer } from "./pointer";
import { Orientation } from "../graphics/orientation";
import { ChipSprite } from "../graphics/sprites/chip-sprite";
import { Point } from "../util/point";

export class RotateMode implements PointerMode {
    readonly type = PointerModes.Rotate
    readonly canChange = true
    
    readonly pointer: Pointer
    hoverChip?: ChipSprite
    constructor(pointer: Pointer) {
        this.pointer = pointer
    }

    onMove(pos: Point, ctx: CanvasRenderingContext2D): void {
        const chip = this.pointer.board.tryFindEntity(pos, ctx)
        if (!chip) {
            this.onRemove()
            return
        }
        chip.onHover()
        this.hoverChip = chip
    }
    
    onClick(point: Point, ctx: CanvasRenderingContext2D): void {
        const chip = this.pointer.board.tryFindEntity(point, ctx)
        if (!chip) {
            return
        }
        chip.orientation = Orientation.add(chip.orientation, 1)
        chip.updateWires()
    }
    
    onRemove(): void {
        if (this.hoverChip) {
            this.hoverChip.onUnhover()
            this.hoverChip = undefined
        }
    }
}