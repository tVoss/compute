import { Signal } from './core';

export class Input {
  readonly id: string;
  private _signal: Signal = false;

  constructor(id: string) {
    this.id = id;
  }
  get() {
    return this._signal;
  }
  set(signal: Signal) {
    this._signal = signal;
  }
}
