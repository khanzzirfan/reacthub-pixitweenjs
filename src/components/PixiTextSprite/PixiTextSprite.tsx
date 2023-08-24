import * as React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { Container, useApp, withFilters, Text } from "@pixi/react";
import { AdjustmentFilter } from "@pixi/filter-adjustment";
import * as PIXI from "pixi.js";
import gsap from "gsap";
import "quill/dist/quill.snow.css";
// @ts-ignore
import PropTypes from "prop-types";
// @ts-ignore
import isEmpty from "lodash/isEmpty";
// @ts-ignore
import isEqual from "lodash/isEqual";
// @ts-ignore
import pick from "lodash/pick";
import { GsapPixieContext } from "../../providers/GsapPixieContextProvider";
import PixiTransformer from "../../utils/PixiTransformer";
import { getAnimByName } from "../../utils/GsapAnim";
import { TransformationEnd } from "../../types/transformation";

type PixiTextSpriteProps = {
  uniqueId: string;
  text: string;
  startAt: number;
  endAt: number;
  initialAlpha: number;
  locked: boolean;
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
    effect?: string;
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
};

type EffectFunc = () => void;
type Deps = ReadonlyArray<unknown>;

const Filters = withFilters(Container, {
  blur: PIXI.filters.BlurFilter,
  adjust: AdjustmentFilter,
  matrix: PIXI.filters.ColorMatrixFilter,
});

/** filter config */
const config = {
  dot: {
    scale: 1,
    angle: 5,
  },
  blur: {
    blur: 0,
    quality: 4,
  },
};

/** CYAN Filters */
const CYAN = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
const RETURN_KEY = 13;
const ESCAPE_KEY = 27;
// change these to control the text size
const BaseFontSize = 64; // font size for 1400 x 700 window
const MinFontSize = 16; // minimum allowable font size
const minWrapWidth = 500;

const PixiTextSprite: React.FC<PixiTextSpriteProps> = (props) => {
  //// State
  const [isMounted, setIsMounted] = React.useState(false);
  const [isTransformerDragging, setIsTransformerDragging] = useState(false);
  const [isMouseOverTransformer, setIsMouseOverTransformer] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  console.log("allProps", props);
  //// Refs
  const imageRef = useRef<PIXI.Sprite>(null);
  const containerRef = useRef<PIXI.Container>(null);
  const parentNode = useRef<PIXI.Container>(null);
  const imgGroupRef = useRef<PIXI.Container>(null);
  const transformerRef = useRef<PIXI.Container>(null);

  /// refs
  const textRef = useRef<PIXI.Text>(null);
  const textGroupRef = useRef(null);
  const textInputGroupRef = useRef(null);
  const textInnerGroupRef = useRef(null);
  const textContainerRef = useRef(null);
  const textFontSize = useRef<number>(16);
  const textTransformDetailRef = useRef<any>(null);

  //// Context
  const { tl } = useContext(GsapPixieContext);

  /// 1001
  // console.log("contxt Values", tl);
  const {
    uniqueId,
    text,
    startAt,
    endAt,
    initialAlpha,
    locked,
    transformation,
    pointerdown,
    pointerup,
    mousedown,
    mouseup,
    pointerover,
    mouseover,
    mouseout,
    applyTransformer,
    onAnchorTransformationEnd,
    onTextUpdate,
    ...restProps
  } = props;

  const {
    width = 0,
    height = 0,
    scale = [1, 1],
    x,
    y,
    rotation = 1,
    lineHeight = 1,
    /// font
    fontFamily = "Arial",
    fontWeight = "normal",
    fontStyle = "normal",
    fontVariant = "normal",
    fontSize = 16,

    // fill
    fill = "black",

    // stroke
    stroke,
    strokeThickness: strokeWidth,
    // drop shadow
    blurRadius = 0,
    dropShadow: shadowEnabled = false,
    blurEnabled = false,
    dropShadowColor: shadowColor = null,
    shadowOffsetX = 0,
    shadowOffsetY = 0,
    dropShadowBlur: shadowBlur = 0,

    // multiline
    wordWrapWidth = 50000000,
    leading = 0,
    textDecoration,
    letterSpacing,
    zIndex = 0,
    padding = 0,
    border,
    colorCorrection = {},
    animation,
    effect,
    ...restTransProps
  } = transformation;

  // color corrections
  const {
    enabled = false,
    temperature = 1,
    hue = 1,
    contrast = 1,
    saturation = 1,
    exposure = 1,
    reset,
    sharpness = 1,
    value = 0,
    levels = 1,
    luminance = 0,
    enhance = 0,
    red = 150,
    green = 150,
    blue = 150,
    alpha = 1,
    scaleInput = 1,
  } = colorCorrection || {};

  const app = useApp();

  /** adjustment filter */
  const adjustments = {
    brightness: exposure,
    contrast,
    saturation,
    alpha,
  };

  /** handle on tranformer onchange */
  const handleOnTransformChange = React.useCallback(() => {
    setIsTransformerDragging(true);
  }, []);

  React.useEffect(() => {
    textFontSize.current = Number(fontSize);
  }, [fontSize]);

  useEffect(() => {
    let ctx = gsap.context(() => {});
    if (containerRef.current && tl.current) {
      const data = {
        duration: Number(endAt) - Number(startAt),
      };

      const ease = getAnimByName(animation || "None");
      ctx = gsap.context(() => {
        if (!isEmpty(ease.from)) {
          tl.current
            .from(containerRef.current, { ...ease.from }, startAt)
            .to(imgGroupRef.current, { alpha: 1, duration: 0.2 }, startAt)
            .from(imgGroupRef.current, { ...data }, startAt)
            .to(containerRef.current, { alpha: 0, duration: 0.2 }, endAt - 0.2);
        } else if (!isEmpty(ease.to)) {
          tl.current
            .to(
              containerRef.current,
              { alpha: 1, duration: 0.2, ...ease.to },
              startAt
            )
            .from(imgGroupRef.current, { ...data }, startAt)
            .to(containerRef.current, { alpha: 0, duration: 0.2 }, endAt - 0.2);
        } else if (!isEmpty(ease.fromTo)) {
          tl.current
            .fromTo(
              containerRef.current,
              ease.fromTo?.from,
              ease.fromTo?.to,
              startAt
            )
            .from(imgGroupRef.current, { ...data }, startAt)
            .to(containerRef.current, { alpha: 0, duration: 0.2 }, endAt - 0.2);
        } else {
          tl.current
            .to(containerRef.current, { alpha: 1, duration: 0.01 }, startAt)
            .from(imgGroupRef.current, { ...data }, startAt)
            .to(
              containerRef.current,
              { alpha: 0, duration: 0.1 },
              Number(endAt) - Number(0.1)
            );
        }
      });
    }
    return () => ctx.revert(); // cleanup!
  }, [animation, startAt, endAt]);

  React.useEffect(() => {
    if (containerRef.current) {
      setIsMounted(true);
    }
  }, []);

  const nFontStyle = ["italic", "oblique"].includes(fontStyle)
    ? fontStyle
    : undefined;

  const nFontWeight = ["bold", "lighter", "100", "200", "300"].includes(
    fontWeight
  )
    ? fontWeight
    : undefined;

  const nLetterSpacing = Number(letterSpacing) > 0 ? letterSpacing : undefined;

  const pixiStyles = React.useMemo(() => {
    return new PIXI.TextStyle({
      fontFamily: fontFamily,
      fontSize: fontSize,
      fill: fill || "white", //[color, '#00ff99'], // gradient
      stroke: stroke,
      strokeThickness: strokeWidth,
      ...(nFontStyle && {
        fontStyle: nFontStyle as unknown as PIXI.TextStyleFontStyle,
      }),
      ...(nFontWeight && {
        fontWeight: nFontWeight as unknown as PIXI.TextStyleFontWeight,
      }),
      ...(nLetterSpacing && { letterSpacing: nLetterSpacing }),
      ...(blurEnabled && {
        dropShadow: true,
        dropShadowBlur: Number(blurRadius),
        dropShadowColor: shadowColor?.toString() || "black",
        // / dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 0,
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
    leading,
    nFontStyle,
    nFontWeight,
    nLetterSpacing,
    shadowColor,
    stroke,
    strokeWidth,
    wordWrapWidth,
  ]);

  let textMetrics = {};
  if (!isEmpty(text) && !isEmpty(pixiStyles)) {
    textMetrics = PIXI.TextMetrics.measureText(text, pixiStyles);
  }

  // On transformation change, update the textTransformDetailRef
  React.useEffect(() => {
    textTransformDetailRef.current = {
      ...transformation,
    };
  }, [transformation]);

  const handleOnDoubleClickEditText = () => {
    setIsEditing(true);
    // onDoubleClick();
  };

  const handleTextChange = (e: string) => {
    if (onTextUpdate) {
      onTextUpdate({
        text: e,
        uniqueId: uniqueId,
        droptype: "titles",
      });
    }
  };

  const handleOnTransformEnd = React.useCallback(
    (endData: TransformationEnd) => {
      if (!textRef.current) return;

      const { transformation: transEnd } = endData;
      const currentTransformation = textTransformDetailRef.current;
      const currentX = currentTransformation.x;
      const currentY = currentTransformation.y;
      console.log("transend", transEnd);
      const { scale: transScale } = transEnd;
      console.log("originalWidth", width);

      const x = textRef.current.x;
      const y = textRef.current.y;
      const nwidth = Math.round(textRef.current.width);
      const nheight = Math.round(textRef.current.height);
      const rotate = Math.round(textRef.current.rotation);
      const scale = [textRef.current.scale._x, textRef.current.scale._y];
      const textMetrix = PIXI.TextMetrics.measureText(
        textRef.current.text,
        // @ts-ignore
        textRef.current._style
      );

      // @ts-ignore
      const currentFontSize = textRef.current._style.fontSize;
      const isResized = transScale[0] !== 1;
      const isHeightResized = transScale[1] !== 1;
      const noOfLines = textMetrix.lines.length;
      const fontSizeUpdate = Math.max(
        10,
        Math.round(Number(currentFontSize) * scale[0])
      );
      let expectedFontSize = fontSizeUpdate; ///* noOfLines;
      let operator = "+";
      let iterator = 0;

      if (!isResized && onAnchorTransformationEnd) {
        onAnchorTransformationEnd({
          uniqueId,
          transformation: {
            x: Math.round(x),
            y: Math.round(y),
            position: [Math.round(x), Math.round(y)],
            pivot: [Math.round(x), Math.round(y)],
            width: Math.round(Math.max(5, nwidth)),
            height: Math.round(Math.max(5, nheight)),
            rotate: Math.round(rotate),
            scale: [1, 1],
            // fontSize: expectedFontSize,
            /// wordWrapWidth: Math.max(minWrapWidth, Math.round(width)),
            // lineHeight: expectedLH,
          },
        });
      } else if (isHeightResized && isResized) {
        do {
          if (operator === "+") {
            expectedFontSize = expectedFontSize + 1;
          } else if (operator === "-") {
            expectedFontSize = expectedFontSize - 1;
          }

          const newPixiStyle = new PIXI.TextStyle({
            fontFamily: "Arial",
            fontSize: expectedFontSize,
            fontStyle: "italic",
            fontWeight: "bold",
            fill: ["#ffffff", "#00ff99"], // gradient
            stroke: "#4a1850",
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: "#000000",
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: nwidth,
          });
          const newMetrix = PIXI.TextMetrics.measureText(
            textRef.current.text,
            newPixiStyle
          );
          console.log("newMetrix", newMetrix);
          if (newMetrix.lines.length === noOfLines) {
            break;
          } else if (newMetrix.lines.length > noOfLines) {
            operator = "-";
          } else if (newMetrix.lines.length < noOfLines) {
            operator = "+";
          }
          iterator++;
          if (iterator > 30) {
            break;
          }
        } while (true);

        if (onAnchorTransformationEnd) {
          onAnchorTransformationEnd({
            uniqueId,
            transformation: {
              x: Math.round(x),
              y: Math.round(y),
              position: [Math.round(x), Math.round(y)],
              pivot: [Math.round(x), Math.round(y)],
              width: Math.round(Math.max(5, nwidth)),
              height: Math.round(Math.max(5, nheight)),
              rotate: Math.round(rotate),
              scale: [1, 1],
              fontSize: expectedFontSize,
              wordWrapWidth: Math.max(minWrapWidth, Math.round(nwidth)),
              // lineHeight: expectedLH,
            },
          });
        }
      } else if (isResized && onAnchorTransformationEnd) {
        // only width resized
        onAnchorTransformationEnd({
          uniqueId,
          transformation: {
            x: Math.round(x),
            y: Math.round(y),
            position: [Math.round(x), Math.round(y)],
            pivot: [Math.round(x), Math.round(y)],
            width: Math.round(Math.max(5, nwidth)),
            height: Math.round(Math.max(5, nheight)),
            rotate: Math.round(rotate),
            scale: [1, 1],
            wordWrapWidth: Math.max(minWrapWidth, Math.round(nwidth)),
          },
        });
      }
    },
    [onAnchorTransformationEnd, uniqueId, width]
  );

  const handleOnClick = (e: any) => {
    if (e) {
      e.stopPropagation();
    }
    // onClick(uniqueId);
    if (pointerdown) {
      pointerdown();
    }
  };

  // const handleOnMoveOver = (interactionData) => {
  //   if (!isDragging) {
  //     setMouseOverSprite(true);
  //   }
  // };

  // const handleOnMoveOut = () => {
  //   if (!isDragging) {
  //     setMouseOverSprite(false);
  //   }
  // };

  return (
    // @ts-ignore
    <Container ref={parentNode}>
      {/* @ts-ignore */}
      <Container
        ref={containerRef}
        alpha={initialAlpha}
        position={[x, y]}
        pivot={[x, y]}
        width={width}
        height={height}
      >
        {isEditing && <Container ref={textInputGroupRef}></Container>}
        {colorCorrection && colorCorrection.enabled ? (
          <Filters
            scale={1}
            blur={{ blur: blurRadius, quality: 4 }}
            adjust={adjustments}
            apply={({ matrix }: { matrix: any }) => {
              if (effect === "BlackAndWhite") {
                matrix.desaturate();
              } else if (effect === "Sepia") {
                matrix.sepia();
              } else if (effect === "RetroVintage") {
                matrix.negative();
              } else if (effect === "NightVision") {
                matrix.negative();
              } else if (effect === "Normal") {
                matrix.reset();
              }
            }}
            matrix={{
              enabled: true,
              // @ts-ignore
              matrix: CYAN,
            }}
          >
            {/* @ts-ignore */}
            <Container alpha={isEditing ? 0 : 1} ref={textInnerGroupRef}>
              <Text
                style={pixiStyles}
                x={x}
                y={y}
                rotation={rotation}
                anchor={0.5}
                text={text}
                {...(!isEditing &&
                  !locked && {
                    interactive: true,
                    buttonMode: true,
                    pointerdown: handleOnClick,
                    pointerover: pointerover,
                    pointerout: mouseout,
                  })}
                ref={textRef}
                scale={scale}
              />
            </Container>
          </Filters>
        ) : (
          // @ts-ignore
          <Container alpha={isEditing ? 0 : 1} ref={textInnerGroupRef}>
            <Text
              style={pixiStyles}
              x={x}
              y={y}
              rotation={rotation}
              anchor={0.5}
              text={text}
              {...(!isEditing &&
                !locked && {
                  interactive: true,
                  buttonMode: true,
                  pointerdown: handleOnClick,
                  pointerover: pointerover,
                  pointerout: mouseout,
                })}
              ref={textRef}
              scale={scale}
            />
          </Container>
        )}
      </Container>
      {applyTransformer && (
        <PixiTransformer
          pixiTransformerRef={transformerRef}
          imageRef={containerRef}
          isMounted={isMounted}
          transformCommit={handleOnTransformEnd}
          transformChange={handleOnTransformChange}
          mouseoverEvent={setIsMouseOverTransformer}
          uniqueId={uniqueId}
        />
      )}
    </Container>
  );
};

export default PixiTextSprite;
