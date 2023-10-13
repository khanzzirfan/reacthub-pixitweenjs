import * as React from "react";
import { useContext, useEffect, useRef } from "react";
import {
  GsapPixieContext,
  Events,
} from "../../providers/GsapPixieContextProvider";
import { Container } from "@pixi/react";
import { useCustomEventListener } from "../../events";
import gsap from "gsap";
import * as PIXI from "pixi.js";
// @ts-ignore
import isEmpty from "lodash/isEmpty";
// @ts-ignore
import debounce from "lodash/debounce";
import { Howl } from "howler";

type PixiAudioSpriteProps = {
  uniqueId: string;
  src: string;
  startAt: number;
  endAt: number;
  audioStartAt: number;
  audioEndAt: number;
  mute: boolean;
  speed: number;
  visible: boolean;
};
interface AudioState {
  isPlaying: boolean;
  progress: number;
  speed: number;
  mute: boolean;
  isWaiting: boolean;
  loaded: boolean;
  size: { width: number; height: number };
  isDragging: boolean;
  completed?: boolean;
}

const PixiAudioSprite: React.FC<PixiAudioSpriteProps> = (props) => {
  const initialState: AudioState = {
    isPlaying: false,
    progress: 0,
    speed: 1,
    mute: false,
    isWaiting: false,
    loaded: false,
    size: { width: 50, height: 50 },
    isDragging: false,
  };
  //// State
  const [, setIsMounted] = React.useState(false);

  //// Refs
  const containerRef = useRef<PIXI.Container>(null);
  const audioStateRef = useRef<AudioState>(initialState);
  const tweenRef = useRef<gsap.core.Tween>(null);
  const audioContainerRef = React.useRef<Howl>(null);

  //// Context
  const { tl, dragModeRef } = useContext(GsapPixieContext);

  /// 1001
  // console.log("contxt Values", tl);
  const {
    uniqueId,
    src,
    startAt,
    endAt,
    mute,
    speed,
    audioStartAt,
    audioEndAt,
    visible,
  } = props;

  /** Adding custom event listners */
  /** Event Listeneres */
  useCustomEventListener(Events.PAUSE, () => {
    if (containerRef.current && audioContainerRef.current) {
      // @ts-ignore
      audioContainerRef.current?.pause();
      audioStateRef.current.isPlaying = false;
    }
  });

  useCustomEventListener(Events.COMPLETE, () => {
    if (audioStartAt > 0 && audioContainerRef.current) {
      audioContainerRef.current.seek(audioStartAt);
    }
  });

  useCustomEventListener(Events.SCRUBBER_CLICKED, () => {
    if (containerRef.current && audioContainerRef.current) {
      // @ts-ignore
      audioContainerRef.current?.pause();
      audioStateRef.current.isPlaying = false;
    }
  });

  // /** stop video playing when gsapDragging is true */
  React.useEffect(() => {
    if (audioContainerRef.current) {
      if (dragModeRef.current) {
        audioContainerRef.current.pause();
        audioStateRef.current.isPlaying = false;
        audioStateRef.current.isDragging = true;
      } else {
        audioStateRef.current.isDragging = false;
      }
    }
  }, [dragModeRef]);

  const gsapOnStart = (startAt: number, endAt: number) => {
    // console.log("gsap on start 0010", uniqueId, startAt, endAt);
    // run the audio start as part of updater
    if (
      tl.current &&
      tl.current.isActive() &&
      tweenRef.current &&
      tweenRef.current.isActive() &&
      !dragModeRef.current &&
      audioContainerRef.current
    ) {
      console.log("gsap on start 0020", uniqueId, startAt, endAt);
      audioContainerRef.current.play();
      audioStateRef.current.isPlaying = true;
    }
  };

  const gsapOnComplete = () => {
    if (containerRef.current) {
      // @ts-ignore
      audioContainerRef.current?.stop();
      audioStateRef.current.isPlaying = false;
      audioStateRef.current.completed = true;
    }
  };

  const gsapOnUpdate = (startAt: number) => {
    // @ts-ignore
    const currentTweenTime = startAt + tweenRef.current?.time();
    // console.log("current audio time", currentTweenTime, tl.current?.time());
    if (audioContainerRef.current && dragModeRef.current) {
      /// console.log("runing debounce updates", currentTweenTime);
      audioContainerRef.current.seek(currentTweenTime);
      audioContainerRef.current.pause();
      audioStateRef.current.isPlaying = false;
    } else if (
      containerRef.current &&
      !audioStateRef.current.isPlaying &&
      tl.current?.isActive() &&
      audioContainerRef.current
    ) {
      // console.log(
      //   "running setUpdateTimer with currentTweenTime",
      //   currentTweenTime,
      //   uniqueId
      // );
      audioContainerRef.current.seek(currentTweenTime);
      audioContainerRef.current.play();
      audioStateRef.current.isPlaying = true;
    }
  };

  const onInterrupt = () => {};

  useEffect(() => {
    let ctx = gsap.context(() => {});
    if (containerRef.current && tl.current) {
      const data = {
        duration: Number(audioEndAt) - Number(audioStartAt),
        onStart: gsapOnStart,
        onComplete: gsapOnComplete,
        onStartParams: [audioStartAt, audioEndAt],
        onCompleteParams: [],
        onInterrupt: onInterrupt,
        onUpdate: gsapOnUpdate,
        onUpdateParams: [audioStartAt, audioEndAt],
      };
      // gsap context for tl to revert timeline;
      ctx = gsap.context(() => {
        // @ts-ignore
        tweenRef.current = gsap.from(
          containerRef.current,
          // @ts-ignore
          data,
          audioStartAt
        );

        tl.current
          .to(containerRef.current, { alpha: 1, duration: 0.01 }, startAt)
          .to(containerRef.current, { alpha: 0, duration: 0.1 }, Number(endAt));

        // add tween
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
  }, [startAt, endAt, audioStartAt, audioEndAt]);

  React.useEffect(() => {
    if (containerRef.current) {
      setIsMounted(true);
    }
  }, []);

  React.useEffect(() => {
    if (!isEmpty(src)) {
      // console.log("running audio sprite useEffect 4001", uniqueId, src);
      // @ts-ignore
      audioContainerRef.current = new Howl({
        src: [src],
        // sprite: {
        //   [uniqueId]: [audioStartAt * 1000, (audioEndAt - audioStartAt) * 1000],
        // },
        autoplay: false,
        loop: false,
        rate: speed || 1,
        volume: !mute && visible ? 1 : 0,
        onload: () => {
          console.log("loaded audio sprite" + uniqueId);
          audioStateRef.current.loaded = true;
          if (audioContainerRef.current) {
            if (audioStartAt > 0) {
              audioContainerRef.current.seek(audioStartAt);
            }
            audioContainerRef.current.volume(!mute && visible ? 1 : 0);
            audioContainerRef.current.rate(speed || 1);

            // pause
            audioContainerRef.current.pause();
            audioStateRef.current.isPlaying = false;
            audioStateRef.current.completed = false;
          }
        },
        onend: () => {
          console.log("end of playing audio sprite" + uniqueId);
          audioStateRef.current.isPlaying = false;
          audioStateRef.current.completed = true;
        },
        onplay: () => {
          console.log("play of playing audio sprite" + uniqueId);
          audioStateRef.current.isPlaying = true;
        },
        onpause: () => {
          console.log("pause of playing audio sprite" + uniqueId);
          audioStateRef.current.isPlaying = false;
        },
        onstop: () => {
          console.log("stop of playing audio sprite" + uniqueId);
          audioStateRef.current.isPlaying = false;
        },
      });
    }
    return () => {
      // app.loader.reset();
      // reset the audio container ref
      if (audioContainerRef.current) {
        audioContainerRef.current.unload();
      }
    };
  }, [
    uniqueId,
    src,
    startAt,
    endAt,
    audioStartAt,
    audioEndAt,
    mute,
    visible,
    speed,
  ]);

  React.useEffect(() => {
    if (audioContainerRef.current) {
      console.log("running updateEffect 2002", uniqueId, audioEndAt);
      audioContainerRef.current.volume(!mute && visible ? 1 : 0);
      audioContainerRef.current.rate(speed || 1);
      audioStateRef.current.isPlaying = true;
    }
  }, [mute, visible, speed]);

  return (
    // @ts-ignore
    <Container ref={containerRef}></Container>
  );
};

export default PixiAudioSprite;
