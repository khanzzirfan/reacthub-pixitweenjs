// implement a react hook to abstract the functionality from the component and make it reusable
import * as React from "react";
import { useRef } from "react";
import AudioMotionAnalyzer from "audiomotion-analyzer";
import { Waveforms } from "../../types/Effects";
import { waveConfig, WaveConfigOptions } from "./wave-config";
// @ts-ignore
import isEmpty from "lodash/isEmpty";
// @ts-ignore
import debounce from "lodash/debounce";
import { PixiBaseSpriteProps } from "../../types/BaseProps";

export type AudioVisualizerProps = Partial<PixiBaseSpriteProps> & {
  uniqueId: string;
  src: string;
  muted?: boolean;
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  visible?: boolean;
};

const initalTransforms = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  anchor: 0.5,
  maxX: 0,
  maxY: 0,
  scale: 1,
  rotation: 0,
  waveform: Waveforms.NONE,
};

const useAudioVisualizer = (audioProps: AudioVisualizerProps) => {
  //// Refs
  /// const analyserRef = useRef<AnalyserNode>();
  const canvasRef = React.useRef<HTMLDivElement>();
  const bodyRef = useRef<HTMLElement>(document.body);
  const audioMotionRef = React.useRef<AudioMotionAnalyzer>();

  // state
  const [blobUrl, setBlobUrl] = React.useState<string>("");

  //// Props
  const { uniqueId, src, transformation = initalTransforms } = audioProps;

  const {
    waveform = Waveforms.NONE,
    width = 300,
    height = 300,
  } = transformation;

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
        error.message.includes("NetworkError when attempting to fetch resource")
      ) {
        throw new TypeError(
          `Failed to read from ${src}: ${error.message}. Does the resource support CORS?`
        );
      }
      throw err;
    }
  };

  // useEffect
  React.useEffect(() => {
    return () => {
      // delete the blobUrl url on onumount
      if (!isEmpty(blobUrl)) {
        URL.revokeObjectURL(blobUrl);
      }

      if (audioMotionRef.current) {
        /// audioMotionRef.current.disconnectInput();
        ///  audioMotionRef.current.destroy();
      }
    };
  }, [blobUrl]);

  React.useEffect(() => {
    // setup audio motion ref
    const waveformConfig: WaveConfigOptions =
      waveConfig[waveform as Waveforms] || {};
    console.log("waveFormCOnfig", waveformConfig);

    // clear the canvas
    if (canvasRef.current) {
      bodyRef.current.removeChild(canvasRef.current);
      canvasRef.current = undefined;
    }

    if (waveform !== Waveforms.NONE) {
      canvasRef.current = document.createElement("div");
      canvasRef.current.setAttribute(
        "id",
        `${uniqueId}${waveform}audioContainer`
      );
      // set width and height;
      bodyRef.current.appendChild(canvasRef.current);
      // instantiate analyzer
      const audioMotion = new AudioMotionAnalyzer(canvasRef.current, {
        audioCtx: Howler.ctx,
        height,
        width,
        ...waveformConfig,
      });
      audioMotionRef.current = audioMotion;
    }

    /** Load async fetch cors url */
    const loadAsync = async () => {
      if (!isEmpty(src)) {
        // Fetch and decode the audio file
        const response = await fetchWithCorsCatch(src);
        const arrayBuffer = await response.arrayBuffer();
        // create URL.createObjectURL from the arrayBuffer;
        const blob = new Blob([arrayBuffer]);
        const url = URL.createObjectURL(blob);
        setBlobUrl(url);

        // hide canvas ref
        if (canvasRef.current) {
          canvasRef.current.style.display = "none";
        }
      }
    };

    // trigger load async
    loadAsync();

    // Cleanup: Remove the new child when the component is unmounted
    return () => {
      if (canvasRef.current && bodyRef.current) {
        console.log("clearing the canvas", canvasRef.current);
        bodyRef.current.removeChild(canvasRef.current);
        canvasRef.current = undefined;
      }
    };
  }, [waveform, src, uniqueId, width, height]);

  return {
    audioMotionRef,
    blobUrl,
    canvasRef,
  };
};

export default useAudioVisualizer;
