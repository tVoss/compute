export type Signal = boolean | null

export type Input = (value: Signal) => void
export type Output = () => Signal

export interface Chip {
    readonly name: string
    readonly inputs: Input[]
    readonly outputs: Output[]
}

export class Wire {
    readonly name: string
    readonly inputs: Input[] 
    readonly outputs: Output[] 

    _next: Signal

    constructor(name: string, outputs?: Output[], inputs?: Input[]) {
        this.name = name
        this.outputs = outputs || []
        this.inputs = inputs || []
    }

    read(): void {
        const activeSignals = this.outputs
            .map((o, i) => [i, o()])
            .filter(s => s[1] !== null)

        if (activeSignals.length > 1) {
            throw new Error(`Multiple active signals on wire ${this.name}:\n${JSON.stringify(activeSignals)}`)
        }
        if (activeSignals.length === 1) {
            this._next = activeSignals[0][1] as unknown as Signal
        } else {
            this._next = null
        }

        console.log(`Wire ${this.name} read value ${this._next}`)
    }

    write(): void {
        this.inputs.forEach(i => i(this._next))
    }
}