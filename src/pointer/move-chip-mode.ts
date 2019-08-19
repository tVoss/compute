import { PointerMode, Pointer, PointerModes } from './pointer'
import { Group } from "../graphics/group";
import { ChipSprite } from '../graphics/sprites/chip-sprite';
import { Point } from '../util/point';

export class MoveChipMode implements PointerMode {

    readonly type = PointerModes.MoveChip
    readonly pointer: Pointer
    readonly chip: ChipSprite
    readonly oldParent?: Group
    readonly lastMode: PointerMode
    canChange = false

    constructor(pointer: Pointer, chip: ChipSprite, lastMode: PointerMode) {
        this.pointer = pointer
        this.chip = chip
        this.oldParent = chip.parent
        this.lastMode = lastMode
        
        chip.setParent(this.pointer)
        chip.position = { x: 0, y: 0 }
        chip.onHover()
    }

    onMove(pos: Point): void {
        this.chip.updateWires()
    }

    onClick(point: Point, ctx: CanvasRenderingContext2D): void {
        this.canChange = true
        this.pointer.setMode(this.lastMode)
    }

    onRemove(): void {
        this.chip.removeParent()
        this.chip.onUnhover()
        if (this.oldParent) {
            this.chip.setParent(this.oldParent)
            this.chip.position = Point.div(this.pointer.position, this.pointer.scale)
            this.chip.updateWires()
        }
    }
}