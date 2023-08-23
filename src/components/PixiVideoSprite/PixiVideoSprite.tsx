import * as React from "react";
import { useContext, useEffect, useRef, useState } from "react";
// @ts-ignore
import PropTypes from "prop-types";
import { useCustomEventListener } from "react-custom-events";
import {
  GsapPixieContext,
  Events,
} from "../../providers/GsapPixieContextProvider";
import { Sprite, Container, useApp, withFilters } from "@pixi/react";
import { AdjustmentFilter } from "@pixi/filter-adjustment";
import * as PIXI from "pixi.js";
import gsap from "gsap";
import PixiTransformer from "../../utils/PixiTransformer";

// @ts-ignore
import isEmpty from "lodash/isEmpty";
import { getAnimByName } from "../../utils/GsapAnim";
import { TransformationEnd } from "../../types/transformation";

type PixiVideoSpriteProps = {
  uniqueId: string;
  src: string;
  startAt: number;
  endAt: number;
  frameStartAt: number;
  frameEndAt: number;
  mute: boolean;
  locked: boolean;
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

type EffectFunc = () => void;
type Deps = ReadonlyArray<unknown>;

interface VideoState {
  isPlaying: boolean;
  progress: number;
  speed: number;
  isMuted: boolean;
  isWaiting: boolean;
  loaded: boolean;
  size: { width: number; height: number };
  isDragging: boolean;
}

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

const initialState: VideoState = {
  isPlaying: false,
  progress: 0,
  speed: 1,
  isMuted: false,
  isWaiting: false,
  loaded: false,
  size: { width: 50, height: 50 },
  isDragging: false,
};

const PixiVideoSprite: React.FC<PixiVideoSpriteProps> = (props) => {
  //// State
  const [isMounted, setIsMounted] = React.useState(false);
  const [vidPlay, setVidPlay] = React.useState(false);
  const [isTransformerDragging, setIsTransformerDragging] = useState(false);
  const [isMouseOverTransformer, setIsMouseOverTransformer] = useState(false);
  const [{ isWaiting, isStalled }, setVideoState] = React.useState({
    isWaiting: false,
    isStalled: false,
  });
  const [videoTexture, setVideoTexture] =
    React.useState<PIXI.Texture<PIXI.Resource>>();
  const [isDragging, setIsDragging] = useState(false);

  console.log("PixiVideoSpriteProps", props);
  //// Refs
  const imageRef = useRef<PIXI.Sprite>(null);
  const containerRef = useRef<PIXI.Container>(null);
  const parentNode = useRef<PIXI.Container>(null);
  const imgGroupRef = useRef<PIXI.Container>(null);
  const transformerRef = useRef<PIXI.Container>(null);
  const videoElement = useRef<HTMLVideoElement>(null);
  const videoStateRef = useRef<VideoState>(initialState);

  //// Context
  const {
    tl,
    playerTimeRef,
    isDragging: gsapDragging,
    play,
  } = useContext(GsapPixieContext);

  // console log draggging
  console.log("isGsapDragging", gsapDragging);
  console.log("play", play);
  /// 1001
  // console.log("contxt Values", tl);
  const {
    uniqueId,
    mute = false,
    locked = false,
    src,
    startAt,
    endAt,
    frameStartAt,
    frameEndAt,
    initialAlpha,
    transformation: {
      x,
      y,
      width,
      height,
      scale,
      rotation,
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
    ...restProps
  } = props;

  const videoUrl = src || "";

  // color corrections
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
  } = colorCorrection || {};

  const app = useApp();

  /** adjustment filter */
  const adjustments = {
    brightness: exposure,
    contrast,
    saturation,
    alpha,
  };

  /** handle on tranformer onchange */
  const handleOnTransformChange = React.useCallback(() => {
    setIsDragging(true);
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

  /**Adding this alternative workaround to work with mov/mk4 video types */
  const videoSrcElement = React.useMemo(() => {
    const element = document.createElement("video");
    element.src = src;
    element.crossOrigin = "Anonymus";
    element.autoplay = false;
    element.currentTime = 0.0001;
    return element;
  }, [src]);

  /** Adding custom event listners */
  /** Event Listeneres */
  useCustomEventListener(Events.PAUSE, (data) => {
    console.log("pause event", data);
    if (videoElement.current) {
      const vid = videoElement.current;
      const isVidPlaying =
        vid.currentTime > 0 &&
        !vid.paused &&
        !vid.ended &&
        vid.readyState > vid.HAVE_CURRENT_DATA;
      if (isVidPlaying) videoElement.current.pause();
      videoStateRef.current.isPlaying = false;
    }
  });

  // /** stop video playing when gsapDragging is true */
  React.useEffect(() => {
    console.log("current", videoElement.current, gsapDragging);
    if (videoElement.current) {
      if (gsapDragging) {
        videoElement.current.pause();
        videoStateRef.current.isPlaying = false;
        videoStateRef.current.isDragging = true;
      } else {
        videoStateRef.current.isDragging = false;
      }
    }
  }, [gsapDragging]);

  /** Gsap Start and Stop Events */
  const gsapOnStart = (startAt: number) => {
    if (videoElement.current) {
      console.log("video gsapOnStart", playerTimeRef.current, gsapDragging);

      // check the start and end times are between the playerTimeRef.current to start video;
      if (
        playerTimeRef.current >= startAt &&
        playerTimeRef.current <= endAt &&
        !gsapDragging
      ) {
        videoElement.current.currentTime =
          Number(frameStartAt) || Number(startAt);
        videoElement.current.play();
        videoStateRef.current.isPlaying = true;
      }
    }
  };

  const gsapOnPause = (startAt: number) => {
    if (videoElement.current) {
      setVidPlay(false);

      const vid = videoElement.current;
      const isVidPlaying =
        vid.currentTime > 0 &&
        !vid.paused &&
        !vid.ended &&
        vid.readyState > vid.HAVE_CURRENT_DATA;
      ///if (!isVidPlaying) videoElement.current.play();
      if (isVidPlaying) videoElement.current.pause();
      videoStateRef.current.isPlaying = false;
    }
  };

  const gsapOnComplete = () => {
    console.log("onComplete triggered");
    if (videoElement.current) {
      setVidPlay(false);
      const vid = videoElement.current;
      const isVidPlaying =
        vid.currentTime > 0 &&
        !vid.paused &&
        !vid.ended &&
        vid.readyState > vid.HAVE_CURRENT_DATA;
      ///if (!isVidPlaying) videoElement.current.play();
      if (isVidPlaying) videoElement.current.pause();
      videoStateRef.current.isPlaying = false;
    }
  };

  const onInterrupt = () => {
    // console.log('interrupting', refId);
  };

  const onUpdate = () => {
    if (videoElement.current) {
      // console.log(
      //   "currenttime vs player reftime",
      //   videoElement.current.currentTime,
      //   playerTimeRef.current
      // );
      const absDiff = Math.abs(
        videoElement.current.currentTime - playerTimeRef.current
      );

      const vid = videoElement.current;
      const isVidPlaying =
        vid.currentTime > 0 &&
        !vid.paused &&
        !vid.ended &&
        vid.readyState > vid.HAVE_CURRENT_DATA;

      if (videoStateRef.current.isDragging) {
        console.log("video updating", playerTimeRef.current);
        videoElement.current.currentTime = playerTimeRef.current;
        videoElement.current.play();
        setTimeout(() => {
          videoStateRef.current.isPlaying = false;
          if (videoElement.current) videoElement.current.pause();
        }, 55);
        videoStateRef.current.isPlaying = false;
      } else if (!videoStateRef.current.isPlaying) {
        // if (!isVidPlaying) videoElement.current.play();
        // videoStateRef.current.isPlaying = true;
        // let the video play and update current time
        // videoElement.current.currentTime = playerTimeRef.current;
        if (!isVidPlaying) videoElement.current.play();
        videoStateRef.current.isPlaying = true;
      } else if (absDiff > 0.3) {
        // videoElement.current.currentTime = playerTimeRef.current;
        // if (!isVidPlaying) videoElement.current.play();
        // videoStateRef.current.isPlaying = true;
      }
    }
  };

  const handleComplete = () => {
    // if (onComplete) {
    //   onComplete();
    // }
    videoStateRef.current.isPlaying = false;
  };

  useEffect(() => {
    let ctx = gsap.context(() => {});
    if (containerRef.current && tl.current) {
      const data = {
        duration: Number(endAt) - Number(startAt),
        onStart: gsapOnStart,
        onComplete: gsapOnComplete,
        onStartParams: [startAt],
        onCompleteParams: [],
        onInterrupt: onInterrupt,
        onUpdate: onUpdate,
        onUpdateParams: [],
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

  React.useEffect(() => {
    if (videoElement.current) {
      videoElement.current.muted = mute;
    }
  }, [mute]);

  // stop playing video while isDragging and gsapDragging
  React.useEffect(() => {
    if (videoElement.current) {
      const vid = videoElement.current;
      const isVidPlaying =
        vid.currentTime > 0 &&
        !vid.paused &&
        !vid.ended &&
        vid.readyState > vid.HAVE_CURRENT_DATA;
      if (isVidPlaying && (isDragging || gsapDragging)) {
        videoElement.current.pause();
        videoStateRef.current.isPlaying = false;
      }
    }
  }, [isDragging, gsapDragging]);

  // load // load meta // load seek through
  React.useEffect(() => {
    const minStartAt =
      Math.round((Number(frameStartAt) + Number.EPSILON) * 100) / 100;
    const onload = function () {
      if (videoElement.current) {
        videoElement.current.currentTime = minStartAt;
      }
    };

    const onEnd = function () {
      //dispatchState({ isPlaying: false });
      if (videoElement.current) {
        const vid = videoElement.current;
        const isVidPlaying =
          vid.currentTime > 0 &&
          !vid.paused &&
          !vid.ended &&
          vid.readyState > vid.HAVE_CURRENT_DATA;

        if (isVidPlaying) {
          videoElement.current.pause();
        }
      }
      setVideoState({ isWaiting: false, isStalled: false });
    };

    const onLoadStart = function () {
      //dispatchState({ isWaiting: true, isStalled: false });
      if (videoElement.current) {
        videoElement.current.pause();
      }
      setVideoState({ isWaiting: true, isStalled: false });
    };

    const onCanPlayThrough = function () {
      //dispatchState({ isWaiting: false, isStalled: false });
      setVideoState({ isWaiting: false, isStalled: false });
    };

    const onStalled = function () {
      //dispatchState({ isStalled: true });
      setVideoState({ isWaiting: false, isStalled: true });
    };

    // create a new Sprite using the video texture (yes it's that easy)
    const stAt =
      Math.round((Number(frameStartAt) + Number.EPSILON) * 100) / 100;
    const endAt = Math.round((Number(frameEndAt) + Number.EPSILON) * 100) / 100;
    const urlWithTimestamp = `${videoUrl}#t=${stAt},${endAt}`;
    const urlWithQuery = `${videoUrl}?t=${stAt},${endAt}`;

    console.log("urlTimestap", urlWithTimestamp);
    /// const texture =
    PIXI.Texture.fromLoader(videoSrcElement, urlWithTimestamp, uniqueId, {
      pixiIdPrefix: uniqueId,
      resourceOptions: {
        autoPlay: false,
        crossorigin: "Anonymus",
        updateFPS: 30,
      },
    }).then((texture) => {
      if (!texture) return;
      // texture.baseTexture.resource.source.currentSrc = urlWithTimestamp;
      setVideoTexture(texture);
      // @ts-ignore
      console.log(texture.baseTexture.resource.source);
      // @ts-ignore
      videoElement.current = texture.baseTexture.resource.source;
      // @ts-ignore
      videoElement.current.id = uniqueId;
      // @ts-ignore
      videoElement.current.addEventListener("loadedmetadata", onload);
      // @ts-ignore
      videoElement.current.addEventListener("ended", onEnd);
      // @ts-ignore
      videoElement.current.addEventListener("loadstart", onLoadStart);
      // @ts-ignore
      videoElement.current.addEventListener("canplaythrough", onCanPlayThrough);
      // @ts-ignore
      videoElement.current.addEventListener("stalled", onStalled);
    });

    return () => {
      // @ts-ignore
      videoElement.current.removeEventListener("loadedmetadata", onload);
      // @ts-ignore
      videoElement.current.removeEventListener("ended", onEnd);
      // @ts-ignore
      videoElement.current.removeEventListener("loadstart", onLoadStart);
      // @ts-ignore
      videoElement.current.removeEventListener(
        "canplaythrough",
        onCanPlayThrough
      );
      // @ts-ignore
      videoElement.current.removeEventListener("stalled", onStalled);
    };
    // create a new Sprite using the video texture (yes it's that easy)
    // const videoSprite = new PIXI.Sprite(texture);
  }, [videoUrl, uniqueId, frameStartAt, frameEndAt, videoSrcElement]);

  return (
    // @ts-ignore
    <Container ref={parentNode}>
      {/* @ts-ignore */}
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
              {videoTexture && (
                <Sprite
                  texture={videoTexture}
                  width={width}
                  height={height}
                  anchor={0.5}
                  x={x}
                  y={y}
                  {...(!locked &&
                    !isDragging && {
                      interactive: true,
                      buttonMode: true,
                      pointerdown: pointerdown,
                      pointerover: pointerover,
                      pointerout: mouseout,
                      mousedown: mousedown,
                      mouseover: mouseover,
                      mouseout: mouseout,
                    })}
                  ref={imageRef}
                  scale={scale}
                  rotation={rotation}
                />
              )}
            </Container>
          </Filters>
        ) : (
          // @ts-ignore
          <Container ref={imgGroupRef}>
            {videoTexture && (
              <Sprite
                texture={videoTexture}
                width={width}
                height={height}
                anchor={0.5}
                x={x}
                y={y}
                {...(!locked &&
                  !isDragging && {
                    interactive: true,
                    buttonMode: true,
                    pointerdown: pointerdown,
                    pointerover: pointerover,
                    pointerout: mouseout,
                    mousedown: mousedown,
                    mouseover: mouseover,
                    mouseout: mouseout,
                  })}
                ref={imageRef}
                scale={scale}
                rotation={rotation}
              />
            )}
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

export default PixiVideoSprite;
