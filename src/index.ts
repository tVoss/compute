import * as $ from 'jquery'
import { Pointer, PointerMode } from "./graphics/pointer"
import { Board } from "./board/board";
import { BoardStorage } from './board/board-storage';
import { AndGate } from './chips/gates';
import { ChipType, Chip, ChipTypes } from './chips/chip';
import {ChipFactory} from './chips/chip-factory'

// Main computer
const Computer = {
    context: null as any as CanvasRenderingContext2D,
    storage: null as any as BoardStorage,
    board: null as any as Board,
    pointer: null as any as Pointer
}

// Grab the canvas
const computeCanvas = $('#compute').get()[0] as HTMLCanvasElement
// Setup computer
Computer.context = computeCanvas.getContext('2d') as CanvasRenderingContext2D
Computer.storage = new BoardStorage()
Computer.board = Computer.storage.loadBoard('test')
Computer.pointer = new Pointer(computeCanvas, Computer.board)

// Event handling
$('#save').click(() => {
    const name = prompt('Enter board name')
    if (name === null) {
        return
    }
    Computer.storage.saveBoard(name, Computer.board)
})
$('#load').click(() => {
    const name = prompt('Enter board name')
    if (name === null) {
        return
    }
    Computer.board = Computer.storage.loadBoard(name)
    Computer.pointer.board = Computer.board
})
$('#go').click(Computer.board.tick)
$('#compute').click(e => Computer.pointer.onClick({ x: e.offsetX, y: e.offsetY }, Computer.context))
$('input[name=mode]').change(e => {
    const input = e.target as HTMLInputElement
    switch (input.value) {
        case 'pointer':
            Computer.pointer.setMode(PointerMode.Pointer)
            break
        case 'move':
            Computer.pointer.setMode(PointerMode.Move)
            break
        case 'delete':
            Computer.pointer.setMode(PointerMode.Delete)
            break
    }
})

const chipsDiv = $('#chips')
ChipTypes.getAll().forEach((name, type: ChipType)  => {
    const btn = $("<button>")
    btn.attr('type', 'button')
    btn.attr('name', name)
    btn.attr('id', name)
    btn.text(name)

    let nextId = 0
    btn.click(() => {
        if (!Computer.pointer.setMode(PointerMode.Pointer)) {
            return
        }
        const gate = ChipFactory.getChip(type, name + '_click_' + nextId++)
        const sprite = Computer.board.addChip(gate)
        Computer.pointer.grab(sprite)
    })

    chipsDiv.append(btn)
})

// Rendering
let lastTick = 0
const auto = $('#auto')
const speed = $('#speed')
function update() {

    // Auto update
    if (auto.is(':checked')) {
        if (lastTick <= 0) {
            Computer.board.tick()
            lastTick = 60
        } else {
            lastTick -= parseInt(speed.val() as string)
        }
    }

    // Clear
    Computer.context.fillStyle = '#222222'
    Computer.context.fillRect(0, 0, 720, 720)

    // Draw
    Computer.board.draw(Computer.context)
    Computer.pointer.draw(Computer.context)
    
    requestAnimationFrame(update)
}

// Get it started
requestAnimationFrame(update)