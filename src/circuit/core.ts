export type Signal = boolean | null

export type Input = (value: Signal) => void
export type Output = () => Signal

export enum ChipType {
    Source,
    And,
    Or,
    Not,
    TriState,
    Nand
}

export class Chip {
    private static _nextId = 0

    readonly id: number
    readonly name: string
    readonly type: ChipType
    readonly inputs: Set<Input>
    readonly outputs: Set<Output>

    constructor(name: string, type: ChipType) {
        this.id = Chip._nextId++
        this.name = 'CHiP - ' + name
        this.type = type
        this.inputs = new Set<Input>()
        this.outputs = new Set<Output>()
    }
}

export namespace Chip {
    export function anyNulls(...signals: Signal[]) {
        return signals.filter(s => s === null).length > 0
    }
}

export class Wire {
    private static _nextWireId = 0

    readonly id: number
    readonly name: string
    readonly inputs: Set<Input> 
    readonly outputs: Set<Output> 

    _nextSignal: Signal = null

    constructor(name: string, outputs?: Output[], inputs?: Input[]) {
        this.name = name
        this.inputs = new Set(inputs)
        this.outputs = new Set(outputs)
        this.id = Wire._nextWireId++
    }

    read(): void {
        let activeSignals: Signal[] = []
        for (let o of this.outputs) {
            const s = o()
            if (s !== null) {
                activeSignals.push(s)
            }
        }

        if (activeSignals.length > 1) {
            throw new Error(`Multiple active signals on wire ${this.name}:\n${JSON.stringify(activeSignals)}`)
        }
        if (activeSignals.length === 1) {
            this._nextSignal = activeSignals[0] as Signal
        } else {
            this._nextSignal = null
        }

        console.log(`Wire ${this.name} read value ${this._nextSignal}`)
    }

    write(): void {
        this.inputs.forEach(i => i(this._nextSignal))
    }
}