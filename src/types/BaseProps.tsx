import { Effects } from "./Effects";
import { OverlayTypes } from "../hocs/OverlayTilingSprite";

export interface PixiBaseSpriteProps {
  children?: React.ReactNode;
  uniqueId: string;
  src?: string;
  path?: string;
  text?: string;
  startAt: number;
  endAt: number;
  visible: boolean;
  disabled?: boolean;
  isDragging?: boolean;
  transformation: {
    x: number;
    y: number;
    width: number;
    height: number;
    anchor: number;
    rotation?: number;
    alpha?: number;
    scale?: number | [number, number];
    tint?: number;
    blendMode?: number;
    animation?: string;
    colorCorrection?: {
      enabled?: boolean;
      temperature?: number;
      hue?: number;
      contrast?: number;
      saturation?: number;
      brightness?: number;
      exposure?: number;
      reset?: boolean;
      sharpness?: number;
      value?: number;
      levels?: number;
      luminance?: number;
      enhance?: number;
      blurRadius?: number;
      red?: number;
      green?: number;
      blue?: number;
      alpha?: number;
      gamma?: number;
      scaleInput?: number;
      vignette?: number;
      noise?: number;
      outline?: number;
      outlineColor?: number;
    };
    effect?: Effects;
    overlay?: OverlayTypes;
  };
  pointerdown?: () => void;
  pointerup?: () => void;
  pointerout?: () => void;
  mousedown?: () => void;
  mouseup?: () => void;
  pointerover?: () => void;
  mouseover?: () => void;
  mouseout?: () => void;
  applyTransformer?: boolean;
  onAnchorTransformationEnd?: (endData: any) => void;
}

export interface ForwardedRefResponse {
  getIsTransformerDragging: () => boolean;
  getIsMouseOverTransformer: () => boolean;
}
