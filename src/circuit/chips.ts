import {Input, Output, Signal, Chip, ChipType} from './core'

export class Source extends Chip {
    readonly x: Output
    
    constructor(x: Output, name: string) {
        super('SRC - ' + name, ChipType.Source)
        this.x = x
        this.outputs.add(x)
    }
}

export class AndGate extends Chip {
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

    constructor(name: string) {
        super('AND - ' + name, ChipType.And)
        this.inputs.add(this.a)
        this.inputs.add(this.b)
        this.outputs.add(this.x)
    }
}

export class OrGate extends Chip {
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

    constructor(name: string) {
        super('OR - ' + name, ChipType.Or)
        this.inputs.add(this.a)
        this.inputs.add(this.b)
        this.outputs.add(this.x)
    }
}

export class NotGate extends Chip {
    _a: Signal = null
    readonly a: Input = (value: Signal) => this._a = value
    readonly x: Output = () => this._a === null ? null : !this._a

    constructor(name: string) {
        super('NOT = ' + name, ChipType.Not)
        this.inputs.add(this.a)
        this.outputs.add(this.x)
    }
}

export class NandGate extends Chip {
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

    constructor(name: string) {
        super('NAND - ' + name, ChipType.Nand)
        this.inputs.add(this.a)
        this.inputs.add(this.b)
        this.outputs.add(this.x)
    }
}

export class TriState extends Chip {
    _a: Signal
    _en: Signal
    readonly a: Input = (value: Signal) => this._a = value
    readonly en: Input = (value: Signal) => this._en = value
    readonly x: Output = () => this._en ? this._a : null

    constructor(name: string) {
        super('TRI - ' + name, ChipType.TriState)
        this.inputs.add(this.a)
        this.inputs.add(this.en)
        this.outputs.add(this.x)
    }
}