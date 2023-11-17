import * as PIXI from "pixi.js";
import { Matrix } from "@pixi/math";
import { TransformerHandle as TransformerHandleImpl } from "@pixi-essentials/transformer";
import type { ITransformerCursors, ITransformerStyle, ITransformerHandleStyle } from "@pixi-essentials/transformer";
import * as React from "react";
/** @internal */
export type TransformerProps = {
    boundingBoxes?: "all" | "groupOnly" | "none";
    boxScalingEnabled?: boolean;
    boxScalingTolerance?: number;
    boxRotationEnabled?: boolean;
    boxRotationTolerance?: number;
    centeredScaling?: boolean;
    cursors?: Partial<ITransformerCursors>;
    enabledHandles?: Array<string>;
    group?: PIXI.DisplayObject[];
    handleConstructor?: typeof TransformerHandleImpl;
    handleStyle?: Partial<ITransformerHandleStyle>;
    lockAspectRatio?: boolean;
    projectionTransform?: Matrix;
    rotateEnabled?: boolean;
    rotationSnaps?: number[];
    rotationSnapTolerance?: number;
    scaleEnabled?: boolean;
    skewEnabled?: boolean;
    skewRadius?: number;
    skewSnaps?: number[];
    skewSnapTolerance?: number;
    translateEnabled?: boolean;
    transientGroupTilt?: boolean;
    transformchange?: (e: any) => void;
    wireframeStyle?: Partial<ITransformerStyle>;
};
/**
 * Transformer component
 *
 * @see https://github.com/SukantPal/pixi-essentials/tree/master/packages/transformer
 */
export declare const Transformer: React.FC<TransformerProps>;
