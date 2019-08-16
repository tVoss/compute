import { Entity, Point, Orientation } from "../core";
import { Input } from "../../chips/input";
import { Output } from "../../chips/output";
import { Chip } from "../../chips/chip";
import { Board } from "../../board/board";

export type DrawPath = CanvasPath & CanvasDrawPath

export abstract class ChipSprite extends Entity {
    private _grid = 20

    abstract chip: Chip

    protected abstract _getInputPos(input: Input): Point | null
    protected abstract _getOutputPos(output: Output): Point | null
    abstract makeChipBodyPath(ctx: DrawPath): void
    
    get position() {
        return this.alignToGrid(super.position)
    }

    set position(value: Point) {
        const p = this.alignToGrid(value)
        this._localPosition.x = p.x
        this._localPosition.y = p.y
    }

    getInputPos(input: Input): Point | null {
        if (!this.chip.inputs.has(input.id)) {
            return null
        }
        const count = this.chip.inputs.size;
        const idx = [...this.chip.inputs.keys()]
            .sort().indexOf(input.id)

        const pos = {
            x: this.position.x - this.scale,
            y: this.position.y - this.scale + (this.scale * 2 / (count + 1)) * (1 + idx)
        }
        return pos
        //return Point.rotate(pos, this.position, this.orientation * Math.PI / 2)
    }

    getOutputPos(output: Output): Point | null {
        const pos = this._getOutputPos(output)
        if (pos === null) {
            return null
        }
        return Point.rotate(pos, this.position, this.orientation * Math.PI / 2)
    }

    alignToGrid(p: Point): Point {
        return {
            x: p.x - ((p.x - this._grid / 2) % (this._grid * 1)),
            y: p.y - ((p.y - this._grid / 2) % (this._grid * 1))
        }
    }

    updateWires(board: Board) {
        this.chip.inputs.forEach(i => {
            board.findConnectedWires(i).forEach(ws => ws.updateNodes())
        })
        this.chip.outputs.forEach(o => {
            board.findConnectedWires(o).forEach(ws => ws.updateNodes())
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
            const pos = this._getOutputPos(output) as Point
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