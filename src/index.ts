import * as $ from "jquery";
import { Pointer, PointerModes, PointerMode } from "./pointer/pointer";
import { Board } from "./board/board";
import { BoardStorage } from "./board/board-storage";
import { AndGate } from "./chips/gates";
import { ChipType, Chip, ChipTypes } from "./chips/chip";
import { ChipFactory } from "./chips/chip-factory";
import { GrabberMode } from "./pointer/grabber-mode";
import { MoveChipMode } from "./pointer/move-chip-mode";
import { EmptyEntity } from "./graphics/empty-entity";
import { Guid } from "./util/guid";
import { Group } from "./graphics/group";
import { Orientation } from "./graphics/orientation";
import { Point } from "./util/point";

class Computer {
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _storage: BoardStorage;
    private _board: Board;
    private _pointer: Pointer;
    private _size: Point = { x: 0, y: 0 };

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._context = canvas.getContext("2d") as CanvasRenderingContext2D;
        this._storage = new BoardStorage();
        this._pointer = new Pointer();
        this._board = new Board();
        this._pointer.board = this._board;
    }

    setBoard(board: Board) {
        this._board = board;
        this._pointer.board = board;
    }

    loadBoard(name: string) {
        const board = this._storage.loadBoard(name);
        this.setBoard(board);
    }

    saveBoard(name: string) {
        this._storage.saveBoard(name, this._board);
    }

    tick() {
        this._board.tick();
    }
    draw() {
        this._context.fillStyle = "#222222";
        this._context.fillRect(0, 0, this._size.x, this._size.y);
        this._board.draw(this._context);
    }
    clear() {
        this.setBoard(new Board());
    }
    onResize(size: Point) {
        this._size = Point.copy(size);
        computeCanvas.width = size.x;
        computeCanvas.height = size.y;
    }
}

// Grab the canvas
const computeCanvas = $("#compute-canvas").get()[0] as HTMLCanvasElement;
const COMPUTE = new Computer(computeCanvas);

function resize() {
    const canvasStyle = getComputedStyle(computeCanvas);
    const x = parseInt(canvasStyle.width || "0");
    const y = parseInt(canvasStyle.height || "0");
    COMPUTE.onResize({ x, y });
}
addEventListener("resize", resize);
resize();

// Event handling
$("#save").click(() => {
    const name = prompt("Enter board name");
    if (!name) {
        return;
    }
    COMPUTE.saveBoard(name);
});
$("#load").click(() => {
    const name = prompt("Enter board name");
    if (!name) {
        return;
    }
    COMPUTE.loadBoard(name);
});
$("#go").click(COMPUTE.tick);
$("#clear").click(COMPUTE.clear);
const computeElement = $("#compute-canvas");
// computeElement.click(e =>
//     Computer.pointer.onClick({ x: e.offsetX, y: e.offsetY }, Computer.context)
// );
// computeElement.mousemove(e =>
//     Computer.pointer.onMove({ x: e.offsetX, y: e.offsetY }, Computer.context)
// );

// // Give radio buttons for all the pointer modes
// const modesDiv = $("#modes");
// PointerModes.getUiModes(Computer.pointer).forEach(mode => {
//     const name = PointerModes[mode.type];
//     const div = $("<div></div>");
//     const label = $("<label></label>");
//     label.attr("for", name);
//     label.text(name);
//     div.append(label);

//     const input = $('<input type="radio" name="mode"></input>');
//     input.attr("id", name);
//     input.attr("value", name);
//     input.change(() => {
//         Computer.pointer.setMode(mode);
//     });
//     div.append(input);
//     modesDiv.append(div);
// });
// // Update ui when mode changes
// Computer.pointer.onModeChange.push(m => {
//     $(`input[value=${PointerModes[m]}]`).prop("checked", true);
// });

// // Set initial mode
// Computer.pointer.setMode(new GrabberMode(Computer.pointer));

// // Create buttons for all the chips
// const chipsDiv = $("#chips");
// ChipTypes.getAll().forEach((name, type: ChipType) => {
//     const btn = $("<button>");
//     btn.attr("type", "button");
//     btn.attr("name", name);
//     btn.attr("id", name);
//     btn.text(name);

//     btn.click(() => {
//         if (!Computer.pointer.mode.canChange) {
//             return;
//         }
//         const gate = ChipFactory.getChip(
//             type,
//             name + "_click_" + Guid.create()
//         );
//         const sprite = Computer.board.addChip(gate);
//         if (sprite instanceof EmptyEntity) {
//             console.warn("Added gate returned empty entity: " + gate.id);
//             return;
//         }
//         Computer.pointer.setMode(
//             new MoveChipMode(Computer.pointer, sprite, Computer.pointer.mode)
//         );
//     });

//     chipsDiv.append(btn);
// });

// Rendering
let lastTick = 0;
const auto = $("#auto");
const speed = $("#speed");
function update() {
    // Auto update
    if (auto.is(":checked")) {
        if (lastTick <= 0) {
            COMPUTE.tick();
            lastTick = 60;
        } else {
            lastTick -= parseInt(speed.val() as string);
        }
    }

    COMPUTE.draw();

    // Repeat
    requestAnimationFrame(update);
}

// Get it started
requestAnimationFrame(update);
