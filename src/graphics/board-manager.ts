import { Input, Output, Signal, Wire, Chip } from "../circuit/core";
import { Point, Entity, Group } from "./core";
import { WireSprite } from "./sprites/wire-sprite";
import { ChipSprite } from "./sprites/chip-sprite";

export class BoardManager extends Group {

    readonly wires: Wire[] = []
    readonly chips: Chip[] = []

    readonly wireSprites: WireSprite[] = []
    readonly chipSprites: ChipSprite[] = []

    public addWire(wire: Wire) {
        this.wires.push(wire)
        const sprite = new WireSprite(this, wire)
        sprite.parent = this;
    }

    addChip(chip: Chip) {
        this.chips.push(chip)
    }

    getInputPos(input: Input): Point {
        return { x: 0, y: 0 }
    }

    getOutputPos(output: Output): Point {
        return { x: 0, y: 0 }
    }

    getSignalColor(signal: Signal): string {
        return signal === null ? 'gray' : signal ? 'green' : 'red'
    }
}