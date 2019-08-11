import { Signal, Wire, Port } from "../chips/core";
import { Point, Entity, Group } from "../graphics/core";
import { WireSprite } from "../graphics/sprites/wire-sprite";
import { ChipSprite, DrawPath } from "../graphics/sprites/chip-sprite";
import { AndSprite } from "../graphics/sprites/and-sprite";
import { AndGate, NotGate, Button, NandGate, Led } from "../chips/gates";
import { NotSprite } from "../graphics/sprites/not-sprite";
import { ButtonSprite } from "../graphics/sprites/button-sprite";
import { NandSprite } from "../graphics/sprites/nand-sprite";
import { Output } from "../chips/output";
import { Input } from "../chips/input";
import { Chip, ChipType } from "../chips/chip";
import { EmptyEntity } from '../graphics/empty-entity'
import { LedSprite } from "../graphics/sprites/led-sprite";
import { ClockSprite } from '../graphics/sprites/clock-sprite'
import { Clock } from "../chips/clock";

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

    get wireSprites() {
        return this._children.filter(e => e instanceof WireSprite) as WireSprite[]
    }
    get chipSprites() {
        return this._children.filter(e => e instanceof ChipSprite) as ChipSprite[]
    }

    constructor() {
        super()
        this._scale = 25;
    }

    addWire(wire: Wire) {
        const sprite = new WireSprite(this, wire)
        sprite.setParent(this)
        return sprite
    }

    addChip = (chip: Chip) => {
        const sprite = this.getChipSprite(chip)
        sprite.setParent(this)
        return sprite
    }

    removeChip(removeMe: ChipSprite) {
        const chip = removeMe.chip
        const deadWires = [] as WireSprite[]
        // Disconnect input wires
        chip.inputs.forEach(ci => {
            this.wireSprites.forEach(w => {
                if (w.wire.input === ci) {
                    deadWires.push(w)
                }
            })
        })
        // Disconnect output wires
        chip.outputs.forEach(co => {
            this.wireSprites.forEach(w => {
                if(w.wire.output === co) {
                    deadWires.push(w)
                }
            })
        })

        // Delete chip
        removeMe.removeParent()

        // Cleanup wires
        deadWires.forEach(dw => {
            if (dw.wire.input) {
                dw.wire.input.put(null)
            }
            dw.removeParent()
        })
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
        this.chipSprites.forEach(c => c instanceof ClockSprite && c.chip.tick())
        this.wireSprites.forEach(w => w.wire.read())
        this.wireSprites.forEach(w => w.wire.write())
        console.log(`--- DONE (${this._tickCount}) ---`)

        this._tickCount++
    }

    tryFindPort(point: Point, radius: number): [Port, Point] | null {
        for (const chip of this.chipSprites.values()) {
            const port = chip.tryFindPort(point, radius)
            if (port) {
                return port
            }
        }
        return null
    }

    findConnectedWire(port: Port) {
        for (let i = 0; i < this.wireSprites.length; i++) {
            const ws = this.wireSprites[i]
            if (ws.wire.input === port || ws.wire.output === port) {
                return ws
            }
        }
        console.warn('Could not find wire for port: ' + port.id)
        return null
    }

    getPortPos(port: Port) {
        if (port instanceof Input) {
            return this.getInputPos(port)
        } else {
            return this.getOutputPos(port)
        }
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

    private getChipSprite(chip: Chip) {
        let sprite: ChipSprite
        switch (chip.type) {
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
            case ChipType.Led:
                sprite = new LedSprite(chip as Led)
                break
            case ChipType.Clock:
                sprite = new ClockSprite(chip as Clock)
                break
            default: return new EmptyEntity()
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