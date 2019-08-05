import { ChipType } from './chip'
import { AndGate, Button, NandGate, NotGate, OrGate, TriState, Sink } from './gates'

export class ChipFactory {
    static getChip(type: ChipType, id: string) {
        switch(type) {
            case ChipType.And:
                return new AndGate(id)
            case ChipType.Button:
                return new Button(id)
            case ChipType.Nand:
                return new NandGate(id)
            case ChipType.Not:
                return new NotGate(id)
            case ChipType.Or:
                return new OrGate(id)
            case ChipType.TriState:
                return new TriState(id)
            case ChipType.Sink:
                return new Sink(id)
            case ChipType._size:
                throw new Error('Cannot create _size chip type')
            default:
                throw new Error('Chip not in chip factory: ' + ChipType[type])
        }
    }
}