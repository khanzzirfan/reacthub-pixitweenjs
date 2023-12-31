import * as React from "react";
import { useRef } from "react";
import { Container, Text } from "@pixi/react";
import * as PIXI from "pixi.js";
// @ts-ignore
import isEmpty from "lodash/isEmpty";
// @ts-ignore
import isEqual from "lodash/isEqual";
// @ts-ignore
import pick from "lodash/pick";
import {
  PixiBaseSpriteProps,
  ForwardedRefResponse,
} from "../../types/BaseProps";
import AbstractContainer from "../../hocs/AbstractContainer";
import { Effects } from "../../types/Effects";
import { withFiltersHook } from "../../hooks/withFiltersHook";
import { Animations } from "../../types";

export interface PixiTextSpriteProps extends PixiBaseSpriteProps {
  text: string;
  startAt: number;
  endAt: number;
  disabled?: boolean;
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
    animation?: Animations;
    fontWeight?: string;
    fontSize?: number;
    fontFamily?: string;
    fontStyle?: string;
    fontColor?: string;
    fontVariant?: string;
    lineHeight?: number;
    letterSpacing?: number;
    textDecoration?: string;
    wordWrap?: boolean;
    wordWrapWidth?: number;
    leading?: number;
    padding?: number;
    border?: string;
    dropShadow?: boolean;
    dropShadowColor?: string | number;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    dropShadowBlur?: number;
    blurEnabled?: boolean;
    blurRadius?: number;
    fill: string | number;
    stroke?: string | number;
    strokeThickness?: number;
    zIndex?: number;
    align?: string;
    textBaseline?: string;
    trim?: boolean;

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
  onTextUpdate?: (data: any) => void;
  onAnchorTransformationEnd?: (endData: any) => void;
  onDobuleClick?: () => void;
}

const PixiTextSprite = React.forwardRef<
  ForwardedRefResponse | null,
  PixiTextSpriteProps
>((props, ref) => {
  //// State
  // State variables to track click events
  const doubleClickDelay = 300; // Adjust this as needed
  //// Refs
  const parentNode = useRef<PIXI.Container>(null);
  const lastClickTimeRef = useRef<number>(0);
  /// refs
  const textRef = useRef<PIXI.Text>(null);
  const textInnerGroupRef = useRef(null);
  const textFontSize = useRef<number>(16);
  const textTransformDetailRef = useRef<any>(null);

  /// 1001
  const {
    visible,
    text,
    disabled,
    transformation,
    pointerdown,
    onDobuleClick,
  } = props;

  const {
    x,
    y,
    /// font
    fontFamily = "Arial",
    fontWeight = "normal",
    fontStyle = "normal",
    fontSize = 16,
    fontVariant = "normal",
    // fill
    fill = "black",

    // stroke
    stroke,
    strokeThickness = 0,
    // drop shadow
    blurRadius = 0,
    blurEnabled = false,
    dropShadowColor: shadowColor = null,
    dropShadow = false,
    dropShadowBlur = 0,
    // multiline
    wordWrapWidth = 50000000,
    leading = 0,
    letterSpacing,
    colorCorrection = {},
  } = transformation;

  /// hooks
  const {
    temperatureFilter,
    sharpnessFilter,
    hueFilter,
    blurFilter,
    adjustmentFilter,
  } = withFiltersHook(colorCorrection);

  const { blurRadius: blurRadiusx = 0 } = colorCorrection;

  React.useEffect(() => {
    textFontSize.current = Number(fontSize);
  }, [fontSize]);

  const nFontStyle = ["italic", "oblique"].includes(fontStyle)
    ? fontStyle
    : undefined;

  const nFontVariant = ["small-caps"].includes(fontVariant);

  const nFontWeight = [
    "bold",
    "bolder",
    "lighter",
    "100",
    "200",
    "300",
  ].includes(fontWeight)
    ? fontWeight
    : undefined;

  const nLetterSpacing = Number(letterSpacing) > 0 ? letterSpacing : undefined;

  const pixiStyles = React.useMemo(() => {
    return new PIXI.TextStyle({
      fontFamily: fontFamily,
      fontSize: fontSize,
      fill: fill || "white", //[color, '#00ff99'], // gradient
      ...(stroke &&
        strokeThickness > 0 && {
          stroke: stroke,
          strokeThickness: strokeThickness,
        }),
      ...(nFontStyle && {
        fontStyle: nFontStyle as unknown as PIXI.TextStyleFontStyle,
      }),
      ...(nFontVariant && {
        fontVariant: nFontVariant as unknown as PIXI.TextStyleFontVariant,
      }),
      ...(nFontWeight && {
        fontWeight: nFontWeight as unknown as PIXI.TextStyleFontWeight,
      }),
      ...(nLetterSpacing && { letterSpacing: nLetterSpacing }),
      ...(blurEnabled && {
        dropShadow: true,
        dropShadowBlur: Number(blurRadius),
        dropShadowColor: shadowColor?.toString() || "black",
        dropShadowAngle: 0.5235987755982988,
        dropShadowDistance: 5,
      }),
      ...(dropShadow && {
        dropShadow: true,
        dropShadowBlur: Number(dropShadowBlur),
        dropShadowColor: shadowColor?.toString() || "black",
        dropShadowAngle: 0.5235987755982988,
        dropShadowDistance: 5,
      }),
      wordWrap: true,
      breakWords: true,
      wordWrapWidth: wordWrapWidth || 500,
      leading: leading || 0,
      // lineHeight: lineHeight,
    });
  }, [
    blurEnabled,
    blurRadius,
    fill,
    fontFamily,
    fontSize,
    fontStyle,
    leading,
    nFontStyle,
    nFontWeight,
    nFontVariant,
    nLetterSpacing,
    shadowColor,
    stroke,
    strokeThickness,
    wordWrapWidth,
    dropShadow,
    dropShadowBlur,
  ]);

  // let textMetrics = {};
  // if (!isEmpty(text) && !isEmpty(pixiStyles)) {
  //   textMetrics = PIXI.TextMetrics.measureText(text, pixiStyles);
  // }

  // On transformation change, update the textTransformDetailRef
  React.useEffect(() => {
    textTransformDetailRef.current = {
      ...transformation,
    };
  }, [transformation]);

  const handleOnPointerDown = () => {
    const currentTime = new Date().getTime();
    const clickTimeDiff = currentTime - lastClickTimeRef.current;
    if (clickTimeDiff < doubleClickDelay && onDobuleClick) {
      onDobuleClick();
    } else {
      if (pointerdown) {
        pointerdown();
      }
    }
    lastClickTimeRef.current = currentTime;
  };

  const handleOnDoubleClick = () => {
    if (!disabled && onDobuleClick) onDobuleClick();
  };

  return (
    <AbstractContainer
      {...props}
      ref={ref}
      isText={true}
      onDoubleClick={handleOnDoubleClick}
    >
      <Container ref={parentNode}>
        {/* @ts-ignore */}
        <Container alpha={1} ref={textInnerGroupRef}>
          <Text
            style={pixiStyles}
            x={x}
            y={y}
            anchor={0.5}
            text={text}
            alpha={visible ? 1 : 0}
            {...(visible &&
              !disabled && {
                interactive: true,
                buttonMode: true,
                pointerdown: handleOnPointerDown,
              })}
            ref={textRef}
            filters={[
              temperatureFilter,
              sharpnessFilter,
              hueFilter,
              adjustmentFilter,
              // conditionally add blur filter
              ...(blurRadiusx > 0 ? [blurFilter] : []),
            ]}
          />
        </Container>
      </Container>
    </AbstractContainer>
  );
});

export default PixiTextSprite;

// @ts-ignore
// PixiTextSprite.whyDidYouRender = {
//   logOnDifferentValues: true,
//   customName: "PixiTextSprite",
// };
