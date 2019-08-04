import { Signal } from "./core";

export class Output {
    readonly id: string
    readonly get: () => Signal
    constructor(id: string, get: () => Signal) {
        this.id = id
        this.get = get
    }
}