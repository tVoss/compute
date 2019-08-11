import { PointerMode, Pointer, PointerModes } from './pointer'
import { Point, Group } from '../graphics/core';
import { ChipSprite } from '../graphics/sprites/chip-sprite';

export class MoveChipMode implements PointerMode {

    readonly type = PointerModes.MoveChip
    readonly pointer: Pointer
    readonly chip: ChipSprite
    readonly oldParent?: Group
    readonly lastMode: PointerMode

    constructor(pointer: Pointer, chip: ChipSprite, lastMode: PointerMode) {
        this.pointer = pointer
        this.chip = chip
        this.oldParent = chip.parent
        this.lastMode = lastMode
        chip.setParent(this.pointer)
    }

    onMove(pos: Point): void {
        this.chip.chip.inputs.forEach(i => {
            const ws = this.pointer.board.findConnectedWire(i)
            ws && ws.updateNodes()
        })
        this.chip.chip.outputs.forEach(o => {
            const ws = this.pointer.board.findConnectedWire(o)
            ws && ws.updateNodes()
        })
    }

    onClick(point: Point, ctx: CanvasRenderingContext2D): void {
        this.chip.removeParent()
        if (this.oldParent) {
            this.chip.setParent(this.oldParent)
        }
        this.pointer.mode = this.lastMode
    }
}