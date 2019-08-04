import * as $ from 'jquery'
import { OrGate, NotGate, AndGate, Source, NandGate } from "./circuit/chips";
import { Wire } from "./circuit/core";
import {Pointer, PointerMode} from "./graphics/pointer"
import { BoardManager } from "./graphics/board-manager";

const computeCanvas = $('#compute').get()[0] as HTMLCanvasElement
const context = computeCanvas.getContext('2d') as CanvasRenderingContext2D
const aElem = $('#a')
const bElem = $('#b')

const aSrc = new Source(() => aElem.prop('checked'), 'b')
const bSrc = new Source(() => bElem.prop('checked'), 'b')

const nandGate = new NandGate('0')
const orGate = new OrGate('1')
const notGate = new NotGate('2')

const chips = [aSrc, bSrc, nandGate, orGate, notGate]

const a = new Wire('a_out', [aSrc.x], [nandGate.a])
const b = new Wire('b_out', [bSrc.x], [nandGate.b])

const andOut = new Wire('nand_out', [nandGate.x], [notGate.a])
const notOut = new Wire('not_out', [notGate.x])

const wires = [a, b, andOut, notOut]

const bm = new BoardManager()
wires.forEach(w => bm.addWire(w))
chips.forEach(c => bm.addChip(c))

// Event handling
$('#go').click(bm.tick)

const pointer = new Pointer(computeCanvas, bm)
computeCanvas.onclick = e => pointer.onClick({ x: e.offsetX, y:e.offsetY }, context)
$('input[name=mode]').change(e => {
    const input = e.target as HTMLInputElement
    switch (input.value) {
        case 'move':
            pointer.setMode(PointerMode.Move)
            break
        case 'delete':
            pointer.setMode(PointerMode.Delete)
    }
})

const workspace = [bm, pointer]

// Rendering
function draw() {
    context.fillStyle = '#222222'
    context.fillRect(0, 0, 720, 720)

    workspace.forEach(w => w.draw(context))

    requestAnimationFrame(draw)
}
requestAnimationFrame(draw)
