import * as React from "react";
import * as PIXI from "pixi.js";
import { PixiBaseSpriteProps, ForwardedRefResponse } from "../../types/BaseProps";
export interface CanvasImageProps {
    getCanvas: () => PIXI.TextureSource | PIXI.TextureSource[];
}
export interface PixiVideoSpriteProps extends PixiBaseSpriteProps {
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
declare const PixiVideoCanvasSyncSprite: React.ForwardRefExoticComponent<PixiVideoSpriteProps & React.RefAttributes<ForwardedRefResponse | null>>;
export default PixiVideoCanvasSyncSprite;
