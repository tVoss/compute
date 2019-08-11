import { Chip, ChipType } from './chip'
import { Signal } from './core';

export class Clock extends Chip {
    private _period: number
    private _countdown: number
    private _signal: Signal

    readonly x = this.createOutput('x', () => this._signal)
    constructor(id: string, period: number) {
        super(id, ChipType.Clock)
        this._period = period
        this._countdown = period
        this._signal = false
    }

    tick() {
        this._countdown--
        if (this._countdown === 0) {
            this._countdown = this._period
            this._signal = !this._signal
        }
    }
}