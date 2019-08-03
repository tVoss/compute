export class Input {
    private _output: Output | null

    constructor() {
        this._output = null
    }

    get value() {
        if (this._output === null) {
            return false
        }
        return this._output.value
    }

    connect(output: Output) {
        this._output = output
    }

    disconnect() {
        this._output = null
    }
}

export class Output {
    private _value: boolean
    private _nextValue: boolean | null
    private _nextFunc: () => boolean

    constructor(nextFunc: () => boolean) {
        this._value = nextFunc()
        this._nextValue = null
        this._nextFunc = nextFunc
    }

    get value() {
        return this._value
    }

    generateNext() {
        this._nextValue = this._nextFunc()
        return this._nextValue
    }

    applyNext() {
        if (this._nextValue === null) {
            console.error('Tried to apply next without generating it')
            return
        }
        this._value = this._nextValue
        this._nextValue = null
    }
}