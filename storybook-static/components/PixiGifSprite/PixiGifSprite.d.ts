import * as React from "react";
import { PixiBaseSpriteProps, ForwardedRefResponse } from "../../types/BaseProps";
export interface PixiGifSpriteProps extends PixiBaseSpriteProps {
    uniqueId: string;
    src: string;
    startAt: number;
    endAt: number;
    frameStartAt: number;
    frameEndAt: number;
    locked: boolean;
    loop: boolean;
}
/**
 * PixiGifSprite Component is used to render gif image
 * @param props Gif Sprite props
 * @returns
 */
declare const PixiGifSprite: React.ForwardRefExoticComponent<PixiGifSpriteProps & React.RefAttributes<ForwardedRefResponse | null>>;
export default PixiGifSprite;
