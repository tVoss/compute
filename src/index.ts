import { OrGate, NotGate, AndGate } from "./circuit/chips";
import { Output, Wire } from "./circuit/core";
import {Pointer} from "./graphics/pointer"
import { AndSprite } from "./graphics/sprites/and-sprite";
import { NotSprite } from "./graphics/sprites/not-sprite";
import { SourceSprite } from "./graphics/sprites/source-sprite"

const computeCanvas = <HTMLCanvasElement>document.getElementById('compute')
const context = computeCanvas.getContext('2d') as CanvasRenderingContext2D
const aElem = <HTMLInputElement>document.getElementById('a')
const bElem = <HTMLInputElement>document.getElementById('b')

const andGate = new AndGate('0')
const orGate = new OrGate('1')
const notGate = new NotGate('2')

const power = new Wire('power', [() => true])
const ground = new Wire('ground', [() => false])
const a = new Wire('a', [() => aElem.checked], [andGate.a])
const b = new Wire('b', [() => bElem.checked], [andGate.b])

const andOut = new Wire('and_out', [andGate.x], [notGate.a])
const notOut = new Wire('not_out', [notGate.x])

const wires = [a, b, andOut, notOut]

const aSprite = new SourceSprite(() => aElem.checked)
aSprite.position = { x: 100, y: 200 }
const bSprite = new SourceSprite(() => bElem.checked)
bSprite.position = { x: 100, y: 400 }

const andSprite = new AndSprite(andGate)
andSprite.position = { x: 250, y: 360 }

const notSprite = new NotSprite(notGate)
notSprite.position = { x: 400, y: 360 }

const sprites = [andSprite, notSprite, aSprite, bSprite]

function tick() {
    console.log('--- TiCK ---')
    wires.forEach(w => w.read())

    console.log('--- DONE ---')
    wires.forEach(w => w.write())
}
tick()

function draw() {
    context.fillStyle = '#222222'
    context.fillRect(0, 0, 720, 720)

    sprites.forEach(s => s.draw(context))

    requestAnimationFrame(draw)
}
requestAnimationFrame(draw)

const goBtn = document.getElementById('go') as HTMLElement
goBtn.onclick = tick


const pointer = new Pointer(computeCanvas, p => {
    for (let i = 0; i < sprites.length; i++) {
        if (sprites[i].cointainsPoint(p, context)) {
            pointer.holding = sprites[i]
            break
        }
    }
})