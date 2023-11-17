import * as React from "react";
import * as PIXI from "pixi.js";
import { PixiBaseSpriteProps, ForwardedRefResponse } from "../../types/BaseProps";
export interface CanvasImageProps {
    getCanvas: () => PIXI.TextureSource | PIXI.TextureSource[];
}
export interface PixiRemotionSpriteProps extends PixiBaseSpriteProps {
    uniqueId: string;
    src: string;
    frameStartAt: number;
    frameEndAt: number;
    mute: boolean;
    locked: boolean;
    pointerdown?: () => void;
    pointerup?: () => void;
    mousedown?: () => void;
    mouseup?: () => void;
    pointerover?: () => void;
    mouseover?: () => void;
    mouseout?: () => void;
    applyTransformer?: boolean;
    onAnchorTransformationEnd?: (endData: any) => void;
    canvasImageRef?: CanvasImageProps;
}
declare const PixiRemotionSprite: React.ForwardRefExoticComponent<PixiRemotionSpriteProps & React.RefAttributes<ForwardedRefResponse | null>>;
export default PixiRemotionSprite;
