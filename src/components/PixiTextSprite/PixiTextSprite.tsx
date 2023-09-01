import * as React from "react";
import { useRef, useState } from "react";
import { Container, Text } from "@pixi/react";
import * as PIXI from "pixi.js";
import Quill from "quill";
import "quill/dist/quill.snow.css";
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

export interface PixiTextSpriteProps extends PixiBaseSpriteProps {
  text: string;
  startAt: number;
  endAt: number;
  initialAlpha: number;
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
}

const PixiTextSprite = React.forwardRef<
  ForwardedRefResponse | null,
  PixiTextSpriteProps
>((props, ref) => {
  //// State
  const [isEditing, setIsEditing] = useState(false);

  console.log("allProps", props);
  //// Refs
  const parentNode = useRef<PIXI.Container>(null);

  /// refs
  const textRef = useRef<PIXI.Text>(null);
  const textInputGroupRef = useRef(null);
  const textInnerGroupRef = useRef(null);
  const textFontSize = useRef<number>(16);
  const textTransformDetailRef = useRef<any>(null);

  /// 1001
  // console.log("contxt Values", tl);
  const {
    uniqueId,
    text,
    disabled,
    transformation,
    onTextUpdate,
    pointerdown,
  } = props;

  const {
    x,
    y,
    /// font
    fontFamily = "Arial",
    fontWeight = "normal",
    fontStyle = "normal",
    fontSize = 16,

    // fill
    fill = "black",

    // stroke
    stroke,
    strokeThickness = 0,
    // drop shadow
    blurRadius = 0,
    blurEnabled = false,
    dropShadowColor: shadowColor = null,

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
      ...(stroke &&
        strokeThickness > 0 && {
          stroke: stroke,
          strokeThickness: strokeThickness,
        }),
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
    strokeThickness,
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

  // @ts-ignore
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
    <AbstractContainer {...props} ref={ref} isText={true}>
      <Container ref={parentNode}>
        {/* @ts-ignore */}
        {isEditing && <Container ref={textInputGroupRef}></Container>}
        {/* @ts-ignore */}
        <Container alpha={isEditing ? 0 : 1} ref={textInnerGroupRef}>
          <Text
            style={pixiStyles}
            x={x}
            y={y}
            anchor={0.5}
            text={text}
            {...(!isEditing &&
              !disabled && {
                interactive: true,
                buttonMode: true,
                pointerdown: pointerdown,
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
