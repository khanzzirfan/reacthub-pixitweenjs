import * as React from "react";
import { useContext, useEffect, useRef } from "react";
import {
  GsapPixieContext,
  Events,
} from "../../providers/GsapPixieContextProvider";
import { Container, Sprite } from "@pixi/react";
import { useCustomEventListener } from "../../events";
import gsap from "gsap";
import * as PIXI from "pixi.js";
import AbstractContainer from "../../hocs/AbstractContainer";

// @ts-ignore
import isEmpty from "lodash/isEmpty";
// @ts-ignore
import debounce from "lodash/debounce";
import { Howl } from "howler";
import { isRemoteAsset } from "../../utils/isRemoteAsset";
import {
  PixiBaseSpriteProps,
  ForwardedRefResponse,
} from "../../types/BaseProps";
import { Waveforms } from "../../hocs/OverlayTilingSprite";

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
  const [blobUrl, setBlobUrl] = React.useState<string>("");
  // @ts-ignore
  const [metadata, setMetadata] = React.useState<any>({}); // audio metadata
  const [isLoaded, setIsLoaded] = React.useState(false);

  //// Refs
  const containerRef = useRef<PIXI.Container>(null);
  const audioStateRef = useRef<AudioState>(initialState);
  const tweenRef = useRef<gsap.core.Tween>(null);
  const audioContainerRef = React.useRef<Howl>(null);
  const analyserRef = useRef<AnalyserNode>();
  const canvasRef = React.useRef<HTMLCanvasElement>();
  const audioSourceRef = useRef<MediaElementAudioSourceNode>();
  const gainNodeRef = useRef<GainNode>();
  const bodyRef = useRef<HTMLElement>(document.body);
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
    width = 0,
    height = 0,
    x = 0,
    y = 0,
    waveform = Waveforms.NONE,
  } = transformation || {};

  React.useLayoutEffect(() => {
    if (waveform !== Waveforms.NONE) {
      canvasRef.current = document.createElement("canvas");
      canvasRef.current.setAttribute("id", `${uniqueId}audioContainer`);
      // set width and height;
      canvasRef.current.setAttribute("width", `300`);
      canvasRef.current.setAttribute("height", `300`);
      // Append the new child to the body
      bodyRef.current.appendChild(canvasRef.current);
    }
    // Cleanup: Remove the new child when the component is unmounted
    return () => {
      if (canvasRef.current && bodyRef.current) {
        bodyRef.current.removeChild(canvasRef.current);
        canvasRef.current = undefined;
      }
    };
  }, [waveform]);

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

  const drawCanvas = React.useCallback(() => {
    if (analyserRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d")!;
      const WIDTH = canvas.width;
      const HEIGHT = canvas.height;
      const analyser = analyserRef.current;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const barWidth = (WIDTH / bufferLength) * 2.5;
      let x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];

        const r = barHeight + 25 * (i / bufferLength);
        const g = 250 * (i / bufferLength);
        const b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
        // console.log("fillRect", x, HEIGHT, barWidth, barHeight);

        x += barWidth + 1;
      }
    }
  }, []);

  React.useEffect(() => {
    const fetchWithCorsCatch = async (src: string) => {
      try {
        const response = await fetch(src, {
          mode: "cors",
          referrerPolicy: "no-referrer-when-downgrade",
        });
        return response;
      } catch (err) {
        const error = err as Error;
        if (
          // Chrome
          error.message.includes("Failed to fetch") ||
          // Safari
          error.message.includes("Load failed") ||
          // Firefox
          error.message.includes(
            "NetworkError when attempting to fetch resource"
          )
        ) {
          throw new TypeError(
            `Failed to read from ${src}: ${error.message}. Does the resource support CORS?`
          );
        }
        throw err;
      }
    };

    const loadAsync = async () => {
      if (!isEmpty(src)) {
        // Fetch and decode the audio file
        const response = await fetchWithCorsCatch(src);
        const arrayBuffer = await response.arrayBuffer();
        // create URL.createObjectURL from the arrayBuffer;
        const blob = new Blob([arrayBuffer]);
        const url = URL.createObjectURL(blob);
        // check howler ctx exists and use it to decode audio buffer channel data
        if (Howler.ctx) {
          const wave = await Howler.ctx.decodeAudioData(arrayBuffer);
          const channelWaveforms = new Array(wave.numberOfChannels)
            .fill(true)
            .map((_, channel) => {
              return wave.getChannelData(channel);
            });

          const metadata = {
            channelWaveforms,
            sampleRate: Howler.ctx.sampleRate,
            durationInSeconds: wave.duration,
            numberOfChannels: wave.numberOfChannels,
            resultId: String(Math.random()),
            isRemote: isRemoteAsset(src),
          };
          setMetadata(metadata);
        }
        setBlobUrl(url);
      }
    };

    loadAsync();
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
    src,
  ]);

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
    drawCanvas();
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
            if (!analyserRef.current && waveform !== Waveforms.NONE) {
              // Take 2
              /////// Create an AnalyserNode and connect it to the Howler.js audio node
              const analyser = Howler.ctx.createAnalyser();
              analyser.fftSize = 256;
              const gainNode = Howler.ctx.createGain();
              // gainNode.gain.value = 1; // Adjust the gain as needed
              // Connect the Howler.js audio node to the AnalyserNode and GainNode
              const audioSource = Howler.ctx.createMediaElementSource(
                // @ts-ignore
                audioContainerRef.current._sounds[0]._node
              );
              audioSource.connect(analyser);
              analyser.connect(gainNode);
              gainNode.connect(Howler.ctx.destination);
              // Store references
              analyserRef.current = analyser;
              audioSourceRef.current = audioSource;
              gainNodeRef.current = gainNode;

              if (canvasRef.current) {
                canvasRef.current.setAttribute("style", "display:none");
                const texture = PIXI.Texture.from(canvasRef.current);
                videoTextureRef.current = texture;
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
      // app.loader.reset();
      // reset the audio container ref
      if (audioContainerRef.current) {
        audioContainerRef.current.unload();
      }

      // disconnect analyser
      // if (analyserRef.current) {
      //   if (audioSourceRef.current)
      //     audioSourceRef.current.disconnect(analyserRef.current);
      // }

      // delete the blocl url on onumount
      if (!isEmpty(blobUrl)) {
        URL.revokeObjectURL(blobUrl);
      }

      // unload the audio container ref
      /// Howler.unload();
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
    waveform,
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
            width={width || 300}
            height={height || 300}
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
