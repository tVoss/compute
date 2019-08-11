import { Signal } from "./core";
import { Input } from "./input";
import { Output } from "./output";

export enum ChipType {
    Button,
    And,
    Or,
    Not,
    TriState,
    Nand,
    Led,
    Clock,
    _size
}

export namespace ChipTypes {
    export function getAll() {
        return Array.from(Array(ChipType._size).keys()).map(i => ChipType[i])
    }
}

export class Chip {
    readonly id: string
    readonly type: ChipType
    private readonly _inputs: Map<string, Input>
    private readonly _outputs: Map<string, Output>

    constructor(id: string, type: ChipType) {
        this.id = id
        this.type = type
        this._inputs = new Map()
        this._outputs = new Map()
    }

    public get inputs(): ReadonlyMap<string, Input> {
        return this._inputs
    }

    public get outputs(): ReadonlyMap<string, Output> {
        return this._outputs
    }

    protected createInput(id: string) {
        const input = new Input(this.id + '.' + id)
        this._inputs.set(input.id, input)
        return input
    }

    protected createOutput(id: string, get: () => Signal) {
        const output = new Output(this.id + '.' + id, get)
        this._outputs.set(output.id, output)
        return output
    }
}