import { Point } from '../util/point';
import { Orientation } from "./orientation";
import { Group } from "./group";

export abstract class Entity {
    protected _parent?: Group;
    protected _localPosition: Point;
    protected _scale: number;
    protected _zIndex: number;
    protected _orientation: Orientation = Orientation.Right;
    constructor() {
        this._localPosition = { x: 0, y: 0 };
        this._scale = 1;
        this._zIndex = 0;
    }
    get position(): Point {
        if (!this._parent) {
            return this._localPosition;
        }
        return {
            x: this._localPosition.x * this._parent.scale + this._parent.position.x,
            y: this._localPosition.y * this._parent.scale + this._parent.position.y
        };
    }
    set position(value: Point) {
        this._localPosition.x = value.x;
        this._localPosition.y = value.y;
    }
    get orientation(): Orientation {
        if (!this.parent) {
            return this._orientation;
        }
        return Orientation.add(this.parent.orientation, this._orientation);
    }
    set orientation(orientation: Orientation) {
        this._orientation = orientation;
    }
    get zIndex(): number {
        return this._parent
            ? this._parent.zIndex + this._zIndex
            : this._zIndex;
    }
    get scale(): number {
        return this._parent
            ? this._parent._scale * this._scale
            : this._scale;
    }
    set scale(scale: number) {
        this._scale = scale;
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
        this._localPosition = globalPos;
    }
    protected abstract onDraw(ctx: CanvasRenderingContext2D): void;
    draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.scale(1 * this.scale, 1 * this.scale)
        ctx.rotate(this._orientation * Math.PI / 2);
        ctx.translate(-this.position.x, -this.position.y);
        this.onDraw(ctx);
        ctx.restore();
    }
    onHover(ctx: CanvasRenderingContext2D) { }
    onUnhover(ctx: CanvasRenderingContext2D) { }
    abstract tryFindEntity(point: Point, ctx: CanvasRenderingContext2D): Entity | null;
}
