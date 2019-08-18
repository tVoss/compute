import { PointerMode, PointerModes, Pointer } from "./pointer";
import { Point } from "../util/point";

export class DeleteMode implements PointerMode {
    readonly type = PointerModes.Delete   
    readonly canChange = true
    readonly pointer: Pointer
    constructor(pointer: Pointer) {
        this.pointer = pointer
    }

    onMove(pos: Point, ctx: CanvasRenderingContext2D): void {
    }

    onClick(point: Point, ctx: CanvasRenderingContext2D): void {
        const chip = this.pointer.board.tryFindEntity(point, ctx)
        if (!chip) {
            return
        }
        this.pointer.board.removeChip(chip)
    }

    onRemove(): void {
    }

}