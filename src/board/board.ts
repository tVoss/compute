import { Signal, Wire } from "../chips/core";
import { Point, Entity, Group } from "../graphics/core";
import { WireSprite } from "../graphics/sprites/wire-sprite";
import { ChipSprite, DrawPath } from "../graphics/sprites/chip-sprite";
import { AndSprite } from "../graphics/sprites/and-sprite";
import { AndGate, NotGate, Button, NandGate } from "../chips/gates";
import { NotSprite } from "../graphics/sprites/not-sprite";
import { ButtonSprite } from "../graphics/sprites/button-sprite";
import { NandSprite } from "../graphics/sprites/nand-sprite";
import { Output } from "../chips/output";
import { Input } from "../chips/input";
import { Chip, ChipType } from "../chips/chip";

let xOffset = 50
let yOffset = 100
const xStep = 150
const yStep = 150
const xMax = 5
const yMax = 5

let currX = 0
let currY = 0

export class Board extends Group {
    private _tickCount = 0

    wireSprites: WireSprite[] = []
    chipSprites: ChipSprite[] = []

    addWire(wire: Wire) {
        const sprite = new WireSprite(this, wire)
        sprite.setParent(this)
        this.wireSprites.push(sprite)
        return sprite
    }

    addChip = (chip: Chip) => {
        const sprite = this.getChipSprite(chip)
        if (sprite) {
            sprite.setParent(this)
            this.chipSprites.push(sprite)
            return sprite
        }
    }

    removeChip(chipSprite: ChipSprite) {
        const chip = chipSprite.chip
        // Disconnect input wires
        chip.inputs.forEach(ci => {
            this.wireSprites.forEach(w => {
                w.wire.inputs.delete(ci.id)
            })
        })
        // Disconnect output wires
        chip.outputs.forEach(co => {
            this.wireSprites.forEach(w => {
                w.wire.outputs.delete(co.id)
            })
        })

        // Delete chip
        this.chipSprites = this.chipSprites.filter(cs => cs !== chipSprite)
        chipSprite.removeParent()

        // Cleanup wires
        const deadWires = this.wireSprites.filter(w => w.wire.outputs.size === 0)
        deadWires.forEach(dw => {
            dw.wire.inputs.forEach(i => i.put(null))
            dw.removeParent()
            this.wireSprites = this.wireSprites.filter(s => s !== dw)
        })
    }

    draw(ctx: CanvasRenderingContext2D): void {
        this.wireSprites.forEach(w => w.draw(ctx))
        this.chipSprites.forEach(c => c.draw(ctx))
    }

    cointainsPoint(point: Point, ctx: CanvasRenderingContext2D) {
        for (const cs of this.chipSprites) {
            if (cs.cointainsPoint(point, ctx)) {
                return cs
            }
        }
        return null
    }

    tick = () => {
        console.log(`--- TiCK (${this._tickCount}) ---`)
        this.wireSprites.forEach(w => w.wire.read())

        console.log(`--- DONE (${this._tickCount}) ---`)
        this.wireSprites.forEach(w => w.wire.write())

        this._tickCount++
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
            case ChipType.Button:
                sprite = new ButtonSprite(chip as Button)
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