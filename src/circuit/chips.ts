import {Input, Output, Signal, Chip} from './core'

export class AndGate implements Chip {
    _a: Signal = null
    _b: Signal = null
    readonly a: Input = (value: Signal) => this._a = value
    readonly b: Input = (value: Signal) => this._b = value
    readonly x: Output = (): Signal => this._a && this._b
    readonly inputs = [this.a, this.b]
    readonly outputs = [this.x]
    readonly name: string
    constructor(name: string) {
        this.name = 'AND - '
    }
}

export class OrGate implements Chip {
    _a: Signal = null
    _b: Signal = null
    readonly a: Input = (value: Signal) => this._a = value
    readonly b: Input = (value: Signal) => this._b = value
    readonly x: Output = () => this._a || this._b
    readonly inputs = [this.a, this.b]
    readonly outputs = [this.x]
    readonly name: string
    constructor(name: string) {
        this.name = 'OR - '
    }
}

export class NotGate implements Chip {
    _a: Signal = null
    readonly a: Input = (value: Signal) => this._a = value
    readonly x: Output = () => this._a === null ? null : !this._a
    readonly inputs = [this.a]
    readonly outputs = [this.x]
    readonly name: string
    constructor(name: string) {
        this.name = 'NOT - '
    }
}

export class TriState implements Chip {
    _a: Signal
    _en: Signal
    readonly a: Input = (value: Signal) => this._a = value
    readonly en: Input = (value: Signal) => this._en = value
    readonly x: Output = () => this._en ? this._a : null
    readonly inputs = [this.a, this.en]
    readonly outputs = [this.x]
    readonly name: string
    constructor(name: string) {
        this.name = 'TRI-STATE - '
    }
}