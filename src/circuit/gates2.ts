import {Input, Output, Signal, Component} from './core2'

export class AndGate {
    private _a: Signal = false
    private _b: Signal = false

    readonly a: Input = (value: Signal) => {
        this._a = value
    }

    readonly b: Input = (value: Signal) => {
        this._b = value
    }

    readonly x: Output = (): Signal => {
        return this._a && this._b
    }

    readonly inputs = [this.a, this.b]
    readonly outputs = [this.x]
}