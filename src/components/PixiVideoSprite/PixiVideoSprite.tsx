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
import {
  PixiBaseSpriteProps,
  ForwardedRefResponse,
} from "../../types/BaseProps";

interface PixiVideoSpriteProps extends PixiBaseSpriteProps {
  uniqueId: string;
  src: string;
  startAt: number;
  endAt: number;
  frameStartAt: number;
  frameEndAt: number;
  mute: boolean;
  locked: boolean;
  initialAlpha: number;
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
  /// const [isTransformerDragging, setIsTransformerDragging] = useState(false);
  const [, setVideoState] = React.useState({
    isWaiting: false,
    isStalled: false,
  });
  const [videoTexture, setVideoTexture] =
    React.useState<PIXI.Texture<PIXI.Resource>>();

  //// Refs
  const imageRef = useRef<PIXI.Sprite>(null);
  const containerRef = useRef<PIXI.Container>(null);
  const videoElement = useRef<HTMLVideoElement>(null);
  const videoStateRef = useRef<VideoState>(initialState);
  const tweenRef = useRef<gsap.core.Tween>();

  //// Context
  const { tl, isDragging: gsapDragging } = useContext(GsapPixieContext);

  // console log draggging
  /// 1001
  // console.log("contxt Values", tl);
  const {
    uniqueId,
    mute = false,
    src,
    frameStartAt,
    frameEndAt,
    transformation: { x, y, width, height, animation },
  } = props;

  const videoUrl = src || "";

  /**Adding this alternative workaround to work with mov/mk4 video types */
  const videoSrcElement = React.useMemo(() => {
    const element = document.createElement("video");
    element.src = src;
    element.crossOrigin = "Anonymus";
    element.autoplay = false;
    element.currentTime = frameStartAt;
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

  // /** stop video playing when gsapDragging is true */
  React.useEffect(() => {
    // console.log("current", videoElement.current, gsapDragging);
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
  const gsapOnStart = (frameStartAt: number) => {
    /// console.log("startAt", frameStartAt, frameEndAt, playerTimeRef.current);
    if (videoElement.current) {
      // console.log("video gsapOnStart", playerTimeRef.current, gsapDragging);
      // const roundedPlayerTime = Number(Math.round(playerTimeRef.current));
      // check the start and end times are between the playerTimeRef.current to start video;
      videoElement.current.currentTime = Number(frameStartAt);
      if (!gsapDragging) {
        videoElement.current.currentTime = Number(frameStartAt);
        videoElement.current.play();
        videoStateRef.current.isPlaying = true;
      }
    }
  };

  const gsapOnComplete = () => {
    // console.log("onComplete triggered");
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
    }
  };

  const onInterrupt = () => {
    // console.log('interrupting', refId);
  };

  const onUpdate = () => {
    // console.log(
    //   "gsap video onUpdate 10001",
    //   playerTimeRef.current,
    //   tweenRef.current.time()
    // );
    if (videoElement.current && tweenRef.current) {
      const currentTweenTime = frameStartAt + tweenRef.current?.time();
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

      if (videoStateRef.current.isDragging) {
        // console.log("video updating 1002", playerTimeRef.current);
        videoElement.current.currentTime = currentTweenTime;
        videoElement.current.play();
        setTimeout(() => {
          videoStateRef.current.isPlaying = false;
          if (videoElement.current) videoElement.current.pause();
        }, 300);
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

      ctx = gsap.context(() => {
        tweenRef.current = gsap.from(
          containerRef.current,
          // @ts-ignore
          data,
          frameStartAt
        );
        tl.current.add(tweenRef.current, frameStartAt);
      });
    }
    return () => ctx.revert(); // cleanup!
  }, [animation, frameStartAt, frameEndAt]);

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
      if (isVidPlaying && gsapDragging) {
        videoElement.current.pause();
        videoStateRef.current.isPlaying = false;
      }
    }
  }, [gsapDragging]);

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
    /// const urlWithQuery = `${videoUrl}?t=${stAt},${endAt}`;

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
        videoElement.current.removeEventListener("loadedmetadata", onload);
        videoElement.current.removeEventListener("ended", onEnd);
        videoElement.current.removeEventListener("loadstart", onLoadStart);
        videoElement.current.removeEventListener(
          "canplaythrough",
          onCanPlayThrough
        );
        videoElement.current.removeEventListener("stalled", onStalled);
      }
    };
    // create a new Sprite using the video texture (yes it's that easy)
    // const videoSprite = new PIXI.Sprite(texture);
  }, [videoUrl, uniqueId, frameStartAt, frameEndAt, videoSrcElement]);

  return (
    <AbstractContainer {...props} ref={ref} ignoreTlForVideo={true}>
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
          />
        )}
      </Container>
    </AbstractContainer>
  );
});

export default PixiVideoSprite;
