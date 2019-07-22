import { Input, Output, Wire } from './core'

const DS = 50

export class AndGate {
    readonly a: Input
    readonly b: Input
    readonly x: Output

    constructor() {
        this.a = new Input()
        this.b = new Input()
        this.x = new Output(() => this.a.value && this.b.value)
    }
}

export class OrGate {
    readonly a: Input
    readonly b: Input
    readonly x: Output

    constructor() {
        this.a = new Input()
        this.b = new Input()
        this.x = new Output(() => this.a.value || this.b.value)
    }

    draw(ctx: CanvasRenderingContext2D, x: number, y: number) {
        const topLeft = { x: x - DS, y: y + DS}
        const bottomLeft = { x: x - DS, y: y - DS }
        const out = { x: x + DS, y }        
        
        // Body
        ctx.beginPath()
        ctx.moveTo(topLeft.x, topLeft.y)
        ctx.quadraticCurveTo(x - DS / 2, y, bottomLeft.x, bottomLeft.y)
        ctx.quadraticCurveTo(x, y - DS, out.x, out.y)
        ctx.quadraticCurveTo(x, y + DS, topLeft.x, topLeft.y)
        ctx.closePath()
        ctx.strokeStyle = '#eeeeee'
        ctx.lineWidth = 3
        ctx.stroke()

        // Top Wire
        ctx.beginPath()
        ctx.moveTo(topLeft.x - DS, y - DS / 3)
        ctx.lineTo(x - DS / 1.3, y - DS / 3)
        ctx.strokeStyle = this.a.value ? 'green' : 'red'
        ctx.stroke()

        // Bottom wire
        ctx.beginPath()
        ctx.moveTo(topLeft.x - DS, y + DS / 3)
        ctx.lineTo(x - DS / 1.3, y + DS / 3)
        ctx.strokeStyle = this.b.value ? 'green' : 'red'
        ctx.stroke()

        // Output
        ctx.beginPath()
        ctx.moveTo(out.x, out.y)
        ctx.lineTo(out.x + DS, out.y)
        ctx.strokeStyle = this.x.value ? 'green' : 'red'
        ctx.stroke()
    }
}

export class NotGate {
    readonly a: Input
    readonly x: Output

    constructor() {
        this.a = new Input()
        this.x = new Output(() => !this.a.value)
    }

    draw(ctx: CanvasRenderingContext2D, x: number, y: number) {
        const topLeft = { x: x - DS, y: y + DS }
        const bottomLeft = { x: x - DS, y: y - DS }
        const out = { x: x + DS, y }

        // Body
        ctx.beginPath()
        ctx.moveTo(topLeft.x, topLeft.y)
        ctx.lineTo(bottomLeft.x, bottomLeft.y)
        ctx.lineTo(out.x - DS / 5, out.y)
        ctx.closePath()
        ctx.strokeStyle = '#eeeeee'
        ctx.lineWidth = 3
        ctx.stroke()

        // DOT
        ctx.beginPath()
        ctx.arc(out.x - DS / 10, out.y, DS / 10, 0, Math.PI * 2)
        ctx.stroke()

        // In
        ctx.beginPath()
        ctx.moveTo(topLeft.x - DS, y)
        ctx.lineTo(x - DS, y)
        ctx.strokeStyle = this.a.value ? 'green' : 'red'
        ctx.stroke()

        // Output
        ctx.beginPath()
        ctx.moveTo(out.x, out.y)
        ctx.lineTo(out.x + DS, out.y)
        ctx.strokeStyle = this.x.value ? 'green' : 'red'
        ctx.stroke()
    }
}