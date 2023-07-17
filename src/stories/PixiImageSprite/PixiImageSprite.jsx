import React, { Context } from "react";
import PropTypes from "prop-types";
import { GsapPixieContext } from "../../providers/GsapPixieContextProvider";
import {
  Stage,
  Sprite,
  Container,
  useApp,
  withPixiApp,
  withFilters,
} from "@pixi/react";
import { AdjustmentFilter } from "@pixi/filter-adjustment";
import * as PIXI from "pixi.js";
import gsap from "gsap";
import isEmpty from "lodash/isEmpty";
import { getAnimByName } from "../../providers/GsapAnim";

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

export const PixiImageSprite = withPixiApp((props) => {
  /// console.log("allProps", props);
  //// Refs
  const imageRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const imgGroupRef = React.useRef(null);

  //// Context
  const { tl } = React.useContext(GsapPixieContext);

  /// 1001
  console.log("contxt Values", tl);
  const {
    src,
    startAt,
    endAt,
    initialAlpha,
    transformation: {
      x,
      y,
      width,
      height,
      anchor,
      animation,
      colorCorrection,
      effect,
    } = {},
    onPointerDown,
    onPointerUp,
    onMouseDown,
    onMouseUp,
    ...restProps
  } = props;

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
    blurRadius = 0,
    red = 150,
    green = 150,
    blue = 150,
    alpha = 1,
    scaleInput = 1,
  } = colorCorrection;

  const app = useApp();
  const PixiTransformer = React.useRef(null);

  /** adjustment filter */
  const adjustments = {
    brightness: exposure,
    contrast,
    saturation,
    alpha,
  };

  React.useEffect(() => {
    let ctx = gsap.context(() => {});
    if (containerRef.current && tl.current) {
      const data = {
        duration: Number(endAt) - Number(startAt),
      };

      const ease = getAnimByName(animation);
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
              startAt,
            )
            .from(imgGroupRef.current, { ...data }, startAt)
            .to(containerRef.current, { alpha: 0, duration: 0.2 }, endAt - 0.2);
        } else if (!isEmpty(ease.fromTo)) {
          tl.current
            .fromTo(
              containerRef.current,
              ease.fromTo.from,
              ease.fromTo.to,
              startAt,
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
              Number(endAt) - Number(0.1),
            );
        }
      });
    }
    return () => ctx.revert(); // cleanup!
  }, [animation, startAt, endAt]);

  return (
    <Container ref={containerRef} alpha={initialAlpha}>
      {colorCorrection && colorCorrection.enabled ? (
        <Filters
          scale={1}
          blur={{ blur: blurRadius, quality: 4 }}
          adjust={adjustments}
          apply={({ matrix }) => {
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
            matrix: CYAN,
          }}
        >
          <Container ref={imgGroupRef}>
            <Sprite
              image={src}
              width={width}
              height={height}
              anchor={anchor}
              ref={imageRef}
              x={x}
              y={y}
              interactive={true}
              pointerdown={onPointerDown}
              pointerup={onPointerUp}
              mousedown={onMouseDown}
              mouseup={onMouseUp}
            />
          </Container>
        </Filters>
      ) : (
        <Container ref={imgGroupRef}>
          <Sprite
            image={src}
            width={width}
            height={height}
            anchor={anchor}
            ref={imageRef}
            x={x}
            y={y}
            interactive={true}
            pointerdown={onPointerDown}
            pointerup={onPointerUp}
            mousedown={onMouseDown}
            mouseup={onMouseUp}
          />
        </Container>
      )}
    </Container>
  );
});

PixiImageSprite.propTypes = {
  // app background color property
  backgroundColor: PropTypes.string,
  // sprite transformation properties
  transformation: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    anchor: PropTypes.number,
    rotation: PropTypes.number,
    alpha: PropTypes.number,
    scale: PropTypes.number,
    tint: PropTypes.number,
    blendMode: PropTypes.number,
    colorCorrection: PropTypes.shape({
      enabled: PropTypes.bool,
      temperature: PropTypes.number,
      hue: PropTypes.number,
      contrast: PropTypes.number,
      saturation: PropTypes.number,
      exposure: PropTypes.number,
      reset: PropTypes.bool,
      sharpness: PropTypes.number,
      value: PropTypes.number,
      levels: PropTypes.number,
      luminance: PropTypes.number,
      enhance: PropTypes.number,
      blurRadius: PropTypes.number,
      red: PropTypes.number,
      green: PropTypes.number,
      blue: PropTypes.number,
      alpha: PropTypes.number,
      scaleInput: PropTypes.number,
    }),
    effect: PropTypes.string,
  }).isRequired,
  // sprite initial alpha property (opacity)
  initialAlpha: PropTypes.number,
  // sprite animation properties
  applyTransformer: PropTypes.bool,
  // sprite startAt and endAt properties
  startAt: PropTypes.number.isRequired,
  // sprite startAt and endAt properties
  endAt: PropTypes.number.isRequired,
};

PixiImageSprite.defaultProps = {
  onPointerDown: () => {},
  onPointerUp: () => {},
  onMouseDown: () => {},
  onMouseUp: () => {},
  backgroundColor: "0x000000",
  transformation: {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    anchor: 0,
    rotation: 0,
    alpha: 1,
    scale: 1,
    tint: 0xffffff,
    blendMode: 0,
    colorCorrection: {
      enabled: false,
      temperature: 1,
      hue: 1,
      contrast: 1,
      saturation: 1,
      exposure: 1,
      reset: false,
      sharpness: 1,
      value: 0,
      levels: 1,
      luminance: 0,
      enhance: 0,
      blurRadius: 0,
      red: 150,
      green: 150,
      blue: 150,
      alpha: 1,
      scaleInput: 1,
    },
    effect: "Normal",
  },
  initialAlpha: 1,
  applyTransformer: false,
};
