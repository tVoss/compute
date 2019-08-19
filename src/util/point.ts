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

    export function add(a: Point, b: Point) {
        return {x: a.x + b.x, y: a.y + b.y }
    }

    export function sub(a: Point, b: Point): Point {
        return { x: a.x - b.x, y: a.y - b.y }
    }

    export function div(p: Point, d: number) {
        return {
            x: p.x / d,
            y: p.y / d
        }
    }

    export function mul(p: Point, m: number) {
        return {
            x: p.x * m,
            y: p.y * m
        }
    }

    export function round(p: Point) {
        return {
            x: Math.round(p.x),
            y: Math.round(p.y)
        }
    }

    export function rotate(point: Point, center: Point, radians: number): Point {
        var x = Math.cos(radians) * (point.x - center.x) - Math.sin(radians) * (point.y - center.y) + center.x;
        var y = Math.sin(radians) * (point.x - center.x) + Math.cos(radians) * (point.y - center.y) + center.y;
        return { x, y }
    }

    export function inRect(point: Point, topLeft: Point, bottomRight: Point) {
        return point.x >= topLeft.x && point.x <= bottomRight.x
            && point.y >= topLeft.y && point.y <= bottomRight.y
    }
}