import { ChipSprite, DrawPath } from "./chip-sprite";
import { AndGate } from "../../chips/gates";

export class AndSprite extends ChipSprite {
    chip: AndGate;

    constructor(chip: AndGate) {
        super();
        this.chip = chip;
    }

    makeChipBodyPath(ctx: DrawPath) {
        ctx.beginPath();
        ctx.moveTo(0, ChipSprite.kSize);
        ctx.lineTo(-ChipSprite.kSize, ChipSprite.kSize);
        ctx.lineTo(-ChipSprite.kSize, -ChipSprite.kSize);
        ctx.lineTo(0, -ChipSprite.kSize);
        ctx.arc(0, 0, ChipSprite.kSize, (Math.PI * 3) / 2, Math.PI / 2);
        ctx.closePath();
    }
}
