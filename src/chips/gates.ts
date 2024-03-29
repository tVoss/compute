import { Chip, ChipType } from './chip';
import { Input } from './input';

export class Button extends Chip {
  private _signal = false;
  readonly x = this.createOutput('x', () => this._signal);
  constructor(id: string) {
    super(id, ChipType.Button);
  }
  press() {
    this._signal = !this._signal;
  }
}

export class AndGate extends Chip {
  readonly a = this.createInput('a');
  readonly b = this.createInput('b');
  readonly x = this.createOutput('x', () => this.a.get() && this.b.get());

  constructor(id: string) {
    super(id, ChipType.And);
  }
}

export class OrGate extends Chip {
  readonly a = this.createInput('a');
  readonly b = this.createInput('b');
  readonly x = this.createOutput('x', () => this.a.get() || this.b.get());

  constructor(id: string) {
    super(id, ChipType.Or);
  }
}

export class NotGate extends Chip {
  readonly a = this.createInput('a');
  readonly x = this.createOutput('b', () => !this.a.get());

  constructor(id: string) {
    super(id, ChipType.Not);
  }
}

export class NandGate extends Chip {
  readonly a = this.createInput('a');
  readonly b = this.createInput('b');
  readonly x = this.createOutput('x', () => !(this.a.get() && this.b.get()));

  constructor(id: string) {
    super(id, ChipType.Nand);
  }
}

export class NorGate extends Chip {
  readonly a = this.createInput('a');
  readonly b = this.createInput('b');
  readonly x = this.createOutput('x', () => !(this.a.get() || this.b.get()));

  constructor(id: string) {
    super(id, ChipType.Nor);
  }
}

export class XorGate extends Chip {
  readonly a = this.createInput('a');
  readonly b = this.createInput('b');
  readonly x = this.createOutput(
    'x',
    () => (this.a.get() && !this.b.get()) || (!this.a.get() && this.b.get())
  );

  constructor(id: string) {
    super(id, ChipType.Xor);
  }
}

export class TriState extends Chip {
  readonly a = this.createInput('a');
  readonly en = this.createInput('en');
  readonly x = this.createOutput('x', () =>
    this.en.get() ? this.a.get() : null
  );

  constructor(id: string) {
    super(id, ChipType.TriState);
  }
}

export class Led extends Chip {
  readonly a = this.createInput('a');
  constructor(id: string) {
    super(id, ChipType.Led);
  }
}
