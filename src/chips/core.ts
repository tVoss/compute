import { Input } from "./input";
import { Output } from "./output";

export type Signal = boolean | null
export namespace Signal {
    export function anyNulls(...signals: Signal[]) {
        return signals.filter(s => s === null).length > 0
    }
}

export class Wire {
    readonly id: string
    readonly inputs: Map<string, Input>
    readonly outputs: Map<string, Output> 

    _nextSignal: Signal = null

    constructor(id: string, outputs?: Output[], inputs?: Input[]) {
        this.id = id
        this.inputs = new Map(inputs && inputs.map(i => [i.id, i]))
        this.outputs = new Map(outputs && outputs.map(o => [o.id, o]))
    }

    read(): void {
        let activeSignals: Signal[] = []
        for (let o of this.outputs.values()) {
            const s = o.get()
            if (s !== null) {
                activeSignals.push(s)
            }
        }

        if (activeSignals.length > 1) {
            throw new Error(`Multiple active signals on wire ${this.id}:\n${JSON.stringify(activeSignals)}`)
        }
        if (activeSignals.length === 1) {
            this._nextSignal = activeSignals[0] as Signal
        } else {
            this._nextSignal = null
        }

        console.log(`Wire ${this.id} read value ${this._nextSignal}`)
    }

    write(): void {
        this.inputs.forEach(i => i.put(this._nextSignal))
    }
}