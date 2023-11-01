import * as React from "react";
import { useContext, useEffect, useRef, useState } from "react";
// @ts-ignore
import map from "lodash/map";
import {
  Events,
  GsapPixieContext,
} from "../../providers/GsapPixieContextProvider";
import { Container } from "@pixi/react";
import * as PIXI from "pixi.js";
import gsap from "gsap";
import { useWorkerParser, usePlayerState } from "@react-gifs/tools";
import AbstractContainer from "../../hocs/AbstractContainer";
import { withFiltersHook } from "../../hooks/withFiltersHook";

// @ts-ignore
import isEmpty from "lodash/isEmpty";
import { PixiAnimatedSprite } from "../PixiAnimatedSprite";
import { useCustomEventListener } from "../../events";
import {
  PixiBaseSpriteProps,
  ForwardedRefResponse,
} from "../../types/BaseProps";
import { debounce } from "lodash";

export interface PixiGifSpriteProps extends PixiBaseSpriteProps {
  uniqueId: string;
  src: string;
  startAt: number;
  endAt: number;
  frameStartAt: number;
  frameEndAt: number;
  locked: boolean;
  loop: boolean;
}

interface GifState {
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

const initialState: GifState = {
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

/**
 * PixiGifSprite Component is used to render gif image
 * @param props Gif Sprite props
 * @returns
 */
const PixiGifSprite = React.forwardRef<
  ForwardedRefResponse | null,
  PixiGifSpriteProps
>((props, ref) => {
  //// State
  const [gifFrame, setGifFrame] = React.useState<PIXI.Texture[]>([]);
  const [, setGifDuration] = React.useState<number>(0);
  const [gifFrameObject, setGifFrameObject] = React.useState<
    PIXI.FrameObject[]
  >([]);
  const [, setIsComplete] = useState<boolean>(false);

  const [gifState, update] = usePlayerState({ autoPlay: false });

  //// Refs
  const animatedSpriteRef = useRef<PIXI.AnimatedSprite>(null);
  const containerRef = useRef<PIXI.Container>(null);
  const gifStateRef = useRef<GifState>(initialState);
  const tweenRef = useRef<gsap.core.Tween>();

  //// Context
  const { tl, dragModeRef } = useContext(GsapPixieContext);

  /// 1001
  const { frames: gifFrames, delays: gifDelays } = gifState;

  const {
    src,
    startAt,
    endAt,
    frameStartAt,
    frameEndAt,
    loop,
    visible,
    disabled,
    transformation: { width = 0, height = 0, x, y, colorCorrection = {} },
    pointerdown,
  } = props;

  /// hooks
  const {
    temperatureFilter,
    sharpnessFilter,
    hueFilter,
    blurFilter,
    adjustmentFilter,
    vignetteFilter,
    noiseFilter,
  } = withFiltersHook(colorCorrection);

  const { blurRadius = 0, vignette = 0, noise = 0 } = colorCorrection;

  const frameDelay = 0.1;
  //  load and parse gif
  useWorkerParser(src, update);

  // updates current index
  // usePlayback(gifState, () => update(({ index }) => ({ index: index + 1 })));

  /** Adding custom event listners */
  /** Event Listeneres */
  useCustomEventListener(Events.PAUSE, () => {
    if (animatedSpriteRef.current) {
      animatedSpriteRef.current.stop();
      gifStateRef.current.isPlaying = false;
    }
  });

  useCustomEventListener(Events.SEEK_END, () => {
    if (animatedSpriteRef.current) {
      animatedSpriteRef.current.stop();
      gifStateRef.current.isPlaying = false;
    }
  });

  useCustomEventListener(Events.SCRUBBER_CLICKED, () => {
    if (animatedSpriteRef.current) {
      animatedSpriteRef.current.stop();
      gifStateRef.current.isPlaying = false;
    }
  });

  // /** stop video playing when gsapDragging is true */
  React.useEffect(() => {
    if (gifStateRef.current && animatedSpriteRef.current) {
      if (dragModeRef.current) {
        animatedSpriteRef.current.stop();
        gifStateRef.current.isPlaying = false;
        gifStateRef.current.isDragging = true;
      } else {
        gifStateRef.current.isDragging = false;
      }
    }
  }, [dragModeRef]);

  React.useEffect(() => {
    if (!isEmpty(gifFrames)) {
      // app.stage.addChild(frames);
      /// load textues
      const texturedFrames = map(gifFrames, (eachFrame: ImageData) => {
        const { data, width, height } = eachFrame;
        const dataEx = new Uint8Array(data);
        return PIXI.Texture.fromBuffer(dataEx, width, height);
      });

      const frameObj = texturedFrames.map(
        (eachFrame: PIXI.Texture, index: number) => {
          return {
            texture: eachFrame,
            time: gifDelays[index],
          };
        }
      );
      setGifFrame(texturedFrames);
      setGifFrameObject(frameObj);
      let duration = 0;
      gifDelays.forEach((delay) => {
        duration += delay * 10;
      });
      setGifDuration(duration);
      gifStateRef.current.totalDuration = duration;
      gifStateRef.current.totalFrames = gifFrames.length;
    }
  }, [gifFrames, gifDelays]);

  const debGifStart = debounce((time: number) => {
    if (animatedSpriteRef.current) {
      let frameNumber = time === 0 ? 0 : time / frameDelay;
      // if frame number is nan then set it to 0
      frameNumber = isNaN(frameNumber) ? 0 : frameNumber;
      const lastFrame = gifStateRef.current.totalFrames;
      frameNumber = frameNumber > lastFrame ? lastFrame : frameNumber;
      if (frameNumber >= lastFrame) {
        animatedSpriteRef.current.gotoAndStop(0);
        gifStateRef.current.isPlaying = false;
      } else {
        animatedSpriteRef.current.gotoAndPlay(frameNumber || 0);
        gifStateRef.current.isPlaying = true;
      }
    }
  }, 20);

  const debGifStop = debounce(() => {
    if (animatedSpriteRef.current) {
      animatedSpriteRef.current.stop();
      gifStateRef.current.isPlaying = false;
    }
  }, 50);

  /** Gsap Start and Stop Events */
  const gsapOnStart = (startAt: number) => {
    if (animatedSpriteRef.current) {
      let frameNumber = startAt === 0 ? 0 : startAt / frameDelay;
      frameNumber = isNaN(frameNumber) ? 0 : frameNumber;
      const lastFrame = gifStateRef.current.totalFrames;
      frameNumber = frameNumber > lastFrame ? lastFrame : frameNumber;
      if (frameNumber >= lastFrame) {
        animatedSpriteRef.current.gotoAndStop(0);
        gifStateRef.current.isPlaying = false;
      } else {
        animatedSpriteRef.current.gotoAndPlay(frameNumber || 0);
        gifStateRef.current.isPlaying = true;
      }
    }
  };

  const gsapOnComplete = () => {
    if (animatedSpriteRef.current) {
      animatedSpriteRef.current.stop();
      // animatedSpriteRef.current.gotoAndStop(0);
      gifStateRef.current.isPlaying = false;
    }
  };

  const onInterrupt = () => {
    if (animatedSpriteRef.current) {
      animatedSpriteRef.current.stop();
      gifStateRef.current.isPlaying = false;
    }
  };

  const onUpdate = (startAt: number) => {
    // @ts-ignore
    const currentTweenTime = startAt + tweenRef.current?.time();
    if (animatedSpriteRef.current && dragModeRef.current) {
      debGifStart(currentTweenTime);
      debGifStop();
      gifStateRef.current.isPlaying = false;
    } else if (
      tweenRef.current &&
      animatedSpriteRef.current &&
      !gifStateRef.current.isPlaying &&
      tweenRef.current.isActive() &&
      tl.current.isActive()
    ) {
      debGifStart(currentTweenTime);
      gifStateRef.current.isPlaying = true;
    }
  };

  const handleComplete = () => {
    setIsComplete(true);
    // if (onComplete) {
    //   onComplete();
    // }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {});
    if (containerRef.current && tl.current) {
      const data = {
        duration: Number(frameEndAt) - Number(frameStartAt),
        onStart: gsapOnStart,
        onComplete: gsapOnComplete,
        onStartParams: [frameStartAt, frameEndAt],
        onCompleteParams: [],
        onInterrupt: onInterrupt,
        onUpdate: onUpdate,
        onUpdateParams: [frameStartAt, frameEndAt],
      };

      // kill tween before adding it.
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
      ctx = gsap.context(() => {
        tweenRef.current = gsap.from(
          containerRef.current,
          // @ts-ignore
          data,
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
  }, [startAt, endAt, frameStartAt, frameEndAt]);

  console.log("gif render", animatedSpriteRef.current?.currentFrame);

  return (
    <AbstractContainer
      {...props}
      ref={ref}
      ignoreTlForVideo={true}
      isGif={true}
    >
      <Container ref={containerRef}>
        {gifFrame && gifFrame.length > 0 && (
          <PixiAnimatedSprite
            x={x}
            y={y}
            width={width}
            height={height}
            animationSpeed={1}
            alpha={visible ? 1 : 0}
            loop={loop}
            // isPlaying={!!tlPlay}
            // @ts-ignore
            textures={gifFrameObject}
            onComplete={handleComplete}
            anchor={0.5}
            forwardRef={animatedSpriteRef}
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

export default PixiGifSprite;

// @ts-ignore
PixiGifSprite.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: "PixiGifSprite",
};
