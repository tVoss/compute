export enum Orientation {
    Right,
    Down,
    Left,
    Up
}

export namespace Orientation {
    export function add(a: Orientation, b: Orientation): Orientation {
        return (a + b) % 4;
    }
}
