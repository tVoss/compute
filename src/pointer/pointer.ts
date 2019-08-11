import { Entity, Point, Group } from '../graphics/core'
import { Board } from '../board/board';
import { ClickerMode } from './clicker-mode';
import { DeleteMode } from './delete-mode';
import { GrabberMode } from './grabber-mode';
import { StartWireMode } from './start-wire-mode';

export enum PointerModes {
    Clicker,
    Delete,
    Grab,
    MoveChip,
    PlaceWire,
    StartWire,
    _size
}

export namespace PointerModes {
    export function getAll() {
        return Array.from(Array(PointerModes._size).keys()).map(i => PointerModes[i])
    }
    export function getUiModes(pointer: Pointer) {
        return [
            new GrabberMode(pointer),
            new StartWireMode(pointer),
            new ClickerMode(pointer),
            new DeleteMode(pointer),
        ]
    }
}

export interface PointerMode {
    readonly type: PointerModes
    readonly canChange: boolean
    onMove(pos: Point, ctx: CanvasRenderingContext2D): void
    onClick(point: Point, ctx: CanvasRenderingContext2D): void
}

class NullMode implements PointerMode {
    type: PointerModes._size    
    canChange = true
    onMove(pos: Point, ctx: CanvasRenderingContext2D): void {
    }
    onClick(point: Point, ctx: CanvasRenderingContext2D): void {
    }
}

export class Pointer extends Group {
    private _mode: PointerMode

    public board: Board
    constructor(board: Board) {
        super()
        this.board = board
        this._scale = 30
        this._mode = new NullMode()
    }

    readonly onModeChange: ((mode: PointerModes) => void)[] = []

    get mode() {
        return this._mode
    }

    setMode(mode: PointerMode): boolean {
        if (!this._mode.canChange) {
            return false
        }
        this._mode = mode
        this.onModeChange.forEach(cb => cb(mode.type))
        return true
    }

    onMove(point: Point, ctx: CanvasRenderingContext2D) {
        this._localPosition = point
        this.mode.onMove(point, ctx)
    }

    onClick(point: Point, ctx: CanvasRenderingContext2D) {
        this.mode.onClick(point, ctx)
    }
}