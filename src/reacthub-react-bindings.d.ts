import * as React from "react";
import * as PIXI from "pixi.js";

declare module "reacthub-react-bindings" {
  interface TransformerProps {
    group: PIXI.DisplayObject[];
    rotateEnabled?: boolean;
    boxRotationEnabled?: boolean;
    boxScalingEnabled?: boolean;
    wireframeStyle?: {
      thickness: number;
      color: number;
    };
    lockAspectRatio?: boolean;
    scaleEnabled?: boolean;
    handleStyle?: {
      color?: number;
      outlineColor?: number;
      shape?: "circle" | "square";
      radius?: number;
    };
    transformchange?: (transform: PIXI.Matrix) => void;
    transformcommit?: (transform: PIXI.Matrix) => void;
  }

  export class Transformer extends React.Component<TransformerProps> {}
}