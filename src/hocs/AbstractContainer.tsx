import * as React from "react";
import { useContext, useRef, useState } from "react";
import gsap from "gsap";
import { Container, withFilters } from "@pixi/react";
import * as PIXI from "pixi.js";
import { Effects } from "../types/Effects";
// import pixiTransfomer from "../utils/PixiTransformer";
import PixiTransformer from "../components/PixiTransformer/PixiTransformer";
import { PixiBaseSpriteProps, ForwardedRefResponse } from "../types/BaseProps";
import { TransformationEnd } from "../types/transformation";
import {
  GsapPixieContext,
  Events,
} from "../providers/GsapPixieContextProvider";
import { getAnimByName } from "../utils/GsapAnim";
// @ts-ignore
import isEmpty from "lodash/isEmpty";
import { useCustomEventListener } from "../events";
import {
  PixiOverlayTilingSprite,
  OverlayTypes,
} from "../hocs/OverlayTilingSprite";
/** CYAN Filters */
const CYAN = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];

interface AbstractContainerProps extends PixiBaseSpriteProps {
  ignoreTlForVideo?: boolean;
  isText?: boolean;
  isDragging?: boolean;
  isGif?: boolean;
  onDoubleClick?: () => void;
  isTextEditMode?: boolean;
}

const AbstractContainer = React.forwardRef<
  ForwardedRefResponse | null,
  AbstractContainerProps
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
    transformation: {
      x,
      y,
      width,
      height,
      scale = [1, 1],
      rotation = 0,
      animation,
      effect,
      overlay,
    },
    applyTransformer,
    disabled,
    ignoreTlForVideo,
    pointerdown,
    pointerout,
    pointerover,
    isText,
    isDragging,
    isGif,
    onDoubleClick,
    isTextEditMode,
  } = props;

  // log all props
  // color corrections

  /** dot config */
  // const dotConfig = {
  //   // scale: 1,
  //   // angle: 5,
  //   // distance: 5,
  // };

  /**Apply sharpness */

  /** Adding custom event listners */
  /** Event Listeneres */
  useCustomEventListener(Events.COMPLETE, () => {
    if (containerRef.current) {
      alphaRef.current = initialAlpha;
      // setPixiAlpha(initialAlpha);
    }
  });

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

  const handleMouseOverTransformer = React.useCallback(() => {
    setIsMouseOverTransformer(true);
    if (pointerover) pointerover();
  }, []);

  const gsapOnAlphaReverseComplete = () => {
    alphaRef.current = initialAlpha;
    /// setPixiAlpha(initialAlpha);
  };

  const gsapOnAlphaStart = (params: { alpha: number }) => {
    alphaRef.current = params.alpha;
    /// setPixiAlpha(params.alpha);
  };

  const gsapOnAlphaComplete = (params: { alpha: number }) => {
    alphaRef.current = params.alpha;
    ///setPixiAlpha(params.alpha);
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
      console.log("easeing", ease);
      ctx = gsap.context(() => {
        // initial alpha and duration of timeline setup

        tl.current
          .to(
            containerRef.current,
            { overwrite: "auto", alpha: 1, duration: 0.1, ...alphaStartParams },
            startAt
          )
          .from(containerRef.current, { overwrite: "auto", ...data }, startAt)
          .to(
            containerRef.current,
            {
              overwrite: "auto",
              alpha: 0,
              duration: 0.1,
              ...alphaCompleteParams,
            },
            Number(endAt) - 0.09
          ); // reset alpha on timeline reverse or complete.

        // // add ease animation effects
        // if (!isEmpty(ease.from)) {
        //   tl.current
        //     .from(containerRef.current, { ...ease.from }, startAt)
        //     .to(
        //       containerRef.current,
        //       { alpha: 1, duration: 0.1, ...alphaStartParams },
        //       startAt
        //     )
        //     .to(
        //       containerRef.current,
        //       { alpha: 0, duration: 0.1, ...alphaCompleteParams },
        //       Number(endAt) - 0.09
        //     );
        // } else if (!isEmpty(ease.to)) {
        //   tl.current
        //     .to(
        //       containerRef.current,
        //       { alpha: 1, duration: 0.1, ...ease.to, ...alphaStartParams },
        //       startAt
        //     )
        //     .to(
        //       containerRef.current,
        //       { alpha: 0, duration: 0.1, ...alphaCompleteParams },
        //       Number(endAt) - 0.09
        //     );
        // } else if (!isEmpty(ease.fromTo)) {
        //   tl.current
        //     .fromTo(
        //       containerRef.current,
        //       ease.fromTo?.from,
        //       { ...ease.fromTo?.to, ...alphaStartParams },
        //       startAt
        //     )
        //     .to(
        //       containerRef.current,
        //       { alpha: 0, duration: 0.1, ...alphaCompleteParams },
        //       Number(endAt) - 0.09
        //     );
        // }
      });
    }
    return () => {
      if (tl.current) {
        tl.current.progress(0).kill();
        gsap.killTweensOf(tl.current);
      }
      ctx.revert(); // cleanup!
    };
  }, [animation, startAt, endAt, ignoreTlForVideo]);

  /** handle on tranformer onchange */
  const handleOnTransformChange = React.useCallback(() => {
    setIsTransformerDragging(true);
  }, []);

  // transformer to handle sprite transformation
  const handleOnTransformEnd = React.useCallback(
    (endData: TransformationEnd) => {
      if (props.onAnchorTransformationEnd) {
        props.onAnchorTransformationEnd(endData);
      }
      setIsTransformerDragging(false);
    },
    []
  );

  const Filters = withFilters(Container, {
    matrix: PIXI.filters.ColorMatrixFilter,
  });

  const alpha = alphaRef.current;
  // condition to disable pointer events when disabled or isDragging or alpha = 0

  return (
    <Container ref={parentNode}>
      <Container
        ref={containerRef}
        alpha={alpha}
        position={[x, y]}
        pivot={[x, y]}
        width={width}
        height={height}
        scale={scale}
        rotation={rotation}
        {...(!disabled &&
          !isTransformerDragging &&
          !isDragging &&
          alpha > 0 && {
            interactive: true,
            buttonMode: true,
            pointerdown: pointerdown,
            pointerover: pointerover,
            pointerout: pointerout,
          })}
      >
        {!isGif && (
          <Filters
            scale={1}
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
        {isGif && <Container ref={imgGroupRef}>{props.children}</Container>}
        {!isEmpty(overlay) &&
          overlay !== OverlayTypes.NONE &&
          overlay !== OverlayTypes.NORMAL && (
            <PixiOverlayTilingSprite
              overlay={overlay!}
              width={width}
              height={height}
              x={x}
              y={y}
            />
          )}
      </Container>
      {applyTransformer && !isTextEditMode && (
        <PixiTransformer
          pixiTransformerRef={transformerRef}
          imageRef={containerRef}
          isMounted={isMounted}
          transformCommit={handleOnTransformEnd}
          transformChange={handleOnTransformChange}
          mouseoverEvent={handleMouseOverTransformer}
          uniqueId={uniqueId}
          isText={isText}
          onDoubleClick={onDoubleClick}
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
