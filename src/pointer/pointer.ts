import { Group } from "../graphics/group";
import { Entity } from "../graphics/entity";
import { Board } from '../board/board';
import { ClickerMode } from './clicker-mode';
import { DeleteMode } from './delete-mode';
import { GrabberMode } from './grabber-mode';
import { StartWireMode } from './start-wire-mode';
import { RotateMode } from './rotate-mode';
import { Point } from '../util/point';
import { Highlight } from "./highlight";

export enum PointerModes {
    Clicker,
    Delete,
    Grab,
    MoveChip,
    PlaceWire,
    StartWire,
    Rotate,
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
            new RotateMode(pointer)
        ]
    }
}

export interface PointerMode {
    readonly type: PointerModes
    readonly canChange: boolean
    onMove(pos: Point, ctx: CanvasRenderingContext2D): void
    onClick(point: Point, ctx: CanvasRenderingContext2D): void
    onRemove(): void
}

class NullMode implements PointerMode {
    type: PointerModes._size
    canChange = true
    onMove(pos: Point, ctx: CanvasRenderingContext2D): void { }
    onClick(point: Point, ctx: CanvasRenderingContext2D): void { }
    onRemove() { }
}

export class Pointer extends Group {
    private _mode: PointerMode

    public _board: Board
    constructor() {
        super()
        this._mode = new NullMode()
        this.zIndex = 10
    }

    readonly onModeChange: ((mode: PointerModes) => void)[] = []

    get mode() {
        return this._mode
    }

    get board() {
        return this._board
    }

    set board(value: Board) {
        this._board = value
        this.setParent(value)
    }

    getBoardPos(p: Point) {
        return this.board.transformPoint(p)
    }

    setMode(mode: PointerMode): boolean {
        if (!this._mode.canChange) {
            return false
        }
        this._mode.onRemove()
        this._mode = mode
        this.onModeChange.forEach(cb => cb(mode.type))
        return true
    }

    onMove(point: Point, ctx: CanvasRenderingContext2D) {
        this.position = this.board.transformPoint(point)
        this.mode.onMove(point, ctx)
    }

    onClick(point: Point, ctx: CanvasRenderingContext2D) {
        this.mode.onClick(point, ctx)
    }
}