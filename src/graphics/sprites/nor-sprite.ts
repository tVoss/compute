import { ChipSprite, DrawPath } from "./chip-sprite";
import { Chip } from "../../chips/chip";
import { NorGate } from "../../chips/gates";

export class NorSprite extends ChipSprite {
    readonly chip: Chip;

    constructor(chip: NorGate) {
        super();
        this.chip = chip;
    }

    makeChipBodyPath(ctx: DrawPath) {
        ctx.beginPath();
        ctx.moveTo(-ChipSprite.kSize, ChipSprite.kSize);
        ctx.quadraticCurveTo(
            0,
            ChipSprite.kSize,
            (ChipSprite.kSize * 4) / 5,
            0
        );
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
            +ChipSprite.kSize
        );
        ctx.closePath();
    }

    onDraw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "#eeeeee";
        ctx.lineWidth = 3;

        // Body
        this.makeChipBodyPath(ctx);
        ctx.stroke();

        // DOT
        ctx.beginPath();
        ctx.arc(
            (9 * ChipSprite.kSize) / 10,
            0,
            ChipSprite.kSize / 10,
            0,
            Math.PI * 2
        );
        ctx.closePath();
        ctx.stroke();
    }
}
