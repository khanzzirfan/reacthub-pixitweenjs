import * as React from "react";
import { useContext, useRef, useState } from "react";
import gsap from "gsap";

import { Container, withFilters } from "@pixi/react";
import { AdjustmentFilter } from "@pixi/filter-adjustment";
import * as PIXI from "pixi.js";
import { Effects } from "../types/Effects";
// import pixiTransfomer from "../utils/PixiTransformer";
import PixiTransformer from "../components/PixiTransformer/PixiTransformer";
import { PixiBaseSpriteProps, ForwardedRefResponse } from "../types/BaseProps";
import { TransformationEnd } from "../types/transformation";
import { GsapPixieContext } from "../providers/GsapPixieContextProvider";
import { getAnimByName } from "../utils/GsapAnim";
// @ts-ignore
import isEmpty from "lodash/isEmpty";

/** CYAN Filters */
const CYAN = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];

const AbstractContainer = React.forwardRef<
  ForwardedRefResponse | null,
  PixiBaseSpriteProps
>((props, ref) => {
  //// State
  const [isMounted, setIsMounted] = React.useState(false);
  const [isTransformerDragging, setIsTransformerDragging] = useState(false);
  const [isMouseOverTransformer, setIsMouseOverTransformer] = useState(false);

  //// Refs
  const containerRef = useRef<PIXI.Container>(null);
  const parentNode = useRef<PIXI.Container>(null);
  const imgGroupRef = useRef<PIXI.Container>(null);
  const transformerRef = useRef<PIXI.Container>(null);
  const alphaRef = useRef<number>(props.initialAlpha);

  //// Context
  const { tl } = useContext(GsapPixieContext);

  // use props with useMemo
  const {
    uniqueId,
    startAt,
    endAt,
    initialAlpha,
    transformation: { x, y, width, height, colorCorrection, animation, effect },
    applyTransformer,
    disabled,
    pointerdown,
    pointerout,
    pointerover,
  } = props;

  console.log("all abstract props", props);

  // color corrections
  const {
    contrast = 1,
    saturation = 1,
    brightness = 1,
    alpha = 1,
    blurRadius = 0,
  } = colorCorrection || {};

  /** adjustment filter */
  const adjustments = {
    ...(brightness > 1 && { brightness: brightness }),
    ...(contrast > 1 && { contrast: contrast }),
    ...(saturation > 1 && { saturation: saturation }),
    ...(alpha !== 0 && { alpha: alpha }),
  };

  // Write use effects or impative code here
  React.useImperativeHandle(
    ref,
    () => ({
      getIsTransformerDragging: () => {
        return isTransformerDragging;
      },
      getIsMouseOverTransformer: () => {
        return isMouseOverTransformer;
      },
    }),
    [isTransformerDragging, isMouseOverTransformer]
  );

  React.useEffect(() => {
    if (containerRef.current) {
      setIsMounted(true);
    }
  }, []);

  const gsapOnAlphaStart = (params: { alpha: number }) => {
    alphaRef.current = params.alpha;
  };

  const gsapOnAlphaComplete = (params: { alpha: number }) => {
    alphaRef.current = params.alpha;
  };

  const gsapOnAlphaReverseComplete = () => {
    console.log("reverse complete");
    alphaRef.current = initialAlpha;
  };

  React.useEffect(() => {
    let ctx = gsap.context(() => {});
    if (containerRef.current && tl.current) {
      const data = {
        duration: Number(endAt) - Number(startAt),
      };

      const alphaStartParams = {
        onStart: gsapOnAlphaStart,
        onReverseComplete: gsapOnAlphaReverseComplete,
        onStartParams: [{ alpha: 1 }],
      };

      const alphaCompleteParams = {
        onComplete: gsapOnAlphaComplete,
        onCompleteParams: [{ alpha: 0 }],
      };

      const ease = getAnimByName(animation || "None");
      ctx = gsap.context(() => {
        // initial alpha and duration of timeline setup
        tl.current
          .to(
            containerRef.current,
            { alpha: 1, duration: 0.1, ...alphaStartParams },
            startAt
          )
          .from(containerRef.current, { ...data }, startAt)
          .to(
            containerRef.current,
            { alpha: 0, duration: 0.1, ...alphaCompleteParams },
            Number(endAt) - 0.09
          );

        // add ease animation effects
        if (!isEmpty(ease.from)) {
          tl.current.from(containerRef.current, { ...ease.from }, startAt);
        } else if (!isEmpty(ease.to)) {
          tl.current.to(containerRef.current, { ...ease.to }, startAt);
        } else if (!isEmpty(ease.fromTo)) {
          tl.current.fromTo(
            containerRef.current,
            ease.fromTo?.from,
            ease.fromTo?.to,
            startAt
          );
        } else {
        }
      });
    }
    return () => ctx.revert(); // cleanup!
  }, [animation, startAt, endAt]);

  /** handle on tranformer onchange */
  const handleOnTransformChange = React.useCallback(() => {
    setIsTransformerDragging(true);
  }, []);

  // transformer to handle sprite transformation
  const handleOnTransformEnd = React.useCallback(
    (endData: TransformationEnd) => {
      console.log("changeEnd", endData);
      if (props.onAnchorTransformationEnd) {
        console.log("running onAnchorTransformationEnd");
        props.onAnchorTransformationEnd(endData);
      }
      setIsTransformerDragging(false);
    },
    []
  );

  const Filters = withFilters(Container, {
    ...(blurRadius > 0 && { blur: PIXI.filters.BlurFilter }),
    ...(!isEmpty(adjustments) && { adjust: AdjustmentFilter }),
    matrix: PIXI.filters.ColorMatrixFilter,
  });

  const isFilterOrEffectEnabled =
    colorCorrection?.enabled || (effect && effect !== Effects.Normal);

  return (
    <Container ref={parentNode}>
      <Container
        ref={containerRef}
        alpha={alphaRef.current}
        position={[x, y]}
        pivot={[x, y]}
        width={width}
        height={height}
        {...(!disabled &&
          !isTransformerDragging && {
            interactive: true,
            buttonMode: true,
            pointerdown: pointerdown,
            pointerover: pointerover,
            pointerout: pointerout,
          })}
      >
        <Container>
          {isFilterOrEffectEnabled && (
            <Filters
              scale={1}
              blur={{ blur: blurRadius, quality: 4 }}
              adjust={adjustments}
              apply={({ matrix }: { matrix: any }) => {
                if (effect === Effects.BlackAndWhite) {
                  matrix.desaturate();
                } else if (effect === Effects.Sepia) {
                  matrix.sepia();
                } else if (effect === Effects.RetroVintage) {
                  matrix.negative();
                } else if (effect === Effects.NightVision) {
                  matrix.negative();
                } else if (effect === Effects.Normal) {
                  matrix.reset();
                }
              }}
              matrix={{
                enabled: true,
                // @ts-ignore
                matrix: CYAN,
              }}
            >
              <Container ref={imgGroupRef}>{props.children}</Container>
            </Filters>
          )}
          {!isFilterOrEffectEnabled && (
            <Container ref={imgGroupRef}>{props.children}</Container>
          )}
        </Container>
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
});

export default AbstractContainer;
// @ts-ignore
AbstractContainer.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: "AbstractContainer",
};
