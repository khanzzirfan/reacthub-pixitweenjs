import * as React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { Container, withFilters, Text } from "@pixi/react";
import { AdjustmentFilter } from "@pixi/filter-adjustment";
import * as PIXI from "pixi.js";
import gsap from "gsap";
import Quill from "quill";
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

const Filters = withFilters(Container, {
  blur: PIXI.filters.BlurFilter,
  adjust: AdjustmentFilter,
  matrix: PIXI.filters.ColorMatrixFilter,
});

/** CYAN Filters */
const CYAN = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
// change these to control the text size

const PixiTextSprite: React.FC<PixiTextSpriteProps> = (props) => {
  //// State
  const [isMounted, setIsMounted] = React.useState(false);
  const [, setIsTransformerDragging] = useState(false);
  const [, setIsMouseOverTransformer] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  console.log("allProps", props);
  //// Refs
  const containerRef = useRef<PIXI.Container>(null);
  const parentNode = useRef<PIXI.Container>(null);
  const imgGroupRef = useRef<PIXI.Container>(null);
  const transformerRef = useRef<PIXI.Container>(null);

  /// refs
  const textRef = useRef<PIXI.Text>(null);
  const textInputGroupRef = useRef(null);
  const textInnerGroupRef = useRef(null);
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
    mouseout,
    applyTransformer,
    onAnchorTransformationEnd,
    onTextUpdate,
  } = props;

  const {
    width = 0,
    height = 0,
    scale = [1, 1],
    x,
    y,
    rotation = 1,
    /// font
    fontFamily = "Arial",
    fontWeight = "normal",
    fontStyle = "normal",
    fontSize = 16,

    // fill
    fill = "black",

    // stroke
    stroke,
    strokeThickness: strokeWidth,
    // drop shadow
    blurRadius = 0,
    blurEnabled = false,
    dropShadowColor: shadowColor = null,

    // multiline
    wordWrapWidth = 50000000,
    leading = 0,
    letterSpacing,
    colorCorrection = {},
    animation,
    effect,
  } = transformation;

  // color corrections
  const {
    contrast = 1,
    saturation = 1,
    exposure = 1,
    alpha = 1,
  } = colorCorrection || {};

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

  const handleOnDoubleClickEditText = () => {
    console.log("double click triggered");
    setIsEditing(true);
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
      console.log("enddata", endData);
      if (onAnchorTransformationEnd) {
        console.log("running onAnchorTransformationEnd");
        onAnchorTransformationEnd(endData);
      }
    },
    [onAnchorTransformationEnd, uniqueId, width]
  );

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

  React.useEffect(() => {
    if (isEditing && textInputGroupRef.current) {
      let el = document.getElementById("note-editor");
      if (el) {
        el.style.position = "absolute";
        el.style.zIndex = "10";
        el.style.left = x + "px";
        el.style.top = y + "px";
        el.style.backgroundColor = "var(--chakra-color-darkShark)";
        el.style.transform = "scale(1.5)";
        el.style.width = 300 + "px";
        el.style.height = 100 + "px";
        el.style.color = "#fff";
        el.style.fontSize = "20px";
        el.style.border = "1px solid #CBCEE0";

        const keyboardbindings = {
          // This will overwrite the default binding also named 'tab'
          esc: {
            key: 27,
            handler: function () {
              setIsEditing(false);
              /// onUnSelectKeyFrame();
            },
          },
          enter: {
            key: 13,
            handler: function () {
              setIsEditing(false);
              /// onUnSelectKeyFrame();
            },
          },
        };

        var quill = new Quill("#note-editor", {
          modules: {
            toolbar: false,
            keyboard: {
              bindings: {
                ...keyboardbindings,
              },
            },
          },
          placeholder: "Compose your text here...",
          theme: "snow", // or 'bubble'
        });

        quill.on("text-change", function () {
          handleTextChange(quill.root.innerText);
        });

        quill.setText(text);
        quill.focus();
        quill.off("text-change", () => {
          console.log("removed");
        });
        if (!quill.hasFocus()) {
          el.style.display = "none";
        }
      }
    }
  }, [x, y, isEditing]);

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
                    pointerdown: pointerdown,
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
                  pointerdown: pointerdown,
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
          onDoubleClick={handleOnDoubleClickEditText}
        />
      )}
    </Container>
  );
};

export default PixiTextSprite;

// @ts-ignore
// PixiTextSprite.whyDidYouRender = {
//   logOnDifferentValues: true,
//   customName: "PixiTextSprite",
// };
