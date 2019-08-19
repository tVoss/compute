import { Point } from "../util/point";
import { Orientation } from "./orientation";
import { Group } from "./group";

export abstract class Entity {
    protected _parent?: Group;
    protected _position: Point;
    protected _scale: number;
    protected _zIndex: number;
    protected _orientation: Orientation = Orientation.Right;
    protected _logStuff = false;
    constructor() {
        this._position = { x: 0, y: 0 };
        this._scale = 1;
        this._zIndex = 0;
    }
    get worldPos(): Point {
        if (this.parent) {
            return Point.add(this.parent.worldPos, this.position);
        }
        return this.position;
    }
    get position(): Point {
        return this._position;
    }
    set position(value: Point) {
        this._position = { ...value };
    }
    get worldScale(): number {
        if (this.parent) {
            return this.parent.worldScale * this.scale
        }
        return this.scale
    }
    get scale(): number {
        return this._scale;
    }
    set scale(scale: number) {
        this._scale = scale;
    }
    get worldOrientation(): Orientation {
        if (this.parent) {
            return this.parent.worldOrientation + this.orientation
        }
        return this.orientation
    }
    get orientation(): Orientation {
        return this._orientation
    }
    rotate(orientation: Orientation) {
        this._orientation = this._orientation + orientation;
    }
    get zIndex(): number {
        return this._parent ? this._parent.zIndex + this._zIndex : this._zIndex;
    }
    get parent() {
        return this._parent;
    }
    setParent(parent: Group) {
        if (this._parent) {
            this.removeParent();
        }
        this._parent = parent;
        this._parent.addChild(this);
    }
    removeParent() {
        const globalPos = this.position;
        this._parent && this._parent.removeChild(this);
        this._parent = undefined;
        this._position = globalPos;
    }
    protected abstract onDraw(ctx: CanvasRenderingContext2D): void;
    protected transformCtx(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.scale(1 * this.scale, 1 * this.scale);
        ctx.rotate((this._orientation * Math.PI) / 2);
    }
    draw(ctx: CanvasRenderingContext2D) {
        this.transformCtx(ctx);
        this.onDraw(ctx);
        ctx.restore();
    }
    onHover(ctx: CanvasRenderingContext2D) {}
    onUnhover(ctx: CanvasRenderingContext2D) {}
    abstract tryFindEntity(
        point: Point,
        ctx: CanvasRenderingContext2D
    ): Entity | null;
}
