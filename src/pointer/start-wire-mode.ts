import { PointerMode, PointerModes, Pointer } from './pointer'
import { Highlight } from './highlight';
import { PlaceWireMode } from './place-wire-mode'
import { Point } from '../util/point';

export class StartWireMode implements PointerMode {
    readonly type = PointerModes.StartWire    
    readonly pointer: Pointer
    readonly highlight = new Highlight()
    readonly canChange = true

    constructor(pointer: Pointer) {
        this.pointer = pointer
    }

    onMove(pos: Point, ctx: CanvasRenderingContext2D): void {
        const port = this.pointer.board.tryFindPort(pos, 10)
        if (!port) {
            this.highlight.removeParent()
            return
        }
        const portPos = this.pointer.board.getPortPos(port)
        if (!portPos) {
            this.highlight.removeParent()
            return
        }
        this.highlight.position = portPos
        this.highlight.setParent(this.pointer.board)
    }

    onClick(point: Point, ctx: CanvasRenderingContext2D): void {
        const port = this.pointer.board.tryFindPort(point, 10)
        if (!port) {
            return
        }
        const portPos = this.pointer.board.getPortPos(port);
        if (!portPos) {
            return
        }
        this.highlight.removeParent()
        const placeWire = new PlaceWireMode(this.pointer, port)
        this.pointer.setMode(placeWire)
    }

    onRemove() {
        this.highlight.removeParent()
    }
}