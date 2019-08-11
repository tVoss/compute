export const DS = 50

export interface Point {
    x: number
    y: number
}

export namespace Point {
    export function dist(a: Point, b: Point) {
        return Math.sqrt(dist2(a, b))
    }
    export function dist2(a: Point, b: Point) {
        const dx = a.x - b.x
        const dy = a.y - b.y
        return dx * dx + dy * dy
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
        for (let i = 0; i < this._children.length; i++) {
            const hit = this._children[i].cointainsPoint(point, ctx)
            if (hit) {
                return hit
            }
        }
        return null
    }
}
