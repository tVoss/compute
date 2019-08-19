import { ChipSprite, DrawPath } from "./chip-sprite";
import { NotGate } from "../../chips/gates";
import { Input } from "../../chips/input";
import { Output } from "../../chips/output";

export class NotSprite extends ChipSprite {
    chip: NotGate;

    constructor(chip: NotGate) {
        super();
        this.chip = chip;
    }

    makeChipBodyPath(ctx: DrawPath) {
        ctx.beginPath();
        ctx.moveTo(-ChipSprite.kSize,- ChipSprite.kSize);
        ctx.lineTo(- ChipSprite.kSize, ChipSprite.kSize);
        ctx.lineTo(
            (ChipSprite.kSize * 4) / 5,
            0
        );
        ctx.closePath();
    }

    onDraw(ctx: CanvasRenderingContext2D) {
        const x = this.position.x;
        const y = this.position.y;
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
