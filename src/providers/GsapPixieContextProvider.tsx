import * as React from "react";
import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import gsap from "gsap";
import { emitCustomEvent, useCustomEventListener } from "react-custom-events";
import { useDebounce } from "../utils/useDebounce";

interface GsapPixieContextProps {
  gsapCtx: React.MutableRefObject<any>;
  tl: React.MutableRefObject<any>;
  play: boolean;
  isDragging: boolean;
  handlePlay: () => void;
  handlePause: () => void;
  handleReset: () => void;
  handleSeek: (value: number) => void;
  handleSeekTest: () => void;
  handleRestart: () => void;
  handleRepeat: () => void;
  playerTimeRef: React.MutableRefObject<number>;
  totalDuration: number;
}

// Context has been created
// @ts-ignore
const GsapPixieContext = React.createContext<GsapPixieContextProps>({});

const Events = {
  STOP: "GSAP_STOP",
  PAUSE: "GSAP_PAUSE",
  PLAY: "GSAP_PLAY",
  RESUME: "GSAP_RESUME",
  RESTART: "GSAP_RESTART",
  REPEAT: "GSAP_REPEAT",
  SEEK: "GSAP_SEEK",
  RESET: "GSAP_RESET",
  DRAGGING_START: "GSAP_DRAGGING_START",
  DRAGGING_END: "GSAP_DRAGGING_END",
};

// Provider
const GsapPixieContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [play, setPlay] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [internalDuration, setInternalDuration] = useState<number>(0);
  const [totalDuration, setTotalDuration] = useState<number>(0);
  const delayedDuration = useDebounce(internalDuration, 600);

  const tl = useRef<any>();
  const gsapCtx = useRef<any>();
  const playerTimeRef = useRef<number>(0.001);

  // const parentElementRef = useRef<any>();
  // передаем предка анимируемых элементов
  // const q = gsap.utils.selector(parentElementRef);

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

  gsap.ticker.add(() => {
    // console.log("timeframe", time, deltaTime, frame);
    // setFrameNumber(frame);
    if (tl.current && getTimelineDuration) {
      setInternalDuration(getTimelineDuration());
    }
  });

  const onUpdate = useCallback(() => {
    /// console.log("update event callback");
    const timeline = tl.current;
    let now = timeline.time();
    // let elapsedTime;
    // if (playerTimeRef.current) {
    //   elapsedTime = now - playerTimeRef.current;
    // }
    //  console.log(`elapseTime :${elapsedTime} and frame: ${frameNumber}`);
    //time = now;
    playerTimeRef.current = now;
  }, []);

  // set the total duration based on the delayed duration value
  useEffect(() => {
    setTotalDuration(delayedDuration);
  }, [delayedDuration]);

  useEffect(() => {
    const timeline = tl.current;
    timeline
      .eventCallback("onStart", function () {
        // console.log("onstart", timeline.progress());
        // setPlay(true);
        // onUpdate();
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
      // .eventCallback("onRepeat", function () {
      //   /// console.log("onrepeat", timeline.progress());
      //   onUpdate();
      // })
      // .eventCallback("onReverseComplete", function () {
      //   /// console.log("onReverseComplete", timeline.progress());
      //   onUpdate();
      // })
      // write a pause event
      .eventCallback("onPause", function () {
        console.log("onPause", timeline.progress());
        setPlay(false);
        onUpdate();
      })
      .eventCallback("onResume", function () {
        console.log("onResume", timeline.progress());
        setPlay(true);
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
    // setPlay(true);
  }, []);

  const handleSeek = useCallback((value: number) => {
    const timeline = tl.current;
    timeline.seek(value);
  }, []);

  const handleSeekTest = useCallback(() => {
    const timeline = tl.current;
    timeline.seek(4);
  }, []);

  // const setTimelineDuration = useCallback(() => {
  //   const timeline = tl.current;
  //   timeline.totalDuration(3);
  // }, []);

  const getTimelineDuration = useCallback(() => {
    const timeline = tl.current;
    if (!timeline) return 0;
    return timeline.totalDuration();
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

  /** Event listener dragging */
  useCustomEventListener(Events.DRAGGING_START, () => {
    console.log("dragging start");
    setIsDragging(true);
  });

  useCustomEventListener(Events.DRAGGING_END, () => {
    setIsDragging(false);
    console.log("dragging end");
  });

  console.log("set play updated", play);
  return (
    <GsapPixieContext.Provider
      value={{
        gsapCtx,
        tl,
        handlePlay,
        handlePause,
        handleReset,
        handleSeek,
        handleSeekTest,
        handleRestart,
        handleRepeat,
        playerTimeRef,
        play,
        totalDuration,
        isDragging,
      }}
    >
      {children}
    </GsapPixieContext.Provider>
  );
};

export { GsapPixieContext, GsapPixieContextProvider, Events };
