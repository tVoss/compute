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
    get position(): Point {
        return this._position;
    }
    set position(value: Point) {
        this._position = { ...value };
    }
    get scale(): number {
        return this._scale;
    }
    set scale(scale: number) {
        this._scale = scale;
    }
    get orientation(): Orientation {
        return this._orientation;
    }
    rotate(orientation: Orientation) {
        this._orientation = this._orientation + orientation;
    }
    get zIndex(): number {
        return this._zIndex;
    }
    set zIndex(value: number) {
        this._zIndex = value;
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

    draw(ctx: CanvasRenderingContext2D) {
        this.transformCtx(ctx);
        this.onDraw(ctx);
        ctx.restore();
    }
    transformPoint(p: Point) {
        const translated = Point.sub(p, this.position)
        const rotated = Point.rotate(
            translated,
            Point.zero(),
            -(this.orientation * Math.PI) / 2
        );
        const scaled = Point.div(rotated, this.scale);
        return scaled;
    }
    protected transformCtx(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.scale(this.scale, this.scale);
        ctx.rotate((this._orientation * Math.PI) / 2);
    }
    protected abstract onDraw(ctx: CanvasRenderingContext2D): void;

    onHover(ctx: CanvasRenderingContext2D) {}
    onUnhover(ctx: CanvasRenderingContext2D) {}
    tryFindEntity(point: Point, ctx: CanvasRenderingContext2D): Entity | null {
        return null;
    }
}
