import { Entity, Point, Group } from '../graphics/core'
import { Board } from '../board/board';

export enum PointerModes {
    Clicker,
    Grab,
    MoveChip,
    Delete,
    Wire,
    _size
}

export namespace PointerModes {
    export function getAll() {
        return Array.from(Array(PointerModes._size).keys()).map(i => PointerModes[i])
    }
}

export interface PointerMode {
    readonly type: PointerModes
    onMove(pos: Point, ctx: CanvasRenderingContext2D): void
    onClick(point: Point, ctx: CanvasRenderingContext2D): void
}


export class Pointer extends Group {
    private _mode: PointerMode

    public board: Board
    constructor(board: Board) {
        super()
        this.board = board
        this._scale = 30
    }

    readonly onModeChange: ((mode: PointerModes) => void)[] = []

    get mode() {
        return this._mode
    }

    set mode(mode: PointerMode) {
        this._mode = mode
        this.onModeChange.forEach(cb => cb(mode.type))
    }

    onMove(point: Point, ctx: CanvasRenderingContext2D) {
        this.mode.onMove(point, ctx)
    }

    onClick(point: Point, ctx: CanvasRenderingContext2D) {
        this.mode.onClick(point, ctx)
    }
}