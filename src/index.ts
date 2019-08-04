import * as $ from 'jquery'
import { OrGate, NotGate, AndGate, Source, NandGate } from "./circuit/chips";
import { Wire } from "./circuit/core";
import {Pointer, PointerMode} from "./graphics/pointer"
import { BoardManager } from "./graphics/board-manager";

const computeCanvas = $('#compute').get()[0] as HTMLCanvasElement
const context = computeCanvas.getContext('2d') as CanvasRenderingContext2D
const aElem = $('#a')
const bElem = $('#b')

const aSrc = new Source(() => aElem.prop('checked'), 'a')
const bSrc = new Source(() => bElem.prop('checked'), 'b')

const flip0 = new NotGate('flip0')
const flip1 = new NotGate('flip1')
const flip2 = new NotGate('flip2')
const and = new AndGate('end')

const chips = [aSrc, flip0, flip1, flip2, and]

const a = new Wire('a_out', [aSrc.x], [flip0.a, and.a])
const b = new Wire('flip0_out', [flip0.x], [flip1.a])
const c = new Wire('flip1_out', [flip1.x], [flip2.a])
const d = new Wire('flip2_out', [flip2.x], [and.b])

const final = new Wire('final_out', [and.x], [])

const wires = [a, b, c, d, final]

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
