import { Board } from './board'
import { WireData, ChipData, BoardData } from './board-data'
import { Wire } from '../chips/core';
import { AndGate, NandGate, NotGate, OrGate, TriState, Button } from '../chips/gates';
import { Chip, ChipType } from '../chips/chip';
import { Output } from '../chips/output';
import { Input } from '../chips/input';

export class BoardStorage {

    saveBoard(name: string, board: Board) {
        const wires = board.wireSprites.map(ws => ({
            id: ws.wire.id,
            inputs: [...ws.wire.inputs.keys()],
            outputs: [...ws.wire.outputs.keys()],
            x: ws.position.x,
            y: ws.position.y
        }) as WireData)
        const chips = board.chipSprites.map(cs => ({
            id: cs.chip.id,
            type: cs.chip.type,
            x: cs.position.x,
            y: cs.position.y
        }) as ChipData)
        const boardData: BoardData = { chips, wires }

        localStorage.setItem(name, JSON.stringify(boardData))
    }

    loadBoard(name: string) {
        const boardString = localStorage.getItem(name)
        if (!boardString) {
            throw new Error('Board not found: ' + name)
        }
        const boardData = JSON.parse(boardString) as BoardData
        const chips = boardData.chips
            .map(cd => this.makeChip(cd))
            .filter(c => c !== null) as Chip[]
        const chipMap = new Map(chips.map(c => [c.id, c]))
        const chipDataMap = new Map(boardData.chips.map(c => [c.id, c]))
        const wires = boardData.wires
            .map(wd => this.makeWire(wd, chipMap))
            .filter(w => w !== null) as Wire[]

        const board = new Board()
        chips.forEach(c => {
            const sprite = board.addChip(c)
            const data = chipDataMap.get(c.id)
            if (data && sprite) {
                sprite.position = { x: data.x, y: data.y }
            }
        })
        wires.forEach(w => board.addWire(w))
        return board;
    }

    makeChip(data: ChipData) {
        switch (data.type) {
            case ChipType.And:
                return new AndGate(data.id)
            case ChipType.Nand:
                return new NandGate(data.id)
            case ChipType.Not:
                return new NotGate(data.id)
            case ChipType.Or:
                return new OrGate(data.id)
            case ChipType.TriState:
                return new TriState(data.id)
            case ChipType.Button:
                return new Button(data.id)
            default:
                console.warn('cannot make chip: ' + data.type)
                return null
        }
    }

    makeWire(data: WireData, chips: Map<string, Chip>) {
        const outputs = data.outputs
            .map(wo => this.getOutput(wo, chips))
            .filter(o => o !== null) as Output[]
        if (outputs.length === 0) {
            console.warn('wire ' + data.id + ' has no valid outputs')
            return null
        }
        const inputs = data.inputs
            .map(wi => this.getInput(wi, chips))
            .filter(i => i !== null) as Input[]

        return new Wire(data.id, outputs, inputs)
    }

    getInput(id: string, chipMap: Map<string, Chip>) {
        const keys = id.split('.', 2)
        if (keys.length !== 2) {
            console.warn('invalid input id: ' + id)
            return null
        }
        const chip = chipMap.get(keys[0])
        if (!chip) {
            console.warn('could not find chip id: ' + keys[0])
            return null
        }
        const input = chip.inputs.get(keys[1])
        if (!input) {
            console.warn('could not find input id: ' + keys[1])
            return null
        }
        return input
    }

    getOutput(id: string, chipMap: Map<string, Chip>) {
        const keys = id.split('.', 2)
        if (keys.length !== 2) {
            console.warn('invalid output id: ' + id)
            return null
        }
        const chip = chipMap.get(keys[0])
        if (!chip) {
            console.warn('could not find chip id: ' + keys[0])
            return null
        }
        const output = chip.outputs.get(keys[1])
        if (!output) {
            console.warn('could not find output id: ' + keys[1])
            return null
        }
        return output
    }
}