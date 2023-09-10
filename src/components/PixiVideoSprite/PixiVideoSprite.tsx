import * as React from "react";
import { useContext, useEffect, useRef } from "react";
// @ts-ignore
import PropTypes from "prop-types";
import { useCustomEventListener } from "../../events";
import {
  GsapPixieContext,
  Events,
} from "../../providers/GsapPixieContextProvider";
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

export interface PixiVideoSpriteProps extends PixiBaseSpriteProps {
  uniqueId: string;
  src: string;
  frameStartAt: number;
  frameEndAt: number;
  mute: boolean;
  locked: boolean;
  pointerdown?: () => void;
  pointerup?: () => void;
  mousedown?: () => void;
  mouseup?: () => void;
  pointerover?: () => void;
  mouseover?: () => void;
  mouseout?: () => void;
  applyTransformer?: boolean;
  onAnchorTransformationEnd?: (endData: any) => void;
}

interface VideoState {
  isPlaying: boolean;
  progress: number;
  speed: number;
  isMuted: boolean;
  isWaiting: boolean;
  isStalled: boolean;
  loaded: boolean;
  size: { width: number; height: number };
  isDragging: boolean;
  timeDiff: number;
}

const initialState: VideoState = {
  isPlaying: false,
  progress: 0,
  speed: 1,
  isMuted: false,
  isWaiting: false,
  isStalled: false,
  loaded: false,
  size: { width: 50, height: 50 },
  isDragging: false,
  timeDiff: 0,
};

const PixiVideoSprite = React.forwardRef<
  ForwardedRefResponse | null,
  PixiVideoSpriteProps
>((props, ref) => {
  //// State
  const [, setIsMounted] = React.useState(false);

  const [videoTexture, setVideoTexture] =
    React.useState<PIXI.Texture<PIXI.Resource>>();

  //// Refs
  const imageRef = useRef<PIXI.Sprite>(null);
  const containerRef = useRef<PIXI.Container>(null);
  const videoElement = useRef<HTMLVideoElement>(null);
  const videoStateRef = useRef<VideoState>(initialState);
  const tweenRef = useRef<gsap.core.Tween>();

  /// 1001
  // console.log("contxt Values", tl);
  const {
    uniqueId,
    mute = false,
    src,
    startAt,
    endAt,
    frameStartAt,
    frameEndAt,
    visible,
    transformation: { x, y, width, height, animation, colorCorrection = {} },
    pointerdown = () => void 0,
    pointerout = () => void 0,
    pointerover = () => void 0,
  } = props;

  //// Context
  const { tl, dragModeRef } = useContext(GsapPixieContext);

  /// hooks;
  const { onPointerDown, onPointerOut, onPointerOver } =
    useDebouncedPointerEvents(pointerover, pointerdown, pointerout, 1);

  const { blurRadius = 0 } = colorCorrection;
  // use with filters hoooks to get the filters
  const {
    temperatureFilter,
    sharpnessFilter,
    hueFilter,
    blurFilter,
    adjustmentFilter,
  } = withFiltersHook(colorCorrection);

  const videoUrl = src || "";

  /**Adding this alternative workaround to work with mov/mk4 video types */
  const videoSrcElement = React.useMemo(() => {
    const element = document.createElement("video");
    element.src = src;
    element.crossOrigin = "Anonymus";
    element.autoplay = false;
    element.currentTime = frameStartAt === 0 ? 0.001 : frameStartAt;
    return element;
  }, [src, frameStartAt]);

  /** Adding custom event listners */
  /** Event Listeneres */
  useCustomEventListener(Events.PAUSE, () => {
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

  /** Debounce pause video */
  const pauseVideoDebounce = React.useCallback(
    debounce(() => {
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
    }, 400),
    [videoElement]
  );

  // /** stop video playing when gsapDragging is true */
  React.useEffect(() => {
    if (videoElement.current) {
      if (dragModeRef.current) {
        pauseVideoDebounce();
        videoStateRef.current.isPlaying = false;
        videoStateRef.current.isDragging = true;
      } else {
        videoStateRef.current.isDragging = false;
      }
      videoElement.current.muted = mute;
    } else {
      videoStateRef.current.isDragging = false;
    }
  }, [mute, dragModeRef, pauseVideoDebounce, videoElement]);

  /** Gsap Start and Stop Events */
  const gsapOnStart = (frameStartAt: number) => {
    if (videoElement.current) {
      // console.log("video gsapOnStart", playerTimeRef.current, gsapDragging);
      // const roundedPlayerTime = Number(Math.round(playerTimeRef.current));
      // check the start and end times are between the playerTimeRef.current to start video;
      videoElement.current.currentTime = Number(frameStartAt);
      if (!dragModeRef.current) {
        const vid = videoElement.current;
        const isVidPlaying =
          vid.currentTime > 0 &&
          !vid.paused &&
          !vid.ended &&
          vid.readyState > vid.HAVE_CURRENT_DATA;
        videoElement.current.currentTime = Number(frameStartAt);
        if (
          tl.current &&
          tl.current.isActive() &&
          tweenRef.current &&
          tweenRef.current.isActive()
        ) {
          if (!isVidPlaying) videoElement.current.play();
          videoStateRef.current.isPlaying = true;
        }
      }
      videoStateRef.current.progress = 0;
    }
  };

  const gsapOnComplete = () => {
    if (videoElement.current) {
      const vid = videoElement.current;
      const isVidPlaying =
        vid.currentTime > 0 &&
        !vid.paused &&
        !vid.ended &&
        vid.readyState > vid.HAVE_CURRENT_DATA;
      ///if (!isVidPlaying) videoElement.current.play();
      if (isVidPlaying) videoElement.current.pause();
      videoStateRef.current.isPlaying = false;
      if (tweenRef.current) {
        videoStateRef.current.progress = tweenRef.current.progress();
      }
    }
  };

  const onInterrupt = () => {
    // console.log('interrupting', refId);
  };

  const onUpdate = () => {
    /// console.log("gsap video onUpdate 10001", tweenRef?.current?.time());
    if (tweenRef.current) {
      videoStateRef.current.progress = tweenRef.current.progress();
    }

    if (videoElement.current && tweenRef.current) {
      const currentTweenTime = frameStartAt + tweenRef?.current?.time();
      // console.log(
      //   "currenttime vs player reftime",
      //   videoElement.current.currentTime,
      //   playerTimeRef.current
      // );
      const absDiff = Math.abs(
        videoElement.current.currentTime - currentTweenTime
      );

      const vid = videoElement.current;
      const isVidPlaying =
        vid.currentTime > 0 &&
        !vid.paused &&
        !vid.ended &&
        vid.readyState > vid.HAVE_CURRENT_DATA;

      if (dragModeRef.current) {
        /// console.log("is videoStateRef.current.isDragging state in drag mode");
        videoElement.current.currentTime = currentTweenTime;
        setTimeout(() => {
          if (videoElement.current) {
            videoElement.current.play().then(() => {
              videoStateRef.current.isPlaying = false;
              if (videoElement.current) videoElement.current.pause();
            });
          }
        }, 100);
        videoStateRef.current.isPlaying = false;
      } else if (
        !videoStateRef.current.isPlaying &&
        videoStateRef.current.progress > 0.01 &&
        videoStateRef.current.progress < 0.99
      ) {
        if (
          tl.current?.isActive() &&
          tweenRef.current &&
          tweenRef.current.isActive()
        ) {
          if (!isVidPlaying) videoElement.current.play();
          videoStateRef.current.isPlaying = true;
        }
      } else if (
        absDiff > 0.3 &&
        videoStateRef.current.progress > 0.01 &&
        videoStateRef.current.progress < 0.99
      ) {
        // videoElement.current.currentTime = playerTimeRef.current;
        // if (!isVidPlaying) videoElement.current.play();
        // videoStateRef.current.isPlaying = true;
      }
    }
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
  }, [animation, startAt, endAt, frameStartAt, frameEndAt]);

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

  // // stop playing video while isDragging and gsapDragging
  // React.useEffect(() => {
  //   if (videoElement.current) {
  //     const vid = videoElement.current;
  //     const isVidPlaying =
  //       vid.currentTime > 0 &&
  //       !vid.paused &&
  //       !vid.ended &&
  //       vid.readyState > vid.HAVE_CURRENT_DATA;
  //     if (isVidPlaying && gsapDragging) {
  //       videoElement.current.pause();
  //       videoStateRef.current.isPlaying = false;
  //     } else {
  //       playAndPauseDebounce();
  //     }
  //   }
  // }, [gsapDragging, playAndPauseDebounce, videoElement]);

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
      videoStateRef.current.isWaiting = false;
      videoStateRef.current.isStalled = false;
    };

    const onLoadStart = function () {
      //dispatchState({ isWaiting: true, isStalled: false });
      if (videoElement.current) {
        videoElement.current.pause();
      }

      videoStateRef.current.isWaiting = true;
      videoStateRef.current.isStalled = false;
    };

    const onCanPlayThrough = function () {
      //dispatchState({ isWaiting: false, isStalled: false });
      videoStateRef.current.isWaiting = false;
      videoStateRef.current.isStalled = false;
    };

    const onStalled = function () {
      //dispatchState({ isStalled: true });
      //setVideoState({ isWaiting: false, isStalled: true });
      videoStateRef.current.isWaiting = false;
      videoStateRef.current.isStalled = true;
    };

    // create a new Sprite using the video texture (yes it's that easy)
    const stAt =
      Math.round((Number(frameStartAt) + Number.EPSILON) * 100) / 100;
    const endAt = Math.round((Number(frameEndAt) + Number.EPSILON) * 100) / 100;
    const urlWithTimestamp = `${videoUrl}#t=${stAt},${endAt}`;
    /// const urlWithQuery = `${videoUrl}?t=${stAt},${endAt}`;

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
      if (videoElement.current) {
        videoElement.current.pause();
        videoElement.current.removeEventListener("loadedmetadata", onload);
        videoElement.current.removeEventListener("ended", onEnd);
        videoElement.current.removeEventListener("loadstart", onLoadStart);
        videoElement.current.removeEventListener(
          "canplaythrough",
          onCanPlayThrough
        );
        videoElement.current.removeEventListener("stalled", onStalled);

        /** unmount it completely */
        // Stop and remove the video element when the component unmounts
      }
    };
    // create a new Sprite using the video texture (yes it's that easy)
    // const videoSprite = new PIXI.Sprite(texture);
  }, [videoUrl, uniqueId, frameStartAt, frameEndAt, videoSrcElement]);

  return (
    <AbstractContainer
      {...props}
      ref={ref}
      ignoreTlForVideo={true}
      pointerdown={onPointerDown}
      pointerover={onPointerOver}
      pointerout={onPointerOut}
    >
      {/* @ts-ignore */}
      <Container ref={containerRef}>
        {videoTexture && (
          <Sprite
            texture={videoTexture}
            width={width}
            height={height}
            anchor={0.5}
            x={x}
            y={y}
            ref={imageRef}
            alpha={visible ? 1 : 0}
            {...(visible && { interactive: true, pointerdown: pointerdown })}
            filters={[
              temperatureFilter,
              sharpnessFilter,
              hueFilter,
              adjustmentFilter,
              // conditionally add blur filter
              ...(blurRadius > 0 ? [blurFilter] : []),
            ]}
          />
        )}
      </Container>
    </AbstractContainer>
  );
});

export default PixiVideoSprite;

// @ts-ignore
PixiVideoSprite.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: "PixiVideoSprite",
};
