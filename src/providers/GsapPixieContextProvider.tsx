import * as React from "react";
import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import gsap from "gsap";
import { emitCustomEvent } from "react-custom-events";

interface GsapPixieContextProps {
  gsapCtx: React.MutableRefObject<any>;
  tl: React.MutableRefObject<any>;
  play: boolean;
  handlePlay: () => void;
  handlePause: () => void;
  handleReset: () => void;
  handleSeek: () => void;
  handleRestart: () => void;
  handleRepeat: () => void;
  playerTimeRef: React.MutableRefObject<number>;
}

// Context has been created
// @ts-ignore
const GsapPixieContext = React.createContext<GsapPixieContextProps>({});

const Events = {
  STOP: "GSAP_STOP",
  PAUSE: "GSAP_PAUSE",
  PLAY: "GSAP_PLAY",
  RESUME: "GSAP_RESUME",
};

// Provider
const GsapPixieContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [play, setPlay] = useState<boolean>(false);
  const [frameNumber, setFrameNumber] = useState<number>(0);

  const tl = useRef<any>();
  const gsapCtx = useRef<any>();
  const playerTimeRef = useRef<number>(0.001);

  const parentElementRef = useRef<any>();
  // передаем предка анимируемых элементов
  const q = gsap.utils.selector(parentElementRef);

  useLayoutEffect(() => {
    gsapCtx.current = gsap.context(() => {
      // add a box and circle animation to our timeline and play on first render
      // console.log("creating timeline");
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap.timeline({
        paused: true,
        defaults: { duration: 0 },
      });
    });
    return () => gsapCtx.current.revert();
  }, []);

  const onUpdate = useCallback(() => {
    /// console.log("update event callback");
    const timeline = tl.current;
    var now = timeline.time();
    var elapsedTime;
    if (playerTimeRef.current) {
      elapsedTime = now - playerTimeRef.current;
    }
    //  console.log(`elapseTime :${elapsedTime} and frame: ${frameNumber}`);
    //time = now;
    playerTimeRef.current = now;
  }, []);

  useEffect(() => {
    const timeline = tl.current;
    timeline
      .eventCallback("onStart", function () {
        /// console.log("onstart", timeline.progress());
        setPlay(true);
        onUpdate();
      })
      .eventCallback("onInterrupt", function () {
        /// console.log("onInterrupt", timeline.progress());
        setPlay(false);
        onUpdate();
      })
      .eventCallback("onUpdate", function () {
        /// console.log("onupdate", timeline.progress());
        onUpdate();
      })
      .eventCallback("onComplete", function () {
        timeline.seek(0);
        timeline.pause();
        setPlay(false);
        onUpdate();
      });
  }, []);

  useEffect(() => {
    const timeline = tl.current;
    if (!play) {
      timeline.pause();
    } else {
      timeline.resume();
    }
  }, [play]);

  const addTotalDuration = (duration: number) => {
    const timeline = tl.current;
    timeline.totalDuration(duration);
  };

  const handleReset = useCallback(() => {
    const timeline = tl.current;

    timeline.revert();
  }, []);

  const handleRestart = useCallback(() => {
    const timeline = tl.current;
    timeline.restart();
    setPlay(true);
  }, []);

  const handleRepeat = useCallback(() => {
    const timeline = tl.current;

    timeline.repeat(1);
    timeline.restart();
    setPlay(true);
  }, []);

  const handleSeek = useCallback(() => {
    const timeline = tl.current;
    timeline.seek(4);
  }, []);

  const setDurationTimeline = useCallback(() => {
    const timeline = tl.current;

    timeline.totalDuration(3);
  }, []);

  const handlePause = () => {
    const timeline = tl.current;
    timeline.pause();
    emitCustomEvent(Events.PAUSE);
    setPlay(false);
  };

  const handlePlay = () => {
    const timeline = tl.current;
    setPlay(true);
    timeline.resume();
    emitCustomEvent(Events.RESUME);
  };

  return (
    <GsapPixieContext.Provider
      value={{
        gsapCtx,
        tl,
        handlePlay,
        handlePause,
        handleReset,
        handleSeek,
        handleRestart,
        handleRepeat,
        playerTimeRef,
        play,
      }}
    >
      {children}
    </GsapPixieContext.Provider>
  );
};

export { GsapPixieContext, GsapPixieContextProvider, Events };
