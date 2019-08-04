import {Input, Output, Signal, Chip, ChipType} from './core'

export class Source implements Chip {
    readonly x: Output

    readonly type = ChipType.Source
    readonly name: string    
    constructor(x: Output, name: string) {
        this.x = x
        this.name = 'SRC - ' + name
    }
}

export class AndGate implements Chip {
    readonly name: string
    readonly type = ChipType.And
    constructor(name: string) {
        this.name = 'AND - ' + name
    }

    _a: Signal = null
    _b: Signal = null
    readonly a: Input = (value: Signal) => this._a = value
    readonly b: Input = (value: Signal) => this._b = value
    readonly x: Output = (): Signal => {
        if (Chip.anyNulls(this._a, this._b)) {
            return null
        }
        return this._a && this._b
    }
}

export class OrGate implements Chip {
    readonly name: string
    readonly type = ChipType.Or
    constructor(name: string) {
        this.name = 'OR - ' + name
    }

    _a: Signal = null
    _b: Signal = null
    readonly a: Input = (value: Signal) => this._a = value
    readonly b: Input = (value: Signal) => this._b = value
    readonly x: Output = () => {
        if (Chip.anyNulls(this._a, this._b)) {
            return null
        }
        return this._a || this._b
    }
}

export class NotGate implements Chip {
    _a: Signal = null

    readonly a: Input = (value: Signal) => this._a = value
    readonly x: Output = () => this._a === null ? null : !this._a

    readonly name: string
    readonly type = ChipType.Not
    constructor(name: string) {
        this.name = 'NOT - ' + name
    }
}

export class NandGate implements Chip {
    readonly name: string;    
    readonly type = ChipType.Nand
    constructor(name: string) {
        this.name = 'NAND - ' + name
    }

    _a: Signal = null
    _b: Signal = null

    readonly a = (value: Signal) => this._a = value
    readonly b = (value: Signal) => this._b = value
    readonly x = () => {
        if (Chip.anyNulls(this._a, this._b)) {
            return null
        }
        return !(this._a && this._b)
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
    readonly type = ChipType.TriState
    constructor(name: string) {
        this.name = 'TRI-STATE - ' + name
    }
}