import { PointerMode, PointerModes, Pointer } from './pointer'
import { Point } from '../graphics/core';
import { MoveChipMode } from './move-chip-mode'
import { ChipSprite } from '../graphics/sprites/chip-sprite';

export class GrabberMode implements PointerMode {
    readonly type = PointerModes.Grab    
    readonly pointer: Pointer
    hoverChip: ChipSprite | null

    constructor(pointer: Pointer) {
        this.pointer = pointer
        this.hoverChip = null
    }

    onMove(pos: Point, ctx: CanvasRenderingContext2D): void {
        const hoverChip = this.pointer.board.cointainsPoint(pos, ctx)
        if (!hoverChip) {
            this.hoverChip && (this.hoverChip.scale = 1)
        } else {
            hoverChip.scale = 1.2
        }
        this.hoverChip = hoverChip
    }

    onClick(point: Point, ctx: CanvasRenderingContext2D): void {
        const chip = this.pointer.board.cointainsPoint(point, ctx)
        if (!chip) {
            return
        }
        this.hoverChip && (this.hoverChip.scale = 1)
        const moveChip = new MoveChipMode(this.pointer, chip, this)
        this.pointer.mode = moveChip
    }
}