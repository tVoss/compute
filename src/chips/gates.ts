import {Signal} from './core'
import { Output } from './output';
import { Input } from './input';
import { Chip, ChipType } from './chip';

export class Button extends Chip {
    private _signal = false
    readonly x = this.createOutput('x', () => this._signal)
    constructor(id: string) {
        super(id, ChipType.Button)
    }
    press() {
        this._signal = !this._signal
    }
}

export class AndGate extends Chip {
    readonly a = this.createInput('a')
    readonly b = this.createInput('b')
    readonly x = this.createOutput('x', () => {
        if (Signal.anyNulls(this.a.sig, this.b.sig)) {
            return null
        }
        return this.a.sig && this.b.sig
    })

    constructor(id: string) {
        super(id, ChipType.And)
    }
}

export class OrGate extends Chip {
    readonly a = this.createInput('a')
    readonly b = this.createInput('b')
    readonly x = this.createOutput('x', () => {
        if (Signal.anyNulls(this.a.sig, this.b.sig)) {
            return null
        }
        return this.a.sig || this.b.sig
    })

    constructor(id: string) {
        super(id, ChipType.Or)
    }
}

export class NotGate extends Chip {
    readonly a = this.createInput('a')
    readonly x = this.createOutput('b', () => this.a.sig === null ? null : !this.a.sig)

    constructor(id: string) {
        super(id, ChipType.Not)
    }
}

export class NandGate extends Chip {
    readonly a = this.createInput('a')
    readonly b = this.createInput('b')
    readonly x = this.createOutput('x', () => {
        if (Signal.anyNulls(this.a.sig, this.b.sig)) {
            return null
        }
        return !(this.a.sig && this.b.sig)
    })

    constructor(id: string) {
        super(id, ChipType.Nand)
    }
}

export class TriState extends Chip {
    readonly a = this.createInput('a')
    readonly en = this.createInput('en')
    readonly x = this.createOutput('x', () =>  this.en.sig ? this.a.sig : null)

    constructor(id: string) {
        super(id, ChipType.TriState)
    }
}

export class Led extends Chip {
    readonly a = this.createInput('a')
    constructor(id: string) {
        super(id, ChipType.Led)
    }
}