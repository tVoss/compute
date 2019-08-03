export const DS = 50

export interface Point {
    x: number
    y: number
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
        this._parent = parent
        this._parent.addChild(this)
    }

    removeParent() {
        const globalPos = this.position
        this._parent.removeChild(this)
        this._parent = undefined
        this._localPosition = globalPos
    }

    set position(value: Point) {
        this._localPosition.x = value.x
        this._localPosition.y = value.y
    }

    abstract draw(ctx: CanvasRenderingContext2D): void
    abstract cointainsPoint(point: Point, ctx: CanvasRenderingContext2D): boolean
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

    cointainsPoint(point: Point, ctx: CanvasRenderingContext2D) {
        return this._children.some(c => c.cointainsPoint(point, ctx))    
    }
}
