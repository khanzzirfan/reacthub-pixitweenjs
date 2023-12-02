// audio context provider in react return a useAudioContext hook
import * as React from "react";
import { useEffect, useRef, createContext } from "react";
import { Howler } from "howler";

export type WebAudioContextType = {
  audioContextRef: React.MutableRefObject<AudioContext>;
  analyserRef: React.MutableRefObject<AnalyserNode | undefined>;
  gainNodeRef: React.MutableRefObject<GainNode | undefined>;
  hasAudioContext: boolean;
};

export const WebAudioContext = createContext<WebAudioContextType>({} as any);

export type AudioContextProviderProps = {
  children: React.ReactNode;
};

export const AudioContextProvider = ({
  children,
}: AudioContextProviderProps) => {
  const [hasAudioContext, setHasAudioContext] = React.useState<boolean>(false);

  // const audioContainerRef = React.useRef<Howl>(null);
  const analyserRef = useRef<AnalyserNode>();
  // const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const audioContextRef = React.useRef<AudioContext>(Howler.ctx);
  /// const rafRef = React.useRef<number>(0);
  /// const audioSourceRef = useRef<MediaElementAudioSourceNode>();
  const gainNodeRef = useRef<GainNode>();

  useEffect(() => {
    // setAudioContext(Howler.ctx);
    // @ts-ignore
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;

    const gainNode = audioContext.createGain();
    gainNode.gain.value = 1; // Adjust the gain as needed
    audioContextRef.current = audioContext;
    analyserRef.current = analyser;
    gainNodeRef.current = gainNode;
    setHasAudioContext(true);

    return () => {
      /// clearTimeout(timeoutId);
      setHasAudioContext(false);
    };
  }, []);

  //   const addAudioSource = (audioContainer: Howl) => {
  //     audioContainerRef.current = audioContainer;
  //     const audioSource = Howler.ctx.createMediaElementSource(
  //       // @ts-ignore
  //       audioContainerRef.current._sounds[0]._node
  //     );
  //     audioSource.connect(analyserRef.current!);
  //     analyserRef.current!.connect(gainNodeRef.current!);
  //     gainNodeRef.current!.connect(Howler.ctx.destination);
  //     audioSourceRef.current = audioSource;
  //   };

  //   // remove audio source from audio context
  //   const removeAudioSource = (audioContainer: Howl) => {
  //     audioContainerRef.current = audioContainer;
  //     audioSourceRef.current!.disconnect();
  //     analyserRef.current!.disconnect();
  //     gainNodeRef.current!.disconnect();
  //   };

  return (
    <WebAudioContext.Provider
      value={{
        audioContextRef: audioContextRef,
        analyserRef: analyserRef,
        gainNodeRef: gainNodeRef,
        hasAudioContext,
      }}
    >
      {children}
    </WebAudioContext.Provider>
  );
};
