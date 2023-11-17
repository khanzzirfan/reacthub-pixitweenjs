import * as React from "react";
import { useRef, useState, useContext } from "react";
import { Container, withFilters, useApp } from "@pixi/react";
import * as PIXI from "pixi.js";
import gsap from "gsap";
import { Effects } from "../types/Effects";
import PixiTransformer from "../components/PixiTransformer/PixiTransformer";
import { PixiBaseSpriteProps, ForwardedRefResponse } from "../types/BaseProps";
import { TransformationEnd } from "../types/transformation";
import useDebounce from "../hooks/useDebounce";
import {
  GsapPixieContext,
  Events,
} from "../providers/GsapPixieContextProvider";
// @ts-ignore
import isEmpty from "lodash/isEmpty";
import { useCustomEventListener } from "../events";
import {
  PixiOverlayTilingSprite,
  OverlayTypes,
} from "../hocs/OverlayTilingSprite";
import { useGsapEffect } from "../hooks/useGsapEffect";
import { Animations } from "../types/Animations";

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

interface AnimationProps {
  x: number;
  y: number;
  width: number;
  height: number;
  animation: Animations;
  maxX: number;
  maxY: number;
}

const AbstractContainer = React.forwardRef<
  ForwardedRefResponse | null,
  AbstractContainerProps
>((props, ref) => {
  //// State
  const [isMounted, setIsMounted] = React.useState(false);
  const [isTransformerDragging, setIsTransformerDragging] = useState(false);
  const [isMouseOverTransformer, setIsMouseOverTransformer] = useState(false);
  const [transforms, setTransforms] = useState<AnimationProps>(); // for transformer

  // delay the transforms;
  const debouncedTransforms = useDebounce(transforms, 300);

  //// Refs
  const containerRef = useRef<PIXI.Container>(null);
  const parentNode = useRef<PIXI.Container>(null);
  const imgGroupRef = useRef<PIXI.Container>(null);
  const transformerRef = useRef<PIXI.Container>(null);
  const animTweenRef = useRef<gsap.core.Tween>(null);
  const animContainerRef = useRef<PIXI.Container>(null);

  // //// Context
  const { tl } = useContext(GsapPixieContext);
  const app = useApp();
  const maxX = app.screen.width;
  const maxY = app.screen.height;

  // use props with useMemo
  const {
    uniqueId,
    visible,
    startAt,
    transformation: {
      x,
      y,
      width,
      height,
      scale = [1, 1],
      rotation = 0,
      effect,
      overlay,
      animation = Animations.NONE,
    },
    applyTransformer,
    disabled,
    pointerdown,
    pointerout,
    pointerover,
    isText,
    isDragging,
    isGif,
    onDoubleClick,
    isTextEditMode,
  } = props;

  const anim = useGsapEffect();

  /** Adding custom event listners */
  /** Event Listeneres */
  useCustomEventListener(Events.COMPLETE, () => {
    if (containerRef.current) {
      // alphaRef.current = initialAlpha;
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

  React.useEffect(() => {
    setTransforms({
      x,
      y,
      width,
      height,
      animation,
      maxX,
      maxY,
    });
  }, [animation, x, y, width, height, maxX, maxY]);

  // setup animation to run at eeffect
  React.useEffect(() => {
    if (!parentNode.current) return;
    const ctx = gsap.context(() => {
      if (tl.current && debouncedTransforms) {
        const { x, y, animation, maxX, maxY } = debouncedTransforms || {};
        const currentProgress = tl.current.progress();
        const animTween: gsap.core.Timeline = anim.updateEffect(
          containerRef.current,
          animation,
          {
            immediateRender: false,
            x,
            y,
            overwrite: true,
            maxX,
            maxY,
          }
        );
        if (animTweenRef.current) {
          tl.current.remove(animTweenRef.current);
          animTweenRef.current.progress(0).kill();
        }
        // check in place to run the transition anim only if the timeline already in progress
        if (currentProgress > 0.1) {
          animTween.eventCallback("onComplete", () => {
            animTween.remove("onComplete");
            tl.current.add(animTween, startAt);
            //@ts-ignore
            animTweenRef.current = animTween;
          });
          animTween.play();
        } else {
          animTween.progress(1);
          tl.current.add(animTween, startAt);
          //@ts-ignore
          animTweenRef.current = animTween;
        }
      } else {
        if (animTweenRef.current) animTweenRef.current.progress(0).kill();
      }
    }, parentNode.current);
    // cleanup
    return () => {
      ctx.revert();
    };
  }, [startAt, debouncedTransforms]);

  const handleMouseOverTransformer = React.useCallback(() => {
    setIsMouseOverTransformer(true);
    if (pointerover) pointerover();
  }, []);

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

  // condition to disable pointer events when disabled or isDragging or alpha = 0

  return (
    <Container ref={parentNode}>
      <Container
        ref={containerRef}
        position={[x, y]}
        pivot={[x, y]}
        width={width}
        height={height}
        scale={scale}
        rotation={rotation}
        {...(!disabled &&
          visible &&
          !isTransformerDragging &&
          !isDragging && {
            interactive: true,
            buttonMode: true,
            pointerdown: pointerdown,
            pointerover: pointerover,
            pointerout: pointerout,
          })}
      >
        <Container ref={animContainerRef}>
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
      </Container>
      {applyTransformer && visible && !isTextEditMode && (
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
// AbstractContainer.whyDidYouRender = {
//   logOnDifferentValues: true,
//   customName: "AbstractContainer",
// };
