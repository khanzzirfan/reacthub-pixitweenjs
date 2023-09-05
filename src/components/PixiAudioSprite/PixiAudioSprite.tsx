import * as React from "react";
import { useContext, useEffect, useRef } from "react";
import {
  GsapPixieContext,
  Events,
} from "../../providers/GsapPixieContextProvider";
import { Container } from "@pixi/react";
import { useCustomEventListener } from "../../events";
import gsap from "gsap";
import { Sound } from "@pixi/sound";
import * as PIXI from "pixi.js";
// @ts-ignore
import isEmpty from "lodash/isEmpty";
// @ts-ignore
import debounce from "lodash/debounce";

type PixiAudioSpriteProps = {
  uniqueId: string;
  src: string;
  startAt: number;
  endAt: number;
  audioStartAt?: number;
  audioEndAt?: number;
  mute: boolean;
  speed: number;
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

  //// Context
  const { tl, isDragging: gsapDragging } = useContext(GsapPixieContext);

  /// 1001
  // console.log("contxt Values", tl);
  const { uniqueId, src, startAt, endAt, mute, speed } = props;
  const audStartAt = props.audioStartAt || startAt;
  const audEndAt = props.audioEndAt || endAt;

  const audioContainerRef = React.useRef<Sound>(null);

  /** Adding custom event listners */
  /** Event Listeneres */
  useCustomEventListener(Events.PAUSE, () => {
    if (containerRef.current && audioContainerRef.current) {
      // @ts-ignore
      audioContainerRef.current?.pause();
      audioStateRef.current.isPlaying = false;
    }
  });

  // /** stop video playing when gsapDragging is true */
  React.useEffect(() => {
    if (audioContainerRef.current) {
      if (gsapDragging) {
        audioContainerRef.current.pause();
        audioStateRef.current.isPlaying = false;
        audioStateRef.current.isDragging = true;
      } else {
        audioStateRef.current.isDragging = false;
      }
    }
  }, [gsapDragging]);

  const gsapOnStart = (startAt: number) => {
    if (containerRef.current) {
      audioContainerRef.current?.play({
        volume: mute ? 0 : 1,
        start: startAt,
        end: endAt,
        speed: speed || 1,
      });

      if (!gsapDragging) {
        audioStateRef.current.isPlaying = true;
        audioStateRef.current.completed = false;
      } else {
        audioContainerRef.current?.pause();
        audioStateRef.current.isPlaying = false;
        audioStateRef.current.completed = false;
      }
    }
  };

  // debounce update audio time
  const debAudioTimeUpdate = debounce((startAt: number, endAt: number) => {
    if (audioContainerRef.current) {
      audioContainerRef.current?.play({
        volume: mute ? 0 : 1,
        start: startAt,
        end: endAt,
        speed: speed || 1,
      });
      audioStateRef.current.isPlaying = true;
    }
  }, 100);

  const debStopAudioPlay = debounce(() => {
    if (audioContainerRef.current) {
      audioContainerRef.current.pause();
      audioStateRef.current.isPlaying = false;
    }
  }, 300);

  const gsapOnComplete = () => {
    if (containerRef.current) {
      // @ts-ignore
      audioContainerRef.current?.stop();
      audioStateRef.current.isPlaying = false;
      audioStateRef.current.completed = true;
    }
  };

  const gsapOnUpdate = (startAt: number, endAt: number) => {
    // @ts-ignore
    const currentTweenTime = startAt + tweenRef.current?.time();
    if (audioContainerRef.current && audioStateRef.current.isDragging) {
      debAudioTimeUpdate(currentTweenTime!, endAt);
      debStopAudioPlay();
      audioStateRef.current.isPlaying = false;
    } else if (containerRef.current && !audioStateRef.current.isPlaying) {
      // @ts-ignore
      audioContainerRef.current?.refresh();
      // @ts-ignore
      audioContainerRef.current?.refreshPaused();
      // @ts-ignore
      audioContainerRef.current?.resume();
      audioStateRef.current.isPlaying = true;
    }
  };

  const onInterrupt = () => {};

  useEffect(() => {
    let ctx = gsap.context(() => {});
    if (containerRef.current && tl.current) {
      const data = {
        duration: Number(audEndAt) - Number(audStartAt),
        onStart: gsapOnStart,
        onComplete: gsapOnComplete,
        onStartParams: [audStartAt, audEndAt],
        onCompleteParams: [],
        onInterrupt: onInterrupt,
        onUpdate: gsapOnUpdate,
        onUpdateParams: [audStartAt, audEndAt],
      };

      if (tweenRef.current) {
        tweenRef.current.kill();
      }
      // gsap context for tl to revert timeline;
      ctx = gsap.context(() => {
        // @ts-ignore
        tweenRef.current = gsap.from(
          containerRef.current,
          // @ts-ignore
          data,
          audStartAt
        );

        tl.current
          .to(containerRef.current, { alpha: 1, duration: 0.01 }, startAt)
          .to(
            containerRef.current,
            { alpha: 0, duration: 0.1 },
            Number(endAt) - 0.09
          );

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
  }, [startAt, endAt, audStartAt, audEndAt]);

  React.useEffect(() => {
    if (containerRef.current) {
      setIsMounted(true);
    }
  }, []);

  React.useEffect(() => {
    if (containerRef.current && audioContainerRef.current) {
      // @ts-ignore
      audioStateRef.current.mute = mute;
      audioStateRef.current.speed = speed;
      audioContainerRef.current.volume = mute ? 0 : 1;
    }
  }, [mute, speed]);

  React.useEffect(() => {
    if (!isEmpty(src)) {
      // @pixi/sound package usage
      //@ts-ignore
      audioContainerRef.current = Sound.from({
        url: src,
        preload: true,
        singleInstance: true,
        loaded: () => {
          //@ts-ignore
          // audioContainerRef.current = sound;
          audioStateRef.current.loaded = true;
        },
      });
    }
    return () => {
      // app.loader.reset();
      // reset the audio container ref
      if (audioContainerRef.current) {
        audioContainerRef.current.pause && audioContainerRef.current.pause();
        audioContainerRef.current.destroy &&
          audioContainerRef.current.destroy();
      }
    };
  }, [uniqueId, src]);

  return (
    // @ts-ignore
    <Container ref={containerRef}></Container>
  );
};

export default PixiAudioSprite;
