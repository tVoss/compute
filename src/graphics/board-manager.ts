import { Input, Output, Signal, Wire, Chip, ChipType } from "../circuit/core";
import { Point, Entity, Group } from "./core";
import { WireSprite } from "./sprites/wire-sprite";
import { ChipSprite } from "./sprites/chip-sprite";
import { AndSprite } from "./sprites/and-sprite";
import { AndGate, NotGate, Source, NandGate } from "../circuit/chips";
import { NotSprite } from "./sprites/not-sprite";
import { SourceSprite } from "./sprites/source-sprite";
import { NandSprite } from "./sprites/nand-sprite";

let xOffset = 100
let yOffset = 100
const xStep = 150
const yStep = 150
const xMax = 5
const yMax = 5

let currX = 0
let currY = 0

export class BoardManager extends Group {
    wires: Wire[] = []
    chips: Chip[] = []

    wireSprites: WireSprite[] = []
    chipSprites: ChipSprite[] = []

    addWire(wire: Wire) {
        this.wires.push(wire)
        const sprite = new WireSprite(this, wire)
        sprite.setParent(this);
        this.wireSprites.push(sprite)
    }

    addChip = (chip: Chip) => {
        this.chips.push(chip)
        const sprite = this.getChipSprite(chip)
        if (sprite) {
            sprite.setParent(this)
            this.chipSprites.push(sprite)
        }
    }

    removeEntity(entity: Entity) {
        // Only remove entities we own
        if (entity.parent !== this) {
            return
        }

        // Find the chip
        const chipIdx = this.chipSprites.indexOf(entity as ChipSprite)
        if (chipIdx === -1) {
            return
        }
        const chip = this.chips[chipIdx]

        // Disconnect input wires
        chip.inputs.forEach(ci => {
            this.wires.forEach(w => {
                w.inputs.delete(ci)
            })
        })
        // Disconnect output wires
        chip.outputs.forEach(co => {
            this.wires.forEach(w => {
                w.outputs.delete(co)
            })
        })

        // Delete chip
        this.chips = this.chips.filter(c => c.id !== chip.id)
        this.chipSprites = this.chipSprites.filter(cs => cs !== entity)
        entity.removeParent()

        // Cleanup wires
        const deadWires = this.wires.filter(w => w.outputs.size === 0)
        deadWires.forEach(dw => {
            dw.inputs.forEach(i => i(null))
            const sprite = this.wireSprites.filter(s => s._wire === dw)[0]
            if (!sprite) {
                return
            }
            sprite.removeParent()
            this.wireSprites = this.wireSprites.filter(s => s !== sprite)
            this.wires = this.wires.filter(w => w !== dw)
        })
    }

    tick = () => {
        console.log('--- TiCK ---')
        this.wires.forEach(w => w.read())

        console.log('--- DONE ---')
        this.wires.forEach(w => w.write())
    }

    getInputPos = (input: Input) => {
        for (let i = 0; i < this.chipSprites.length; i++) {
            const pos = this.chipSprites[i].getInputPos(input)
            if (pos) {
                return pos
            }
        }
        return null
    }

    getOutputPos = (output: Output) => {
        for (let i = 0; i < this.chipSprites.length; i++) {
            const pos = this.chipSprites[i].getOutputPos(output)
            if (pos) {
                return pos
            }
        }
        return null
    }

    getSignalColor = (signal: Signal) => {
        return signal === null ? 'gray' : signal ? 'green' : 'red'
    }

    private getChipSprite(chip: Chip) {
        let sprite: ChipSprite
        switch(chip.type) {
            case ChipType.Source:
                sprite = new SourceSprite(chip as Source)
                break
            case ChipType.And:
                sprite = new AndSprite(chip as AndGate)
                break
            case ChipType.Nand:
                sprite = new NandSprite(chip as NandGate)
                break
            case ChipType.Not:
                sprite = new NotSprite(chip as NotGate)
                break
            default: return null
        }
        sprite.position = this.getNextPos()

        return sprite
    }

    private getNextPos() {
        const x = currX * xStep + xOffset
        const y = currY * yStep + yOffset

        currX++
        if (currX > xMax) {
            currX = 0
            currY++
            if (currY > yMax) {
                currY = 0
                xOffset++
                yOffset++
            }
        }

        return { x, y }
    }
}