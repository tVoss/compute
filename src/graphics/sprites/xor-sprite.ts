import { ChipSprite, DrawPath } from "./chip-sprite";
import { Chip } from "../../chips/chip";
import { XorGate } from "../../chips/gates";

export class XorSprite extends ChipSprite {
    readonly chip: Chip;

    constructor(chip: XorGate) {
        super();
        this.chip = chip;
    }

    makeChipBodyPath(ctx: DrawPath) {
        ctx.beginPath();
        ctx.moveTo((-ChipSprite.kSize * 2) / 3, ChipSprite.kSize);
        ctx.quadraticCurveTo(0, ChipSprite.kSize, ChipSprite.kSize, 0);
        ctx.quadraticCurveTo(
            0,
            -ChipSprite.kSize,
            (-ChipSprite.kSize * 2) / 3,
            -ChipSprite.kSize
        );
        ctx.quadraticCurveTo(
            -ChipSprite.kSize / 2 + ChipSprite.kSize / 3,
            0,
            (-ChipSprite.kSize * 2) / 3,
            ChipSprite.kSize
        );
        ctx.closePath();
    }

    onDraw(ctx: CanvasRenderingContext2D) {
        super.onDraw(ctx);

        ctx.beginPath();
        ctx.moveTo(-ChipSprite.kSize, -ChipSprite.kSize);
        ctx.quadraticCurveTo(
            -ChipSprite.kSize / 2,
            0,
            -ChipSprite.kSize,
            ChipSprite.kSize
        );
        ctx.fill();
        ctx.stroke();
    }
}
