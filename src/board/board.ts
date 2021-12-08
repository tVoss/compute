import { Signal, Wire, Port } from '../chips/core';
import { Group } from '../graphics/group';
import { Entity } from '../graphics/entity';
import { WireSprite } from '../graphics/sprites/wire-sprite';
import { ChipSprite, DrawPath } from '../graphics/sprites/chip-sprite';
import { AndSprite } from '../graphics/sprites/and-sprite';
import {
  AndGate,
  NotGate,
  Button,
  NandGate,
  Led,
  OrGate,
  NorGate,
  XorGate,
} from '../chips/gates';
import { NotSprite } from '../graphics/sprites/not-sprite';
import { ButtonSprite } from '../graphics/sprites/button-sprite';
import { NandSprite } from '../graphics/sprites/nand-sprite';
import { OrSprite } from '../graphics/sprites/or-sprite';
import { NorSprite } from '../graphics/sprites/nor-sprite';
import { Output } from '../chips/output';
import { Input } from '../chips/input';
import { Chip, ChipType } from '../chips/chip';
import { EmptyEntity } from '../graphics/empty-entity';
import { LedSprite } from '../graphics/sprites/led-sprite';
import { ClockSprite } from '../graphics/sprites/clock-sprite';
import { Clock } from '../chips/clock';
import { XorSprite } from '../graphics/sprites/xor-sprite';
import { Point } from '../util/point';

export class Board extends Group {
  private _tickCount = 0;
  private _dimensions: Point = { x: 1000, y: 500 };

  constructor() {
    super();
  }

  get wireSprites() {
    return this.allChildren.filter(
      e => e instanceof WireSprite
    ) as WireSprite[];
  }
  get chipSprites() {
    return this.allChildren.filter(
      e => e instanceof ChipSprite
    ) as ChipSprite[];
  }

  addWire(wire: Wire) {
    const sprite = new WireSprite(this, wire);
    sprite.setParent(this);
    return sprite;
  }

  addChip = (chip: Chip) => {
    const sprite = this.getChipSprite(chip);
    sprite.setParent(this);
    sprite.board = this;
    return sprite;
  };

  removeChip(removeMe: ChipSprite) {
    const chip = removeMe.chip;
    const deadWires = [] as WireSprite[];
    // Disconnect input wires
    chip.inputs.forEach(ci => {
      this.wireSprites.forEach(w => {
        if (w.wire.input === ci) {
          deadWires.push(w);
        }
      });
    });
    // Disconnect output wires
    chip.outputs.forEach(co => {
      this.wireSprites.forEach(w => {
        if (w.wire.output === co) {
          deadWires.push(w);
        }
      });
    });

    // Delete chip
    removeMe.removeParent();

    // Cleanup wires
    deadWires.forEach(dw => {
      if (dw.wire.input) {
        dw.wire.input.set('x');
      }
      dw.removeParent();
    });
  }

  tryFindEntity(point: Point, ctx: CanvasRenderingContext2D) {
    const e = super.tryFindEntity(point, ctx);
    if (e instanceof ChipSprite) {
      return e as ChipSprite;
    }
    return null;
  }

  tick = () => {
    console.log(`--- TiCK (${this._tickCount}) ---`);
    this.wireSprites.forEach(w => w.wire.writeInputs());
    this.chipSprites.forEach(c => c instanceof ClockSprite && c.chip.tick());
    this.wireSprites.forEach(w => w.wire.readOutputs());
    console.log(`--- DONE (${this._tickCount}) ---`);

    this._tickCount++;
  };

  draw(ctx: CanvasRenderingContext2D) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'white';
    ctx.strokeRect(0, 0, this._dimensions.x, this._dimensions.y);
    for (let i = 0; i < this._dimensions.x; i += 10) {
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, this._dimensions.y);
      ctx.stroke();
      if (i % 50 === 0) {
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, this._dimensions.y);
        ctx.stroke();
      }
    }
    for (let i = 0; i < this._dimensions.y; i += 10) {
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(this._dimensions.x, i);
      ctx.stroke();
      if (i % 50 === 0) {
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(this._dimensions.x, i);
        ctx.stroke();
      }
    }
    super.draw(ctx);
  }

  tryFindPort(point: Point, radius: number): Port | null {
    for (const chip of this.chipSprites.values()) {
      const port = chip.tryFindPort(point, radius);
      if (port) {
        return port;
      }
    }
    return null;
  }

  findConnectedWires(port: Port): WireSprite[] {
    return this.wireSprites.filter(
      ws => ws.wire.input === port || ws.wire.output === port
    );
  }

  getPortPos(port: Port) {
    if (port instanceof Input) {
      return this.getInputPos(port);
    } else {
      return this.getOutputPos(port);
    }
  }

  getInputPos(input: Input) {
    for (let i = 0; i < this.chipSprites.length; i++) {
      const pos = this.chipSprites[i].getInputPos(input);
      if (pos) {
        return pos;
      }
    }
    return null;
  }

  getOutputPos(output: Output) {
    for (let i = 0; i < this.chipSprites.length; i++) {
      const pos = this.chipSprites[i].getOutputPos(output);
      if (pos) {
        return pos;
      }
    }
    return null;
  }

  private getChipSprite(chip: Chip) {
    let sprite: ChipSprite;
    switch (chip.type) {
      case ChipType.Button:
        sprite = new ButtonSprite(chip as Button);
        break;
      case ChipType.And:
        sprite = new AndSprite(chip as AndGate);
        break;
      case ChipType.Nand:
        sprite = new NandSprite(chip as NandGate);
        break;
      case ChipType.Not:
        sprite = new NotSprite(chip as NotGate);
        break;
      case ChipType.Led:
        sprite = new LedSprite(chip as Led);
        break;
      case ChipType.Clock:
        sprite = new ClockSprite(chip as Clock);
        break;
      case ChipType.Or:
        sprite = new OrSprite(chip as OrGate);
        break;
      case ChipType.Nor:
        sprite = new NorSprite(chip as NorGate);
        break;
      case ChipType.Xor:
        sprite = new XorSprite(chip as XorGate);
        break;
      default:
        throw new Error('Could not make sprite for: ' + ChipType[chip.type]);
    }
    return sprite;
  }
}
