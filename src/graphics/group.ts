import { Point } from '../util/point';
import { Entity } from './entity';
export abstract class Group extends Entity {
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
        sorted.forEach(e => e.draw(ctx));
    }
    tryFindEntity(point: Point, ctx: CanvasRenderingContext2D) {
        const children = this.allChildren;
        for (let i = 0; i < children.length; i++) {
            const hit = children[i].tryFindEntity(point, ctx);
            if (hit) {
                return hit;
            }
        }
        return null;
    }
}
