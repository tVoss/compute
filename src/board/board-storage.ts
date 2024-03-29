import { Board } from './board';
import { WireData, ChipData, BoardData } from './board-data';
import { Wire } from '../chips/core';
import { Chip } from '../chips/chip';
import { ChipFactory } from '../chips/chip-factory';

const kBoardStorageVersion = 'v0.1';

export class BoardStorage {
  saveBoard(name: string, board: Board) {
    const wires = board.wireSprites.map(
      ws =>
        ({
          id: ws.wire.id,
          input: ws.wire.input && ws.wire.input.id,
          output: ws.wire.output && ws.wire.output.id,
          x: ws.position.x,
          y: ws.position.y,
        } as WireData)
    );
    const chips = board.chipSprites.map(
      cs =>
        ({
          id: cs.chip.id,
          type: cs.chip.type,
          x: cs.position.x,
          y: cs.position.y,
        } as ChipData)
    );
    const boardData: BoardData = {
      chips,
      wires,
      version: kBoardStorageVersion,
    };

    localStorage.setItem(name, JSON.stringify(boardData));
  }

  loadBoard(name: string) {
    console.log('Loading board: ' + name);
    const boardString = localStorage.getItem(name);
    if (!boardString) {
      throw new Error('Board not found: ' + name);
    }
    const boardData = JSON.parse(boardString) as BoardData;
    console.log('Board found with version: ', boardData.version);
    const chips = boardData.chips
      .map(cd => ChipFactory.getChip(cd.type, cd.id))
      .filter(c => c !== null) as Chip[];
    const chipMap = new Map(chips.map(c => [c.id, c]));
    const chipDataMap = new Map(boardData.chips.map(c => [c.id, c]));
    const wires = boardData.wires
      .map(wd => this.makeWire(wd, chipMap))
      .filter(w => w !== null) as Wire[];

    const board = new Board();
    chips.forEach(c => {
      const sprite = board.addChip(c);
      const data = chipDataMap.get(c.id);
      if (data && sprite) {
        sprite.position = { x: data.x, y: data.y };
      }
    });
    wires.forEach(w => board.addWire(w));
    return board;
  }

  exportBoards() {
    const boards: { [name: string]: BoardData } = {};
    for (let key in localStorage) {
      boards[key] = JSON.parse(localStorage.getItem(key) || '{}');
    }
    return JSON.stringify(boards);
  }

  private makeWire(data: WireData, chips: Map<string, Chip>) {
    if (!data.output || !data.input) {
      console.warn(`wire ${data.id} is missing an input or output`);
      return null;
    }

    const output = this.getOutput(data.output, chips);
    const input = this.getInput(data.input, chips);
    if (!output || !input) {
      console.warn(`could not find input or output for wire ${data.id}`);
      return null;
    }

    return new Wire(data.id, output, input);
  }

  private getInput(id: string, chipMap: Map<string, Chip>) {
    const chipId = id.split('.', 1)[0];
    if (!chipId) {
      console.warn('invalid input id: ' + id);
      return null;
    }
    const chip = chipMap.get(chipId);
    if (!chip) {
      console.warn('could not find chip id: ' + chipId);
      return null;
    }
    const input = chip.inputs.get(id);
    if (!input) {
      console.warn('could not find input id: ' + id);
      return null;
    }
    return input;
  }

  private getOutput(id: string, chipMap: Map<string, Chip>) {
    const chipId = id.split('.', 1)[0];
    if (!chipId) {
      console.warn('invalid output id: ' + id);
      return null;
    }
    const chip = chipMap.get(chipId);
    if (!chip) {
      console.warn('could not find chip id: ' + chipId);
      return null;
    }
    const output = chip.outputs.get(id);
    if (!output) {
      console.warn('could not find output id: ' + id);
      return null;
    }
    return output;
  }
}
