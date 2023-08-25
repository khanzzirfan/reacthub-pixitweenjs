import * as React from "react";
import { useContext, useEffect, useRef } from "react";
// @ts-ignore
import PropTypes from "prop-types";
import {
  GsapPixieContext,
  Events,
} from "../../providers/GsapPixieContextProvider";
import { Container } from "@pixi/react";
import { useCustomEventListener } from "react-custom-events";
import gsap from "gsap";
import { Sound } from "@pixi/sound";
import * as PIXI from "pixi.js";
// @ts-ignore
import isEmpty from "lodash/isEmpty";

type PixiAudioSpriteProps = {
  uniqueId: string;
  src: string;
  startAt: number;
  endAt: number;
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

  const audioStateRef = useRef<AudioState>(initialState);

  console.log("allProps", props);
  //// Refs
  const containerRef = useRef<PIXI.Container>(null);
  const imgGroupRef = useRef<PIXI.Container>(null);

  //// Context
  //// Context
  const { tl, playerTimeRef } = useContext(GsapPixieContext);

  /// 1001
  // console.log("contxt Values", tl);
  const { uniqueId, src, startAt, endAt, mute, speed } = props;

  const audioContainerRef = React.useRef<Sound>(null);

  /** Adding custom event listners */
  /** Event Listeneres */
  useCustomEventListener(Events.PAUSE, () => {
    console.log("pause event");
    if (containerRef.current) {
      // @ts-ignore
      audioContainerRef.current?.pause();
      audioStateRef.current.isPlaying = false;
    }
  });

  const gsapOnStart = (startAt: number) => {
    if (containerRef.current) {
      console.log("audio gsapOnStart", startAt);
      if (playerTimeRef.current >= startAt && playerTimeRef.current <= endAt) {
        // @ts-ignore
        audioContainerRef.current?.play({
          volume: mute ? 0 : 1,
          start: startAt,
          end: endAt,
          speed: speed || 1,
        });
        audioStateRef.current.isPlaying = true;
        audioStateRef.current.completed = false;
      }
    }
  };

  const gsapOnComplete = () => {
    if (containerRef.current) {
      console.log("audio gsapOnStart", startAt);
      // @ts-ignore
      audioContainerRef.current?.stop();
      audioStateRef.current.isPlaying = false;
      audioStateRef.current.completed = true;
    }
  };

  const gsapOnUpdate = (startAt: number) => {
    if (
      containerRef.current &&
      !audioStateRef.current.isPlaying &&
      !audioStateRef.current.completed
    ) {
      console.log("audio gsapOnUpdate", startAt);
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
        duration: Number(endAt) - Number(startAt),
        onStart: gsapOnStart,
        onComplete: gsapOnComplete,
        onStartParams: [startAt],
        onCompleteParams: [],
        onInterrupt: onInterrupt,
        onUpdate: gsapOnUpdate,
        onUpdateParams: [],
      };
      ctx = gsap.context(() => {
        tl.current
          .to(containerRef.current, { alpha: 1, duration: 0.01 }, startAt)
          .from(imgGroupRef.current, { ...data }, startAt)
          .to(
            containerRef.current,
            { alpha: 0, duration: 0.1 },
            Number(endAt) - Number(0.1)
          );
      });
    }
    return () => ctx.revert(); // cleanup!
  }, [startAt, endAt]);

  React.useEffect(() => {
    if (containerRef.current) {
      setIsMounted(true);
    }
  }, []);

  React.useEffect(() => {
    if (containerRef.current && audioContainerRef.current) {
      console.log("soundref", audioContainerRef.current);
      // @ts-ignore
      audioStateRef.current.mute = mute;
      audioStateRef.current.speed = speed;
      console.log("containerAudio", audioContainerRef.current.volume);
      audioContainerRef.current.volume = mute ? 0 : 1;
    }
  }, [mute, speed]);

  const onSoundLoaded = React.useCallback(
    (_: any, sound: Sound | undefined) => {
      //@ts-ignore
      audioContainerRef.current = sound;
      audioStateRef.current.loaded = true;
      // const instance = sound.play();
    },
    []
  );

  React.useEffect(() => {
    if (!isEmpty(src)) {
      // @pixi/sound package usage
      //@ts-ignore
      audioContainerRef.current = Sound.from({
        url: src,
        preload: true,
        singleInstance: true,
        loaded: onSoundLoaded,
      });
    }
    return () => {
      // app.loader.reset();
    };
  }, [uniqueId, src, onSoundLoaded]);

  return (
    // @ts-ignore
    <Container ref={containerRef}></Container>
  );
};

export default PixiAudioSprite;
