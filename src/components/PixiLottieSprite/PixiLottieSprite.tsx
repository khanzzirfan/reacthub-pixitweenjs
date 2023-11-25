import * as React from "react";
import { useContext, useRef } from "react";
import {
  GsapPixieContext,
  Events,
} from "../../providers/GsapPixieContextProvider";
import { useCustomEventListener } from "../../events";
// @ts-ignore
import PropTypes from "prop-types";
import { Sprite, Container } from "@pixi/react";
import * as PIXI from "pixi.js";
import gsap from "gsap";
import AbstractContainer from "../../hocs/AbstractContainer";
// @ts-ignore
import isEmpty from "lodash/isEmpty";
// @ts-ignore
import debounce from "lodash/debounce";
import {
  PixiBaseSpriteProps,
  ForwardedRefResponse,
} from "../../types/BaseProps";
import { withFiltersHook } from "../../hooks/withFiltersHook";
import useDebouncedPointerEvents from "../../hooks/useDebouncePointerEvents";
import lottie, { AnimationItem } from "lottie-web";

export interface PixiLottieSpriteProps extends PixiBaseSpriteProps {
  uniqueId: string;
  src: string;
  startAt: number;
  endAt: number;
  frameStartAt: number;
  frameEndAt: number;
  locked: boolean;
  loop: boolean;
}

interface LottieState {
  isPlaying: boolean;
  progress: number;
  speed: number;
  isMuted: boolean;
  isWaiting: boolean;
  loaded: boolean;
  size: { width: number; height: number };
  isDragging: boolean;
  totalFrames: number;
  totalDuration: number;
}

const initialState: LottieState = {
  isPlaying: false,
  progress: 0,
  speed: 1,
  isMuted: false,
  isWaiting: false,
  loaded: false,
  size: { width: 50, height: 50 },
  isDragging: false,
  totalFrames: 0,
  totalDuration: 0,
};

const PixiLottieSprite = React.forwardRef<
  ForwardedRefResponse | null,
  PixiLottieSpriteProps
>((props, ref) => {
  const [lottieDuration, setLottieDuration] = React.useState<number>(0);
  const [videoLoaded, setVideoLoaded] = React.useState<boolean>(false);
  const imageRef = React.useRef<PIXI.AnimatedSprite>(null);
  const containerRef = React.useRef<PIXI.Container>(null);
  const lottieContainerRef = React.useRef<HTMLCanvasElement>();
  const lottieRef = React.useRef<AnimationItem>();
  const tweenRef = useRef<gsap.core.Timeline>();
  const lottieStateRef = useRef<LottieState>(initialState);

  const videoTextureRef = React.useRef<PIXI.Texture<PIXI.Resource>>();
  const bodyRef = useRef<HTMLElement>(document.body);

  const {
    uniqueId,
    src,
    startAt,
    endAt,
    frameStartAt,
    frameEndAt,
    visible,
    disabled,
    loop = false,
    transformation: { x, y, width, height, colorCorrection = {} },
    pointerdown = () => void 0,
    pointerout = () => void 0,
    pointerover = () => void 0,
  } = props;

  //// Context
  const { tl } = useContext(GsapPixieContext);

  /** Adding custom event listners */
  /** Event Listeneres */
  useCustomEventListener(Events.PAUSE, () => {
    if (lottieRef.current) {
      lottieRef.current.pause();
    }
  });

  /// hooks;
  const { onPointerDown, onPointerOut, onPointerOver } =
    useDebouncedPointerEvents(pointerover, pointerdown, pointerout, 1);

  const { blurRadius = 0, vignette = 0, noise = 0 } = colorCorrection;
  // use with filters hoooks to get the filters
  const {
    temperatureFilter,
    sharpnessFilter,
    hueFilter,
    blurFilter,
    adjustmentFilter,
    vignetteFilter,
    noiseFilter,
  } = withFiltersHook(colorCorrection);

  React.useLayoutEffect(() => {
    lottieContainerRef.current = document.createElement("canvas");
    lottieContainerRef.current.setAttribute("id", "lottieContainersvg");
    lottieContainerRef.current.setAttribute("id", `${uniqueId}lottieContainer`);
    // set width and height;
    lottieContainerRef.current.setAttribute("width", `${width}`);
    lottieContainerRef.current.setAttribute("height", `${height}`);
    const body = bodyRef.current;
    // Append the new child to the body
    body.appendChild(lottieContainerRef.current);

    // Cleanup: Remove the new child when the component is unmounted
    return () => {
      if (lottieContainerRef.current)
        body.removeChild(lottieContainerRef.current);
    };
  }, []);

  React.useEffect(() => {
    // async function to load animation
    async function loadAnimation() {
      if (lottieRef.current) {
        lottieRef.current.destroy();
      }
      // remove display none from the lottie container ref
      lottieContainerRef.current!.removeAttribute("style");
      lottieRef.current = lottie.loadAnimation({
        container:
          lottieContainerRef.current! ||
          (document.getElementById("lottieroot") as HTMLElement),
        renderer: "canvas",
        loop: false,
        autoplay: false,
        path: src,
        rendererSettings: {
          context: lottieContainerRef.current!.getContext("2d")!, // the canvas context
          clearCanvas: true,
          progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
          preserveAspectRatio: "xMaxYMax meet",
        },
      });

      lottieRef.current.addEventListener("data_ready", () => {
        if (lottieContainerRef.current) {
          // style attrib hide
          lottieContainerRef.current.setAttribute("style", "display:none");
          /// console.log("lotttieREf", lottieRef.current);
        }
        if (lottieRef.current && lottieRef.current.renderer.canvasContext) {
          // get total frames
          const totalFrames = lottieRef.current.totalFrames;
          lottieStateRef.current.totalFrames = totalFrames;
          /// console.log("lottier duration", lottieRef.current.getDuration);
          // get total duration
          const totalDuration = lottieRef.current.getDuration();
          lottieStateRef.current.totalDuration = totalDuration;
          const currentCanvas = lottieRef.current.renderer.canvasContext.canvas;
          const texture = PIXI.Texture.from(currentCanvas);
          videoTextureRef.current = texture;
          setVideoLoaded(true);
          setLottieDuration(totalDuration);
        }
      });

      lottieRef.current.addEventListener("loaded_images", () => {});
      lottieRef.current.addEventListener("complete", () => {});
      lottieRef.current.addEventListener("loopComplete", () => {});
      lottieRef.current.addEventListener("enterFrame", () => {});
      lottieRef.current.addEventListener("config_ready", () => {
        console.log("config_ready", lottieRef.current);
      });
      lottieRef.current.addEventListener("error", (err) => {
        console.log("error", err);
      });
    }

    loadAnimation();

    return () => {
      if (lottieRef.current) {
        lottieRef.current.removeEventListener("complete");
        lottieRef.current.removeEventListener("config_ready");
        lottieRef.current.removeEventListener("enterFrame");
        lottieRef.current.removeEventListener("loaded_images");
        lottieRef.current.removeEventListener("loopComplete");
        lottieRef.current.removeEventListener("data_ready");
        lottieRef.current.removeEventListener("error");
        lottieRef.current.destroy();
      }
    };
  }, [src, uniqueId]);

  React.useEffect(() => {
    if (videoTextureRef.current) videoTextureRef.current.update();
    return () => {};
  }, [videoLoaded]);

  const onUpdate = (wrap: any) => {
    if (lottieRef.current && imageRef.current && tweenRef.current) {
      const currentTime = wrap(tweenRef.current.time());
      // const frameDelay = 0.1;
      const lottieFrame =
        (currentTime / tweenRef.current.duration()) *
        lottieStateRef.current.totalFrames;
      // let frameNumber = currentTime === 0 ? 0 : currentTime / frameDelay;
      // frameNumber = isNaN(frameNumber) ? 0 : frameNumber;
      const lastFrame = lottieStateRef.current.totalFrames;
      // frameNumber = frameNumber > lastFrame ? lastFrame : frameNumber;
      let frameNumber = lottieFrame;
      frameNumber = Math.round(Math.floor(frameNumber));
      /// console.log("frameNumber", frameNumber);
      if (frameNumber >= lastFrame) {
        lottieRef.current.goToAndStop(0, true);
        if (videoTextureRef.current) videoTextureRef.current.update();
        lottieStateRef.current.isPlaying = false;
      } else {
        lottieRef.current.goToAndStop(frameNumber, true);
        if (videoTextureRef.current) videoTextureRef.current.update();
        lottieStateRef.current.isPlaying = true;
      }
    }
  };

  // Setup GSAP Animation
  React.useEffect(() => {
    let ctx = gsap.context(() => {});
    if (containerRef.current && tl.current && lottieDuration > 0) {
      const totalDuration = Number(endAt) - Number(startAt);
      if (tweenRef.current) {
        tweenRef.current.kill();
        tl.current.remove(tweenRef.current);
      }
      // kill tween before adding it.
      ctx = gsap.context(() => {
        const wrap = gsap.utils.wrap(0, lottieDuration);
        tweenRef.current = gsap.timeline({}).to(
          containerRef.current,
          {
            duration: Number(totalDuration),
            onUpdate: onUpdate,
            onUpdateParams: [wrap, frameStartAt, frameEndAt],
          },
          frameStartAt
        );
        tl.current.add(tweenRef.current, startAt);
      });
    }
    return () => {
      if (tweenRef.current) {
        tweenRef.current.kill();
        gsap.killTweensOf(tweenRef.current);
      }
      ctx.revert(); // cleanup!
    };
  }, [
    startAt,
    endAt,
    frameStartAt,
    frameEndAt,
    uniqueId,
    lottieDuration,
    loop,
  ]);

  return (
    <AbstractContainer
      {...props}
      ref={ref}
      ignoreTlForVideo={true}
      pointerdown={onPointerDown}
      pointerover={onPointerOver}
      pointerout={onPointerOut}
    >
      <Container ref={containerRef}>
        {videoTextureRef.current && (
          <Sprite
            texture={videoTextureRef.current}
            width={width}
            height={height}
            anchor={0.5}
            x={x}
            y={y}
            ref={imageRef}
            alpha={visible ? 1 : 0}
            {...(!disabled &&
              visible && { interactive: true, pointerdown: pointerdown })}
            filters={[
              temperatureFilter,
              sharpnessFilter,
              hueFilter,
              adjustmentFilter,
              // conditionally add blur filter
              ...(blurRadius > 0 ? [blurFilter] : []),
              // conditionally add vignette filter
              ...(vignette > 0 ? [vignetteFilter] : []),
              // conditionally add noise filter
              ...(noise > 0 ? [noiseFilter] : []),
            ]}
          />
        )}
      </Container>
    </AbstractContainer>
  );
});

export default PixiLottieSprite;

// @ts-ignore
PixiLottieSprite.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: "PixiLottieSprite",
};
