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

export abstract class Entity {
    protected _parent?: Group
    protected _localPosition: Point
    protected _scale: number

    constructor() {
        this._localPosition = { x: 0, y: 0 }
        this._scale = 50
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

    set parent(parent: Group) {
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

    set position(value: Point) {
        this._localPosition.x = value.x
        this._localPosition.y = value.y
    }

    abstract draw(ctx: CanvasRenderingContext2D): void
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
        this._children.forEach(c => c.draw(ctx))
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
