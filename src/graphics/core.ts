export const DS = 50

export interface Point {
    x: number
    y: number
}

export namespace Point {

    export function dist(a: Point, b: Point): number {
        return Math.sqrt(dist2(a, b))
    }

    export function dist2(a: Point, b: Point): number {
        const dx = a.x - b.x
        const dy = a.y - b.y
        return dx * dx + dy * dy
    }

    export function sub(a: Point, b: Point): Point {
        return { x: a.x - b.x, y: a.y - b.y }
    }

    export function rotate(point: Point, center: Point, radians: number): Point {
        var x = Math.cos(radians) * (point.x - center.x) - Math.sin(radians) * (point.y - center.y) + center.x;
        var y = Math.sin(radians) * (point.x - center.x) + Math.cos(radians) * (point.y - center.y) + center.y;
        return { x, y }
    }
}

export enum Orientation {
    Right,
    Down,
    Left,
    Up
}

export namespace Orientation {
    export function add(a: Orientation, b: Orientation): Orientation {
        return (a + b) % 4 
    }
}

export abstract class Entity {
    protected _parent?: Group
    protected _localPosition: Point
    protected _scale: number
    protected _zIndex: number
    protected _orientation: Orientation = Orientation.Right

    constructor() {
        this._localPosition = { x: 0, y: 0 }
        this._scale = 1
        this._zIndex = 0
    }

    get position(): Point {
        if (!this._parent) {
            return this._localPosition
        }
        return {
            x: this._localPosition.x + this._parent.position.x,
            y: this._localPosition.y + this._parent.position.y
        }
    }
    set position(value: Point) {
        this._localPosition.x = value.x
        this._localPosition.y = value.y
    }

    get orientation(): Orientation {
        if (!this.parent) {
            return this._orientation
        }
        return Orientation.add(this.parent.orientation, this._orientation)
    }

    set orientation(orientation: Orientation) {
        this._orientation = orientation
    }

    get zIndex(): number {
        return this._parent
            ? this._parent.zIndex + this._zIndex
            : this._zIndex
    }

    get scale(): number {
        return this._parent
            ? this._parent._scale * this._scale
            : this._scale
    }

    set scale(scale: number) {
        this._scale = scale
    }
    
    get parent() {
        return this._parent
    }

    setParent(parent: Group) {
        if (this._parent) {
            this.removeParent()
        }
        this._parent = parent
        this._parent.addChild(this)
    }

    removeParent() {
        const globalPos = this.position
        this._parent && this._parent.removeChild(this)
        this._parent = undefined
        this._localPosition = globalPos
    }
    
    onDraw(ctx: CanvasRenderingContext2D) {
        ctx.save()
        ctx.translate(this.position.x, this.position.y)
        ctx.rotate(this._orientation * Math.PI / 2)
        ctx.translate(-this.position.x, -this.position.y)
        this.draw(ctx)
        ctx.restore()
    }

    protected abstract draw(ctx: CanvasRenderingContext2D): void
    abstract cointainsPoint(point: Point, ctx: CanvasRenderingContext2D): Entity | null
}

export abstract class Group extends Entity {
    protected _children: Entity[]

    constructor() {
        super()
        this._children = []
    }

    get allChildren(): Entity[] {
        return [
            ...this._children,
            ...this._children
                .filter(e => e instanceof Group)
                .flatMap((g: Group) => g.allChildren)
        ]
    }

    addChild(entity: Entity) {
        this._children.push(entity)
    }

    removeChild(entity: Entity) {
        this._children = this._children.filter(c => c !== entity)
    }

    draw(ctx: CanvasRenderingContext2D) {
        const sorted = this._children.sort((a, b) => a.zIndex - b.zIndex)
        sorted.forEach(e => e.onDraw(ctx))
    }

    cointainsPoint(point: Point, ctx: CanvasRenderingContext2D) {
        const children = this.allChildren
        for (let i = 0; i < children.length; i++) {
            const hit = children[i].cointainsPoint(point, ctx)
            if (hit) {
                return hit
            }
        }
        return null
    }
}
