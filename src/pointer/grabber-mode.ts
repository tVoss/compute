import { PointerMode, PointerModes, Pointer } from './pointer'
import { MoveChipMode } from './move-chip-mode'
import { ChipSprite } from '../graphics/sprites/chip-sprite';
import { Point } from '../util/point';

export class GrabberMode implements PointerMode {
    readonly type = PointerModes.Grab    
    readonly pointer: Pointer
    readonly canChange = true
    hoverChip?: ChipSprite

    constructor(pointer: Pointer) {
        this.pointer = pointer
        this.hoverChip = undefined
    }

    onMove(pos: Point, ctx: CanvasRenderingContext2D): void {
        const hoverChip = this.pointer.board.tryFindEntity(pos, ctx)
        if (!hoverChip || hoverChip !== this.hoverChip) {
            this.hoverChip && this.hoverChip.onUnhover()
        } else {
            hoverChip.onHover()
        }
        this.hoverChip = hoverChip || undefined
    }

    onClick(point: Point, ctx: CanvasRenderingContext2D): void {
        const chip = this.pointer.board.tryFindEntity(point, ctx)
        if (!chip) {
            return
        }
        this.onRemove()
        const moveChip = new MoveChipMode(this.pointer, chip, this)
        this.pointer.setMode(moveChip)
    }
    
    onRemove(): void {
        this.hoverChip && this.hoverChip.onUnhover()
        this.hoverChip = undefined
    }
}