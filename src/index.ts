import { OrGate, NotGate, AndGate } from "./circuit/gates";
import { Output, Wire } from "./circuit/core";
import {Pointer} from "./graphics/pointer"
import { AndSprite } from "./graphics/sprites/and-sprite";
import { NotSprite } from "./graphics/sprites/not-sprite";

const computeCanvas = <HTMLCanvasElement>document.getElementById('compute')
const context = computeCanvas.getContext('2d')
const a = <HTMLInputElement>document.getElementById('a')
const b = <HTMLInputElement>document.getElementById('b')

const aOutput = new Output(() => a.checked)
const bOutput = new Output(() => b.checked)
const power = new Output(() => true)
const ground = new Output(() => false)

const andGate = new AndGate()
const orGate = new OrGate()
const notGate = new NotGate()

const powerToOrA = new Wire(power, orGate.a)
const groundToOrB = new Wire(ground, orGate.b)
const aToAndA = new Wire(aOutput, andGate.a)
const bToAndB = new Wire(bOutput, andGate.b)
const andToNot = new Wire(andGate.x, notGate.a)

const andSprite = new AndSprite(andGate)
andSprite.position = { x: 250, y: 360 }

const notSprite = new NotSprite(notGate)
notSprite.position = { x: 400, y: 360 }

const sprites = [andSprite, notSprite]

function tick() {
    console.log('tick')

    console.log('or a: ' + andGate.a.value)
    console.log('or b: ' + andGate.b.value)
    console.log('or x: ' + andGate.x.value)
    console.log('not a: ' + notGate.a.value)
    console.log('not x: ' + notGate.x.value)

    console.log('or next: ' + andGate.x.generateNext())
    console.log('not next: ' + notGate.x.generateNext())
    aOutput.generateNext()
    bOutput.generateNext()

    aOutput.applyNext()
    bOutput.applyNext()
    andGate.x.applyNext()
    notGate.x.applyNext()
}

function draw() {
    context.fillStyle = '#222222'
    context.fillRect(0, 0, 720, 720)

    sprites.forEach(s => s.draw(context))

    requestAnimationFrame(draw)
}
requestAnimationFrame(draw)

const goBtn = document.getElementById('go')
goBtn.onclick = tick


const pointer = new Pointer(computeCanvas, p => {
    for (let i = 0; i < sprites.length; i++) {
        if (sprites[i].cointainsPoint(p, context)) {
            pointer.holding = sprites[i]
            break
        }
    }
})