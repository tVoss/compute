import { OrGate, NotGate, AndGate } from "./circuit/gates";
import { Output } from "./circuit/core";
import { AndSprite } from "./graphics/gate-sprites";
import {Pointer} from "./graphics/pointer"

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

context.fillStyle = '#222222'
context.fillRect(0, 0, 720, 720)

orGate.a.connect(power)
orGate.b.connect(ground)
andGate.a.connect(aOutput)
andGate.b.connect(bOutput)
notGate.a.connect(andGate.x)

const andSprite = new AndSprite(andGate)
andSprite.localPosition = { x: 250, y: 360 }

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

    andSprite.draw(context)
    notGate.draw(context, 400, 360)

    requestAnimationFrame(draw)
}
requestAnimationFrame(draw)

const goBtn = document.getElementById('go')
goBtn.onclick = tick

const pointer = new Pointer(computeCanvas, p => {
    console.log(`${p.x},${p.y}`)
    console.log(andSprite.cointainsPoint(p, context) ? 'in' : 'out')
    if (andSprite.cointainsPoint(p, context)) {
        pointer.holding = andSprite
    }
})