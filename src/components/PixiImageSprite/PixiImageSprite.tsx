import * as React from "react";
import { useContext, useEffect, useRef, useState } from "react";
// @ts-ignore
import PropTypes from "prop-types";
import { GsapPixieContext } from "../../providers/GsapPixieContextProvider";
import { Sprite, Container, withFilters } from "@pixi/react";
import { AdjustmentFilter } from "@pixi/filter-adjustment";
import * as PIXI from "pixi.js";
import gsap from "gsap";
import PixiTransformer from "../../utils/PixiTransformer";

// @ts-ignore
import isEmpty from "lodash/isEmpty";
import { getAnimByName } from "../../utils/GsapAnim";
import { TransformationEnd } from "../../types/transformation";

type PixiImageSpriteProps = {
  uniqueId: string;
  src: string;
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
  onAnchorTransformationEnd?: (endData: any) => void;
};

const Filters = withFilters(Container, {
  blur: PIXI.filters.BlurFilter,
  adjust: AdjustmentFilter,
  matrix: PIXI.filters.ColorMatrixFilter,
});

/** CYAN Filters */
const CYAN = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];

const PixiImageSprite: React.FC<PixiImageSpriteProps> = (props) => {
  //// State
  const [isMounted, setIsMounted] = React.useState(false);
  const [, setIsTransformerDragging] = useState(false);
  const [, setIsMouseOverTransformer] = useState(false);

  //// Refs
  const imageRef = useRef<PIXI.Sprite>(null);
  const containerRef = useRef<PIXI.Container>(null);
  const parentNode = useRef<PIXI.Container>(null);
  const imgGroupRef = useRef<PIXI.Container>(null);
  const transformerRef = useRef<PIXI.Container>(null);

  //// Context
  const { tl } = useContext(GsapPixieContext);

  /// 1001
  // console.log("contxt Values", tl);
  const {
    uniqueId,
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
    },
    pointerdown,
    pointerup,
    mousedown,
    mouseup,
    pointerover,
    mouseover,
    mouseout,
    applyTransformer,
    onAnchorTransformationEnd,
  } = props;

  // color corrections
  const {
    contrast = 1,
    saturation = 1,
    exposure = 1,
    blurRadius = 0,
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

  // transformer to handle sprite transformation
  const handleOnTransformEnd = React.useCallback(
    (endData: TransformationEnd) => {
      console.log("changeEnd", endData);
      if (onAnchorTransformationEnd) {
        console.log("running onAnchorTransformationEnd");
        onAnchorTransformationEnd(endData);
      }
    },
    []
  );

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
            <Container ref={imgGroupRef}>
              <Sprite
                image={src}
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
                pointerover={pointerover}
                mousedown={mousedown}
                mouseup={mouseup}
                mouseover={mouseover}
                mouseout={mouseout}
              />
            </Container>
          </Filters>
        ) : (
          // @ts-ignore
          <Container ref={imgGroupRef}>
            <Sprite
              image={src}
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
              pointerover={pointerover}
              mousedown={mousedown}
              mouseup={mouseup}
              mouseover={mouseover}
              mouseout={mouseout}
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

export default PixiImageSprite;
