import { PointerMode, PointerModes, Pointer } from './pointer'
import { Point } from '../graphics/core';
import { MoveChipMode } from './move-chip-mode'
import { ChipSprite } from '../graphics/sprites/chip-sprite';

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
        const hoverChip = this.pointer.board.cointainsPoint(pos, ctx)
        if (!hoverChip) {
            this.hoverChip && (this.hoverChip.scale = 1)
            this.hoverChip && this.updateWires(this.hoverChip)
        } else {
            hoverChip.scale = 1.2
            this.updateWires(hoverChip)
        }
        this.hoverChip = hoverChip || undefined
    }

    updateWires(chip: ChipSprite)  {
        chip.chip.inputs.forEach(i => {
            const ws = this.pointer.board.findConnectedWire(i)
            ws && ws.updateNodes()
        })
        chip.chip.outputs.forEach(o => {
            const ws = this.pointer.board.findConnectedWire(o)
            ws && ws.updateNodes()
        })
    }


    onClick(point: Point, ctx: CanvasRenderingContext2D): void {
        const chip = this.pointer.board.cointainsPoint(point, ctx)
        if (!chip) {
            return
        }
        const moveChip = new MoveChipMode(this.pointer, chip, this)
        this.pointer.setMode(moveChip)
    }
    
    onRemove(): void {
        this.hoverChip && (this.hoverChip.scale = 1)
    }
}