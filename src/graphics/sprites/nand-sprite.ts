import { ChipSprite, DrawPath } from "./chip-sprite";
import { NandGate } from "../../chips/gates";

export class NandSprite extends ChipSprite {
    chip: NandGate;

    constructor(chip: NandGate) {
        super();
        this.chip = chip;
    }

    makeChipBodyPath(ctx: DrawPath) {
        ctx.beginPath();
        ctx.moveTo(-ChipSprite.kSize / 5, ChipSprite.kSize);
        ctx.lineTo(-ChipSprite.kSize, ChipSprite.kSize);
        ctx.lineTo(-ChipSprite.kSize, -ChipSprite.kSize);
        ctx.lineTo(-ChipSprite.kSize / 5, -ChipSprite.kSize);
        ctx.arc(
            -ChipSprite.kSize / 5,
            0,
            ChipSprite.kSize,
            (Math.PI * 3) / 2,
            Math.PI / 2
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
