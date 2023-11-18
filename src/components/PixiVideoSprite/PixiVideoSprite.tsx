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
  const [videoLoaded, setVideoLoaded] = React.useState<boolean>(false);
  const videoTextureRef = React.useRef<PIXI.Texture<PIXI.Resource>>();

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
    disabled,
    transformation: { x, y, width, height, animation, colorCorrection = {} },
    pointerdown = () => void 0,
    pointerout = () => void 0,
    pointerover = () => void 0,
    fps = 0,
  } = props;

  //// Context
  const { tl, dragModeRef, isRemotion } = useContext(GsapPixieContext);

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
      videoElement.current.pause();
      videoStateRef.current.isPlaying = false;
    }
  });

  useCustomEventListener(Events.SCRUBBER_CLICKED, () => {
    if (videoElement.current) {
      videoElement.current.pause();
      videoStateRef.current.isPlaying = false;
    }
  });

  // reset timeline when reverse mode end.
  useCustomEventListener(Events.REVERSE_MODE_END, () => {
    if (videoElement.current) {
      videoElement.current.pause();
      videoStateRef.current.isPlaying = false;
    }
  });

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

      if (dragModeRef.current && videoTextureRef.current) {
        /// console.log("is videoStateRef.current.isDragging state in drag mode");
        videoElement.current.currentTime = currentTweenTime;
        videoTextureRef.current.update();
        videoStateRef.current.isPlaying = false;
      } else if (
        (isVidPlaying !== videoStateRef.current.isPlaying || !isVidPlaying) &&
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
        videoElement.current.currentTime = currentTweenTime;
      }
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {});
    if (containerRef.current && tl.current) {
      const data = {
        duration: Number(endAt) - Number(startAt),
        onStart: gsapOnStart,
        onComplete: gsapOnComplete,
        onStartParams: [frameStartAt, frameEndAt],
        onCompleteParams: [],
        onInterrupt: onInterrupt,
        onUpdate: onUpdate,
        onUpdateParams: [frameStartAt, frameEndAt],
        onPause: () => {
          console.log("onPause video sprite pause", uniqueId);
        },
        onResume: () => {
          console.log("onResume video sprite resume", uniqueId);
        },
        onReverseComplete: () => {
          console.log(
            "onReverseComplete video sprite reverse complete",
            uniqueId
          );
        },
        onKill: () => {
          console.log("onKill video sprite kill", uniqueId);
        },
      };

      if (tweenRef.current) {
        tweenRef.current.kill();
        tl.current.remove(tweenRef.current);
      }

      // kill tween before adding it.
      ctx = gsap.context(() => {
        tweenRef.current = gsap.to(
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
  }, [animation, startAt, endAt, frameStartAt, frameEndAt, uniqueId]);

  React.useEffect(() => {
    if (videoElement.current) {
      videoElement.current.muted = mute;
      videoStateRef.current.isMuted = mute;
    }
    // sometimes the videoElement is not ready so we need to wait for it to be ready
    const timeoutId = setTimeout(() => {
      if (videoElement.current) {
        videoElement.current.muted = mute;
        videoStateRef.current.isMuted = mute;
      }
    }, 1500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [mute]);

  // load // load meta // load seek through
  React.useEffect(() => {
    const minStartAt =
      Math.round((Number(frameStartAt) + Number.EPSILON) * 100) / 100;

    const onload = function () {
      if (videoElement.current) {
        videoElement.current.currentTime = minStartAt;
        videoElement.current.muted = mute;
      }
    };

    const onEnd = function () {
      videoStateRef.current.isWaiting = false;
      videoStateRef.current.isStalled = false;
    };

    const onLoadStart = function () {
      videoStateRef.current.isWaiting = true;
      videoStateRef.current.isStalled = false;
    };

    const onCanPlayThrough = function () {
      //dispatchState({ isWaiting: false, isStalled: false });
      videoStateRef.current.isWaiting = false;
      videoStateRef.current.isStalled = false;
    };

    const onStalled = function () {
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
        updateFPS: fps ? Math.max(120, Number(fps)) : 30,
      },
    }).then((texture) => {
      if (!texture) return;
      // texture.baseTexture.resource.source.currentSrc = urlWithTimestamp;
      videoTextureRef.current = texture;
      setVideoLoaded(true);

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

  // Add use effect when the video texture is loaded for the first time
  React.useEffect(() => {
    /// run the timeout for checking it all below logic
    const timeoutId = setTimeout(() => {
      if (
        videoLoaded &&
        videoTextureRef.current &&
        tweenRef.current &&
        tl.current
      ) {
        const tweenCurrentProgress = tweenRef.current.progress();
        if (
          tweenCurrentProgress < 0.1 &&
          videoElement.current &&
          !tweenRef.current.isActive() &&
          !isRemotion
        ) {
          videoElement.current.currentTime = frameStartAt;
          videoTextureRef.current.update();
        }
      }
    }, 30);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [videoLoaded]);

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

export default PixiVideoSprite;

// @ts-ignore
PixiVideoSprite.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: "PixiVideoSprite",
};
