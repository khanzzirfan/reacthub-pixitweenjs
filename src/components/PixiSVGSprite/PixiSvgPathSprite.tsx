import * as React from "react";
import { useRef } from "react";
// @ts-ignore
import PropTypes from "prop-types";
import { Sprite, Container, useApp } from "@pixi/react";
import * as PIXI from "pixi.js";
import { SVG } from "pixi-svg";
// @ts-ignore
import svgpath from "svgpath";
// @ts-ignore
import isEmpty from "lodash/isEmpty";
import {
  PixiBaseSpriteProps,
  ForwardedRefResponse,
} from "../../types/BaseProps";
import AbstractContainer from "../../hocs/AbstractContainer";
import { Effects } from "../../types/Effects";
import { withFiltersHook } from "../../hooks/withFiltersHook";

export interface PixiSvgPathSpriteProps extends PixiBaseSpriteProps {
  uniqueId: string;
  path: string;
  startAt: number;
  endAt: number;
  initialAlpha: number;
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
    hexColor?: string;
    fill?: string;
    fontWeight?: string;
    fontStyle?: string;
    stroke?: string;
    strokeWidth?: number;
    blurRadius?: number;
    colorCorrection?: {
      enabled?: boolean;
      temperature?: number;
      hue?: number;
      contrast?: number;
      saturation?: number;
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
      scaleInput?: number;
    };
    effect?: Effects;
  };
  pointerdown?: () => void;
  pointerup?: () => void;
  mousedown?: () => void;
  mouseup?: () => void;
  pointerover?: () => void;
  mouseover?: () => void;
  mouseout?: () => void;
  applyTransformer?: boolean;
  onAnchorTransformationEnd?: (endData: any) => void;
}

const PixiSvgPathSprite = React.forwardRef<
  ForwardedRefResponse | null,
  PixiSvgPathSpriteProps
>((props, ref) => {
  //// State
  const [texture, setTexture] = React.useState<any>(null);

  //// Refs
  const imageRef = useRef<PIXI.Sprite>(null);
  const parentNode = useRef<PIXI.Container>(null);
  const imgGroupRef = useRef<PIXI.Container>(null);

  //// Context

  /// 1001
  // console.log("contxt Values", tl);
  const {
    path,
    transformation: {
      x,
      y,
      width,
      height,
      anchor,
      hexColor,
      fill,
      stroke = "none",
      strokeWidth = 0,
      colorCorrection = {},
    },
    pointerdown,
    pointerup,
  } = props;

  const app = useApp();

  // const fillColor = PIXI.utils.string2hex(fill || "#262730");
  /// hooks
  const {
    temperatureFilter,
    sharpnessFilter,
    hueFilter,
    blurFilter,
    adjustmentFilter,
  } = withFiltersHook(colorCorrection);

  const { blurRadius = 0 } = colorCorrection;

  React.useEffect(() => {
    const transformedPath = svgpath(path).scale(5).translate(0, 0).toString();
    // console.log('path', path);
    // console.log('transformedPath', transformedPath);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"> 
        <path stroke="${stroke}" stroke-width="${strokeWidth}" fill="${
      hexColor || fill
    }" d="${transformedPath}">
        </path>
      </svg>`;

    const svgObject = new SVG(svg);
    const tex = app.renderer.generateTexture(svgObject);
    setTexture(tex);
    return () => {
      // removeTransformer();
    };
  }, [app, path, stroke, strokeWidth, hexColor, fill]);

  return (
    <AbstractContainer {...props} ref={ref}>
      <Container ref={parentNode}>
        <Container ref={imgGroupRef}>
          {texture && (
            <Sprite
              texture={texture}
              width={width}
              height={height}
              anchor={anchor}
              ref={imageRef}
              x={x}
              y={y}
              // @ts-ignore
              interactive={true}
              pointerdown={pointerdown}
              pointerup={pointerup}
              filters={[
                temperatureFilter,
                sharpnessFilter,
                hueFilter,
                adjustmentFilter,
                // conditionally add blur filter
                ...(blurRadius > 0 ? [blurFilter] : []),
              ]}
            />
          )}
        </Container>
      </Container>
    </AbstractContainer>
  );
});

export default PixiSvgPathSprite;
