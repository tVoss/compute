import { Point } from '../util/point';
import { Entity } from './entity';

export class Group extends Entity {
    protected _children: Entity[];
    constructor() {
        super();
        this._children = [];
    }
    get allChildren(): Entity[] {
        return [
            ...this._children,
            ...this._children
                .filter(e => e instanceof Group)
                .flatMap((g: Group) => g.allChildren)
        ];
    }
    addChild(entity: Entity) {
        this._children.push(entity);
    }
    removeChild(entity: Entity) {
        this._children = this._children.filter(c => c !== entity);
    }
    onDraw(ctx: CanvasRenderingContext2D) {
        const sorted = this._children.sort((a, b) => a.zIndex - b.zIndex);
        if (this._logStuff) {
            console.log('Drawing ' + sorted.length + ' children')
        }
        sorted.forEach(e => e.draw(ctx));
    }
    tryFindEntity(point: Point, ctx: CanvasRenderingContext2D) {
        const children = this._children;
        this.transformCtx(ctx)
        let entity: Entity | null = null
        for (let i = 0; i < children.length; i++) {
            const hit = children[i].tryFindEntity(point, ctx);
            if (hit) {
                entity = hit
                break
            }
        }
        ctx.restore()
        return entity
    }
}
