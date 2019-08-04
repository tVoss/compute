import { OrGate, NotGate, AndGate, Source, NandGate } from "./circuit/chips";
import { Wire } from "./circuit/core";
import {Pointer} from "./graphics/pointer"
import { BoardManager } from "./graphics/board-manager";

const computeCanvas = <HTMLCanvasElement>document.getElementById('compute')
const context = computeCanvas.getContext('2d') as CanvasRenderingContext2D
const aElem = <HTMLInputElement>document.getElementById('a')
const bElem = <HTMLInputElement>document.getElementById('b')

const aSrc = new Source(() => aElem.checked, 'a')
const bSrc = new Source(() => bElem.checked, 'b')

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
bm.tick()

// Event handling
const goBtn = document.getElementById('go') as HTMLElement
goBtn.onclick = () => bm.tick()

const pointer = new Pointer(computeCanvas, p => {
    const sprite = bm.cointainsPoint(p, context)
    if (sprite) {
        pointer.hold(sprite)
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
