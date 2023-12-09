import * as React from "react";
import { Howl } from "howler";
import { useContext, useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import gsap from "gsap";
// @ts-ignore
import isEmpty from "lodash/isEmpty";
// @ts-ignore
import debounce from "lodash/debounce";
import {
  GsapPixieContext,
  Events,
} from "../../providers/GsapPixieContextProvider";
import { Container, Sprite } from "@pixi/react";
import { useCustomEventListener } from "../../events";
import AbstractContainer from "../../hocs/AbstractContainer";
import {
  PixiBaseSpriteProps,
  ForwardedRefResponse,
} from "../../types/BaseProps";
import { Waveforms } from "../../types/Effects";
import useAudioVisualizer from "./useAudioVisualizer";

export interface PixiAudioSpriteProps extends PixiBaseSpriteProps {
  uniqueId: string;
  src: string;
  startAt: number;
  endAt: number;
  audioStartAt: number;
  audioEndAt: number;
  mute: boolean;
  speed: number;
  visible: boolean;
}
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

const PixiAudioSprite = React.forwardRef<
  ForwardedRefResponse | null,
  PixiAudioSpriteProps
>((props, ref) => {
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
  // state
  const [isLoaded, setIsLoaded] = React.useState(false);
  //// Refs
  const containerRef = useRef<PIXI.Container>(null);
  const audioStateRef = useRef<AudioState>(initialState);
  const tweenRef = useRef<gsap.core.Tween>(null);
  const audioContainerRef = React.useRef<Howl>(null);
  const imageRef = useRef<PIXI.Sprite>(null);
  const videoTextureRef = React.useRef<PIXI.Texture<PIXI.Resource>>();

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
    visible = false,
    transformation,
  } = props;

  const {
    width = 300,
    height = 300,
    x = 100,
    y = 100,
    waveform = Waveforms.NONE,
  } = transformation || {};

  const { audioMotionRef, blobUrl, canvasRef } = useAudioVisualizer({
    uniqueId,
    src,
    transformation,
  });

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

    // draw audio sprites waves
    // drawCanvas();
    if (videoTextureRef.current) videoTextureRef.current.update();
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
        id: uniqueId,
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
  }, [startAt, endAt, audioStartAt, audioEndAt, uniqueId]);

  React.useEffect(() => {
    if (containerRef.current) {
      setIsMounted(true);
    }
    return () => {
      console.log("unmounting audio sprite", uniqueId);
      console.log("audioContainerRef.current", audioContainerRef.current);
    };
  }, []);

  React.useEffect(() => {
    if (videoTextureRef.current) videoTextureRef.current.update();
    return () => {};
  }, [isLoaded]);

  React.useEffect(() => {
    if (!isEmpty(blobUrl)) {
      // @ts-ignore
      audioContainerRef.current = new Howl({
        src: [blobUrl],
        // sprite: {
        //   [uniqueId]: [audioStartAt * 1000, (audioEndAt - audioStartAt) * 1000],
        // },
        format: ["mp3"], // Specify the audio format(s) you're using
        html5: true, // Use HTML5 audio
        autoplay: false,
        loop: false,
        rate: speed || 1,
        /// volume: !mute && visible ? 1 : 0,
        onload: () => {
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
            if (audioMotionRef.current && audioContainerRef.current) {
              console.log("reconnecting the audio motion analyser");
              try {
                audioMotionRef.current.connectInput(
                  // @ts-ignore
                  audioContainerRef.current._sounds[0]._node
                );
              } catch (ex: unknown) {
                console.log("error connecting audio motion");
                console.log(ex);
              }

              // @ts-ignore
              const texture = PIXI.Texture.from(audioMotionRef.current._fsEl, {
                // @ts-ignore
                pixiIdPrefix: `${audioMotionRef.current._container?.id}`,
              });
              videoTextureRef.current = texture;
              if (canvasRef.current) {
                canvasRef.current.setAttribute("style", "display:none");
              }
              setIsLoaded(true);
            }
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

      // resume howler ctx
      Howler.ctx.resume().then(() => {
        console.log("audio ctx resumed");
      });
    }
    return () => {
      console.log("unmounting the howler useeffect");

      if (audioMotionRef.current) {
        /// audioMotionRef.current.disconnectInput();
        ///  audioMotionRef.current.destroy();
      }

      // app.loader.reset();
      // reset the audio container ref
      if (audioContainerRef.current) {
        audioContainerRef.current.stop();
        audioContainerRef.current.unload();
        // @ts-ignore
        audioContainerRef.current = undefined;
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
    blobUrl,
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
    <Container ref={containerRef}>
      {waveform !== Waveforms.NONE && isLoaded && videoTextureRef.current && (
        <AbstractContainer
          {...props}
          ref={ref}
          ignoreTlForVideo={true}
          isGif={true}
        >
          <Sprite
            texture={videoTextureRef.current}
            width={width}
            height={height}
            anchor={0.5}
            x={x}
            y={y}
            ref={imageRef}
            alpha={visible ? 1 : 0}
          />
        </AbstractContainer>
      )}
    </Container>
  );
});

export default PixiAudioSprite;
