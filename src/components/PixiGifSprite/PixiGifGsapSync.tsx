import * as React from "react";
import { useContext, useEffect, useRef, useState } from "react";
// @ts-ignore
import map from "lodash/map";
import { GsapPixieContext } from "../../providers/GsapPixieContextProvider";
import { Container } from "@pixi/react";
import * as PIXI from "pixi.js";
import gsap from "gsap";
import { useWorkerParser, usePlayerState } from "@react-gifs/tools";
import AbstractContainer from "../../hocs/AbstractContainer";
import { withFiltersHook } from "../../hooks/withFiltersHook";
// @ts-ignore
import isEmpty from "lodash/isEmpty";
import { PixiAnimatedSprite } from "../PixiAnimatedSprite";
import {
  PixiBaseSpriteProps,
  ForwardedRefResponse,
} from "../../types/BaseProps";

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
  currentFrame: number;
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
  currentFrame: 0,
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
  const [gifDuration, setGifDuration] = React.useState<number>(0);
  const [gifFrameObject, setGifFrameObject] = React.useState<
    PIXI.FrameObject[]
  >([]);
  const [, setIsComplete] = useState<boolean>(false);

  //// Refs
  const animatedSpriteRef = useRef<PIXI.AnimatedSprite>(null);
  const containerRef = useRef<PIXI.Container>(null);
  const gifStateRef = useRef<GifState>(initialState);
  const tweenRef = useRef<gsap.core.Timeline>();

  const [gifState, update] = usePlayerState({ autoPlay: false });

  //// Context
  const { tl } = useContext(GsapPixieContext);

  const {
    src,
    uniqueId,
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

  // console.log("gifFrameV1 " + uniqueId + "", gifFrames);
  /// 1001
  const { frames: gifFrames, delays: gifDelays } = gifState;
  //  load and parse gif
  useWorkerParser(src, update);

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
      setGifFrameObject(frameObj);
      let duration = 0;
      gifDelays.forEach((delay) => {
        duration += delay;
      });
      setGifDuration(duration / 1000);
      gifStateRef.current.totalDuration = duration;
      gifStateRef.current.totalFrames = gifFrames.length;
    }
  }, [uniqueId, gifFrames, gifDelays]);

  const onInterrupt = () => {
    if (animatedSpriteRef.current) {
      animatedSpriteRef.current.stop();
      gifStateRef.current.isPlaying = false;
    }
  };

  const onUpdate = () => {
    if (animatedSpriteRef.current && tweenRef.current) {
      const currentTime = tweenRef.current.time();
      let frameNumber = currentTime === 0 ? 0 : currentTime / frameDelay;
      frameNumber = isNaN(frameNumber) ? 0 : frameNumber;
      const lastFrame = gifStateRef.current.totalFrames;
      frameNumber = frameNumber > lastFrame ? lastFrame : frameNumber;
      frameNumber = Math.round(frameNumber);
      if (frameNumber >= lastFrame) {
        animatedSpriteRef.current.gotoAndStop(0);
        gifStateRef.current.isPlaying = false;
      } else {
        animatedSpriteRef.current.currentFrame = frameNumber;
        // animatedSpriteRef.current.gotoAndPlay(frameNumber || 0);
        gifStateRef.current.isPlaying = true;
      }
    }
  };

  const handleComplete = () => {
    setIsComplete(true);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {});
    if (containerRef.current && tl.current && gifDuration > 0) {
      const data = {
        duration: Number(gifDuration),
        onInterrupt: onInterrupt,
        onUpdate: onUpdate,
        onUpdateParams: [frameStartAt, frameEndAt],
      };
      const totalDuration = Number(endAt) - Number(startAt);
      const maxRepeat = Math.max(
        0,
        Math.floor(totalDuration / gifDuration) - 1
      );
      // kill tween before adding it.
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
      ctx = gsap.context(() => {
        tweenRef.current = gsap
          .timeline({ repeat: loop ? maxRepeat : 0, repeatDelay: 0 })
          .from(
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
  }, [
    src,
    uniqueId,
    startAt,
    endAt,
    frameStartAt,
    frameEndAt,
    gifDuration,
    loop,
  ]);

  return (
    <AbstractContainer
      {...props}
      ref={ref}
      ignoreTlForVideo={true}
      isGif={true}
    >
      <Container ref={containerRef}>
        {!isEmpty(gifFrameObject) && (
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
