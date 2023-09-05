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
  onExitQuillEditor?: () => void;
}

const PixiTextSprite = React.forwardRef<
  ForwardedRefResponse | null,
  PixiTextSpriteProps
>((props, ref) => {
  //// State
  const [isEditing, setIsEditing] = useState(false);
  // State variables to track click events
  const doubleClickDelay = 300; // Adjust this as needed

  //// Refs
  const parentNode = useRef<PIXI.Container>(null);
  const lastClickTimeRef = useRef<number>(0);
  /// refs
  const textRef = useRef<PIXI.Text>(null);
  const textInputGroupRef = useRef(null);
  const textInnerGroupRef = useRef(null);
  const textFontSize = useRef<number>(16);
  const textTransformDetailRef = useRef<any>(null);
  const quillRef = useRef<Quill>(null);

  /// 1001
  const {
    uniqueId,
    text,
    disabled,
    transformation,
    onTextUpdate,
    pointerdown,
    onExitQuillEditor,
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

  // @ts-ignore
  const handleOnDoubleClickEditText = () => {
    setIsEditing(true);
  };

  const handleOnPointerDown = () => {
    const currentTime = new Date().getTime();
    const clickTimeDiff = currentTime - lastClickTimeRef.current;
    if (clickTimeDiff < doubleClickDelay) {
      handleOnDoubleClickEditText();
    } else {
      if (pointerdown) {
        pointerdown();
      }
    }
    lastClickTimeRef.current = currentTime;
  };

  const handleTextChange = (e: string) => {
    if (onTextUpdate) {
      onTextUpdate({
        text: e,
        uniqueId: uniqueId,
      });
    }
  };

  // const handleOnMouseDown = (interactionData) => {

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

  const closeEditor = () => {
    setIsEditing(false);
    if (onExitQuillEditor) onExitQuillEditor();
  };

  React.useEffect(() => {
    if (isEditing && textInputGroupRef.current) {
      let el = document.getElementById("note-editor");
      if (el) {
        el.style.position = "absolute";
        el.style.display = "block";
        el.style.zIndex = "10";
        el.style.left = x + "px";
        el.style.top = y + "px";
        el.style.backgroundColor = "var(--chakra-color-darkShark)";
        el.style.transform = "scale(1.5)";
        el.style.width = "300px";
        el.style.height = "100px";
        el.style.color = "#fff";
        el.style.fontSize = "20px";
        el.style.border = "1px solid #CBCEE0";

        const keyboardbindings = {
          // This will overwrite the default binding also named 'tab'
          esc: {
            key: 27,
            handler: function () {
              closeEditor();
            },
          },
          enter: {
            key: 13,
            handler: function () {
              closeEditor();
            },
          },
        };

        // @ts-ignore
        quillRef.current = new Quill("#note-editor", {
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

        if (quillRef.current) {
          quillRef.current.on("text-change", function () {
            if (quillRef.current)
              handleTextChange(quillRef.current.root.innerText);
          });

          quillRef.current.setText(text);
          quillRef.current.focus();
          quillRef.current.off("text-change", () => {});

          if (!quillRef.current.hasFocus()) {
            el.style.display = "none";
          }

          // add the custom closing icon below the container
          // Append the close icon button
          const closeButton = document.createElement("button");
          closeButton.innerHTML = "&#10006;"; // Close icon (you can customize)
          closeButton.style.position = "absolute";
          closeButton.style.bottom = "-14px";
          closeButton.style.left = "-3px";
          closeButton.style.cursor = "pointer";
          closeButton.addEventListener("click", () => {
            closeEditor();
          });
          closeButton.style.border = "none"; // Remove default border
          closeButton.style.borderRadius = "50%"; // Apply rounded border
          closeButton.style.width = "15px"; // Adjust button width
          closeButton.style.height = "15px"; // Adjust button height
          closeButton.style.backgroundColor = "#f8f8f8"; // Background color
          closeButton.style.color = "#333"; // Text color
          closeButton.style.fontSize = "10px"; // Text size

          el.appendChild(closeButton);
        }
      }
    } else {
      if (quillRef.current) {
        let quillParent = document.getElementById("note-editor");
        if (quillParent && quillParent.hasChildNodes()) {
          // @ts-ignore
          quillParent.removeChild(quillParent.firstChild);
          quillParent.removeAttribute("class");
          quillParent.removeAttribute("style");
        }
        quillRef.current.off("text-change", () => {});
      }
    }
    return () => {
      if (quillRef.current) {
        quillRef.current.off("text-change", () => {});
        // @ts-ignore
        // quillRef.current = null;
      }
    };
  }, [x, y, isEditing]);

  React.useEffect(() => {
    // Cleanup Quill when isEditing is programmatically set to false
    if (!isEditing) {
      const el = document.getElementById("note-editor");
      if (el) {
        el.style.display = "none";
      }
    }
  }, [isEditing]);

  return (
    <AbstractContainer
      {...props}
      ref={ref}
      isText={true}
      onDoubleClick={handleOnDoubleClickEditText}
      isTextEditMode={isEditing}
    >
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
