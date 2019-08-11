import { Entity, Point } from "../graphics/core";
import { Port, Wire } from "../chips/core";
import { PointerMode, PointerModes, Pointer } from "./pointer";
import { Output } from "../chips/output";
import { Input } from "../chips/input";
import { StartWireMode } from './start-wire-mode'

class HeldWire extends Entity {

    port: Port
    start: Point

    constructor(port: Port, start: Point) {
        super()
        this.port = port
        this.start = start
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.strokeStyle = 'cyan'
        ctx.lineWidth = 2

        ctx.beginPath()
        ctx.moveTo(this.start.x, this.start.y)
        ctx.lineTo(this.position.x, this.position.y)
        ctx.closePath()
        ctx.stroke()
    }

    cointainsPoint(point: Point, ctx: CanvasRenderingContext2D): Entity | null {
        return null
    }
}

export class PlaceWireMode implements PointerMode {
    static _nextWireId = 0

    readonly type = PointerModes.Wire
    readonly pointer: Pointer
    wire: HeldWire

    constructor(pointer: Pointer, port: Port) {
        this.pointer = pointer
        const start = pointer.board.getPortPos(port)
        if (!start) {
            throw new Error('Could not find position for port: ' + port.id)
        }
        this.wire = new HeldWire(port, start)
        this.wire.setParent(pointer)
    }

    onMove(pos: Point): void {
    }

    onClick(point: Point, ctx: CanvasRenderingContext2D): void {
        const found = this.pointer.board.tryFindPort(point, 5)
        if (!found) {
            return
        }
        const port = found[0]

        // Stop wire on self click
        if (this.wire.port === port) {
            this.wire.removeParent()
        }
        // Do nothing on same port
        if (this.wire.port instanceof Output && port instanceof Output) {
            return
        }
        if (this.wire.port instanceof Input && port instanceof Input) {
            return
        }

        const input = this.wire.port instanceof Input
            ? this.wire.port
            : port instanceof Input
                ? port
                : null
        const output = this.wire.port instanceof Output
            ? this.wire.port
            : port instanceof Output
                ? port
                : null
        if (!input || !output) {
            throw new Error('Did not have input or output')
        }

        // Create wire
        const wire = new Wire('placed_' + PlaceWireMode._nextWireId++, output, input)

        // Add to board
        this.pointer.board.addWire(wire)

        // Drop
        this.wire.removeParent()

        const startWire = new StartWireMode(this.pointer)
        this.pointer.mode = startWire
    }
}