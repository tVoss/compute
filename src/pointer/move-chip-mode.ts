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
        
        chip.position = { x: 0, y: 0 }
        chip.setParent(this.pointer)
        chip.updateWires(pointer.board)
    }

    onMove(pos: Point): void {
        console.log(pos)
        this.chip.updateWires(this.pointer.board)
    }

    onClick(point: Point, ctx: CanvasRenderingContext2D): void {
        this.canChange = true
        this.pointer.setMode(this.lastMode)
    }

    onRemove(): void {
        this.chip.removeParent()
        if (this.oldParent) {
            this.chip.setParent(this.oldParent)
            this.chip.updateWires(this.pointer.board)
        }
    }
}