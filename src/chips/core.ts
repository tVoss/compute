import { Input } from './input';
import { Output } from './output';

export type Port = Input | Output;
export type Signal = boolean | null;
export namespace Signal {
  export function anyNulls(...signals: Signal[]) {
    return signals.filter(s => s === null).length > 0;
  }
  export function getColor(signal: Signal) {
    return signal === null ? 'gray' : signal ? 'green' : 'red';
  }
}

export class Wire {
  readonly id: string;
  public input: Input;
  public output: Output;

  _nextSignal: Signal = null;

  constructor(id: string, output: Output, input: Input) {
    this.id = id;
    this.input = input;
    this.output = output;
  }

  readOutputs(): void {
    if (!this.output) {
      return;
    }
    this._nextSignal = this.output.get();
  }

  writeInputs(): void {
    if (this.input) {
      this.input.set(this._nextSignal);
    }
  }
}

export class Bus {
  readonly id: string;
  readonly inputs: Map<string, Input>;
  readonly outputs: Map<string, Output>;

  _nextSignal: Signal = null;

  constructor(id: string, outputs?: Output[], inputs?: Input[]) {
    this.id = id;
    this.inputs = new Map(inputs && inputs.map(i => [i.id, i]));
    this.outputs = new Map(outputs && outputs.map(o => [o.id, o]));
  }

  read(): void {
    let activeSignals: Signal[] = [];
    for (let o of this.outputs.values()) {
      const s = o.get();
      if (s !== null) {
        activeSignals.push(s);
      }
    }

    if (activeSignals.length > 1) {
      throw new Error(
        `Multiple active signals on wire ${this.id}:\n${JSON.stringify(
          activeSignals
        )}`
      );
    }
    if (activeSignals.length === 1) {
      this._nextSignal = activeSignals[0] as Signal;
    } else {
      this._nextSignal = null;
    }

    console.log(`Wire ${this.id} read value ${this._nextSignal}`);
  }

  write(): void {
    this.inputs.forEach(i => i.set(this._nextSignal));
  }
}
