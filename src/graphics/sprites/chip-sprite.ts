import { Entity, Point, Orientation } from "../core";
import { Input } from "../../chips/input";
import { Output } from "../../chips/output";
import { Chip } from "../../chips/chip";
import { Board } from "../../board/board";

export type DrawPath = CanvasPath & CanvasDrawPath

export abstract class ChipSprite extends Entity {
    private _grid = 25

    abstract chip: Chip

    abstract getInputPos(input: Input): Point | null
    abstract getOutputPos(output: Output): Point | null
    abstract makeChipBodyPath(ctx: DrawPath): void
    
    get position() {
        return this.alignToGrid(super.position)
    }

    set position(value: Point) {
        const p = this.alignToGrid(value)
        this._localPosition.x = p.x
        this._localPosition.y = p.y
    }

    alignToGrid(p: Point): Point {
        return {
            x: p.x - ((p.x - this._grid / 2) % (this._grid * 1)),
            y: p.y - ((p.y - this._grid / 2) % (this._grid * 1))
        }
    }

    updateWires(board: Board) {
        this.chip.inputs.forEach(i => {
            const ws = board.findConnectedWire(i)
            ws && ws.updateNodes()
        })
        this.chip.outputs.forEach(o => {
            const ws = board.findConnectedWire(o)
            ws && ws.updateNodes()
        })
    }

    tryFindPort(point: Point, radius: number): [Input | Output, Point] | null {
        for (const input of this.chip.inputs.values()) {
            const pos = this.getInputPos(input) as Point
            const hit = Point.dist(point, pos) <= radius
            if (hit) {
                return [input, pos]
            }
        }
        for (const output of this.chip.outputs.values()) {
            const pos = this.getOutputPos(output) as Point
            const hit = Point.dist(point, pos) <= radius
            if (hit) {
                return [output, pos]
            }
        }
        return null
    }

    cointainsPoint(point: Point, ctx: DrawPath): Entity | null {
        this.makeChipBodyPath(ctx)
        return ctx.isPointInPath(point.x, point.y) ? this : null
    }
}