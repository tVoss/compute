import { ChipSprite, DrawPath } from "./chip-sprite";
import { Chip } from "../../chips/chip";
import { OrGate } from "../../chips/gates";

export class OrSprite extends ChipSprite {
    readonly chip: Chip;

    constructor(chip: OrGate) {
        super();
        this.chip = chip;
    }

    makeChipBodyPath(ctx: DrawPath) {
        ctx.beginPath();
        ctx.moveTo(-ChipSprite.kSize, ChipSprite.kSize);
        ctx.quadraticCurveTo(0, ChipSprite.kSize, ChipSprite.kSize, 0);
        ctx.quadraticCurveTo(
            0,
            -ChipSprite.kSize,
            -ChipSprite.kSize,
            -ChipSprite.kSize
        );
        ctx.quadraticCurveTo(
            -ChipSprite.kSize / 2,
            0,
            -ChipSprite.kSize,
            ChipSprite.kSize
        );
        ctx.closePath();
    }
}
