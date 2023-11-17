import * as React from "react";
import * as PIXI from "pixi.js";
type PixiAnimatedSpriteProps = {
    forwardRef: any;
    isPlaying: boolean;
    images?: string[] | undefined;
    initialFrame?: number | undefined;
    scale?: number | [number, number];
    x: number;
    y: number;
    width?: number;
    height?: number;
    anchor?: number;
    rotation?: number;
    alpha?: number;
    animationSpeed?: number;
    textures?: PIXI.Texture[] | undefined;
    loop?: boolean;
    onComplete?: () => void;
    onFrameChange?: (currentFrame: number) => void;
};
declare const PixiAnimatedSprite: React.MemoExoticComponent<({ isPlaying, forwardRef, ...props }: PixiAnimatedSpriteProps) => import("react/jsx-runtime").JSX.Element>;
export default PixiAnimatedSprite;
