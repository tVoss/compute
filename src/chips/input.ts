import { Signal } from './core'

export class Input {
    readonly id: string
    private _signal: Signal = null

    constructor(id: string) {
        this.id = id
    }
    get sig() {
        return this._signal
    }
    put(signal: Signal) {
        this._signal = signal
    }
}