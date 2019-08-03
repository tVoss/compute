export type Signal = boolean | null

export type Input = (value: Signal) => void
export type Output = () => Signal

export interface Component {
    readonly inputs: Input[]
    readonly outputs: Output[]
}

export class Wire implements Component {
    readonly name: string
    readonly inputs: Input[] = []
    readonly outputs: Output[] = []

    private _next: Signal

    constructor(name: string) {
        this.name = name
    }

    read(): void {
        const activeSignals = this.outputs
            .map((o, i) => [i, o()])
            .filter(s => s[1] !== null)

        if (activeSignals.length > 1) {
            throw new Error(`Multiple active signals on wire ${this.name}:\n${JSON.stringify(activeSignals)}`)
        }
        if (activeSignals.length === 1) {
            this._next = activeSignals[1] as unknown as Signal
        } else {
            this._next = null
        }
    }

    write(): void {
        this.inputs.forEach(i => i(this._next))
    }
}