import { Entity } from "../entity";
import { Input } from "../../chips/input";
import { Output } from "../../chips/output";
import { Chip } from "../../chips/chip";
import { Board } from "../../board/board";
import { Point } from "../../util/point";
import { Port } from "../../chips/core";

export type DrawPath = CanvasPath & CanvasDrawPath;

export abstract class ChipSprite extends Entity {
    protected static readonly kSize = 25;

    private _grid = 5;
    protected _scale = 1;
    protected _board?: Board;

    abstract readonly chip: Chip;
    abstract makeChipBodyPath(ctx: DrawPath): void;

    get position() {
        return this.alignToGrid(super.position);
    }

    set position(value: Point) {
        super.position = this.alignToGrid(value);
    }

    set board(value: Board) {
        this._board = value;
    }

    alignToGrid(p: Point): Point {
        const scaled = Point.div(p, this._grid);
        const round = Point.round(scaled);
        return Point.mul(round, this._grid);
    }

    onHover() {
        this.scale = 1.1;
        this.updateWires();
    }

    onUnhover() {
        this.scale = 1;
        this.updateWires();
    }

    getInputPos(input: Input): Point | null {
        if (!this.chip.inputs.has(input.id)) {
            return null;
        }
        const count = this.chip.inputs.size;
        const idx = [...this.chip.inputs.keys()].sort().indexOf(input.id);

        const pos = {
            x: this.worldPos.x - ChipSprite.kSize * this.scale,
            y:
                this.worldPos.y -
                ChipSprite.kSize * this.scale +
                ((ChipSprite.kSize * this.scale * 2) / (count + 1)) *
                    (1 + idx)
        };
        return Point.rotate(
            pos,
            this.worldPos,
            (Math.PI / 2) * this.orientation
        );
    }

    getOutputPos(output: Output): Point | null {
        if (!this.chip.outputs.has(output.id)) {
            return null;
        }
        const count = this.chip.outputs.size;
        const idx = [...this.chip.outputs.keys()].sort().indexOf(output.id);

        const pos = {
            x: this.worldPos.x + ChipSprite.kSize,
            y:
                this.worldPos.y -
                ChipSprite.kSize * this.scale +
                ((ChipSprite.kSize * this.scale * 2) / (count + 1)) *
                    (1 + idx)
        };
        return Point.rotate(
            pos,
            this.worldPos,
            (Math.PI / 2) * this.orientation
        );
    }

    updateWires() {
        const board = this._board;
        if (!board) {
            return;
        }
        this.chip.inputs.forEach(i => {
            board.findConnectedWires(i).forEach(ws => ws.updateNodes());
        });
        this.chip.outputs.forEach(o => {
            board.findConnectedWires(o).forEach(ws => ws.updateNodes());
        });
    }

    tryFindPort(point: Point, radius: number): Port | null {
        for (const input of this.chip.inputs.values()) {
            const pos = this.getInputPos(input) as Point;
            const hit = Point.dist(point, pos) <= radius;
            if (hit) {
                return input;
            }
        }
        for (const output of this.chip.outputs.values()) {
            const pos = this.getOutputPos(output) as Point;
            const hit = Point.dist(point, pos) <= radius;
            if (hit) {
                return output;
            }
        }
        return null;
    }

    tryFindEntity(point: Point, ctx: CanvasRenderingContext2D): Entity | null {
        this.transformCtx(ctx);
        this.makeChipBodyPath(ctx);
        const entity = ctx.isPointInPath(point.x, point.y) ? this : null;
        ctx.restore();
        return entity;
    }
}
