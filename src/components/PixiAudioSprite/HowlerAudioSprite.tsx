import { Howl } from "howler";
import { useEffect, useState, useCallback } from "react";

interface HowlerAudioPlayerState {
  sound: Howl | null;
  isPlaying: boolean;
  currentTime: number;
}

interface HowlerAudioPlayerProps {
  src: string;
  start: number;
  end: number;
}

interface IHowlerAudioPlayer {
  sound: Howl | null;
  isPlaying: boolean;
  currentTime: number;
  handlePause: () => void;
  handlePlay: () => void;
  togglePlay: () => void;
  handleSeek: (newTime: number) => void;
  playFromTime: (time: number) => void;
}

type UseHowlerAudioPlayer = (
  props: HowlerAudioPlayerProps
) => IHowlerAudioPlayer;

const useHowlerAudioPlayer: UseHowlerAudioPlayer = ({ src, start, end }) => {
  console.log("use hook reloading audio sprite");
  const [state, setState] = useState<HowlerAudioPlayerState>({
    sound: null,
    isPlaying: false,
    currentTime: 0,
  });

  useEffect(() => {
    const sound = new Howl({
      src: [src],
      sprite: {
        section: [start * 1000, (end - start) * 1000],
      },
      volume: 1,
      onend: handleEnd,
      onplay: handlePlay,
      onpause: handlePause,
      onstop: handleStop,
    });

    setState({ ...state, sound });

    return () => {
      sound.unload();
    };
  }, [src, start, end]);

  const handlePlay = () => {
    setState({ ...state, isPlaying: true });
    if (state.sound) state.sound.play("section");
  };

  const handlePause = () => {
    setState({ ...state, isPlaying: false });
    if (state.sound) state.sound.pause();
  };

  const handleStop = () => {
    console.log("handleStop audio sprite");
    setState({ sound: null, isPlaying: false, currentTime: 0 });
  };

  const handleEnd = () => {
    console.log("end of playing audio sprite");
    setState({ ...state, isPlaying: false, currentTime: 0 });
  };

  const handleSeek = (newTime: number) => {
    if (state.sound) {
      console.log("running handle seek ops", newTime);
      state.sound.seek(newTime);
      setState({ ...state, currentTime: newTime });
    }
  };

  const togglePlay = () => {
    console.log("play pause toggle", state);
    if (state.isPlaying) {
      if (state.sound) state.sound.pause();
    } else {
      if (state.sound) state.sound.play("section");
    }
  };

  const playFromTime = useCallback(
    (time: number) => {
      if (state.sound) {
        state.sound.seek(time);
        state.sound.play("section");
        setState({ ...state, currentTime: time, isPlaying: true });
        // if (!state.isPlaying) {
        //   state.sound.play("section");
        // }
      }
    },
    [state]
  );

  return {
    ...state,
    handlePause,
    handlePlay,
    togglePlay,
    handleSeek,
    playFromTime,
  };
};

export default useHowlerAudioPlayer;
