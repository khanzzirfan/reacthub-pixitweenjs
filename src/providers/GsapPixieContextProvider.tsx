import * as React from "react";
import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import gsap from "gsap";
import { emitCustomEvent, useCustomEventListener } from "../events";

interface GsapPixieContextProps {
  gsapCtx: React.MutableRefObject<any>;
  tl: React.MutableRefObject<any>;
  isDragging: boolean;
  handlePlay: () => void;
  handlePause: () => void;
  handleReset: () => void;
  handleSeek: (value: number) => void;
  handleSeekTest: () => void;
  handleRestart: () => void;
  handleRepeat: () => void;
  playerTimeRef: React.MutableRefObject<number>;
  getTimelineDuration: () => number;
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
  COMPLETE: "GSAP_COMPLETE",
  SEEK_START: "GSAP_SEEK_START",
  SEEK_END: "GSAP_SEEK_END",
  SCRUBBER_SEEK: "GSAP_SCRUBBER_SEEK",
  SCRUBBER_PROGRESS_UPDATE: "GSAP_SCRUBBER_PROGRESS_UPDATE",
  SCRUBBER_PLAY: "GSAP_SCRUBBER_PLAY",
  SCRUBBER_PAUSE: "GSAP_SCRUBBER_PAUSE",
  TRANSFORMER_DRAG_START: "TRANSFORMER_DRAG_START",
  TRANSFORMER_DRAG_END: "TRANSFORMER_DRAG_END",
};

// Provider
const GsapPixieContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  /// const [play, setPlay] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const tl = useRef<gsap.core.Timeline>();
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
      tl.current && tl.current.clear();
      tl.current && gsap.killTweensOf(tl.current);
      tl.current = gsap.timeline({
        paused: true,
        defaults: { duration: 0 },
      });
    });
    return () => {
      if (tl.current) {
        tl.current.progress(0).kill();
        gsap.killTweensOf(tl.current);
      }
      gsapCtx.current.revert();
    };
  }, []);

  // gsap.ticker.add(() => {
  //   console.log("timeframe");
  //   // setFrameNumber(frame);
  //   if (tl.current && getTimelineDuration) {
  //     setInternalDuration(getTimelineDuration());
  //   }
  // });

  const onUpdate = useCallback(() => {
    /// console.log("update event callback");
    if (tl.current) {
      const timeline = tl.current;
      let now = timeline.time();
      // let elapsedTime;
      // if (playerTimeRef.current) {
      //   elapsedTime = now - playerTimeRef.current;
      // }
      // console.log(
      //   `elapseTime :${elapsedTime} now:${now} playerTime:${playerTimeRef.current}`
      // );
      //time = now;
      playerTimeRef.current = now;
    }
  }, []);

  // set the total duration based on the delayed duration value
  // useEffect(() => {
  //   setTotalDuration(delayedDuration);
  // }, [delayedDuration]);

  useEffect(() => {
    if (tl.current) {
      const timeline = tl.current;
      timeline
        .eventCallback("onStart", function () {
          // console.log(
          //   "Gsap Context onstart",
          //   timeline.progress(),
          //   playerTimeRef.current
          // );
          // setPlay(true);
          // onUpdate();
        })
        .eventCallback("onInterrupt", function () {
          /// console.log("onInterrupt", timeline.progress());
          timeline.pause();
          onUpdate();
        })
        .eventCallback("onUpdate", function () {
          // console.log(
          //   "Gsap Context onupdate",
          //   timeline.progress(),
          //   playerTimeRef.current
          // );
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
        .eventCallback("onComplete", function () {
          timeline.pause();
          timeline.revert();
          // emit event timeline complete
          emitCustomEvent(Events.COMPLETE, { uniqueId: "timeline" });
          console.log("Emitted events");
          onUpdate();
        });
    }
  }, []);

  const handleReset = useCallback(() => {
    tl.current && tl.current.revert();
  }, []);

  const handleRestart = useCallback(() => {
    tl.current && tl.current.restart();
    // setPlay(true);
  }, []);

  const handleRepeat = useCallback(() => {
    if (tl.current) {
      const timeline = tl.current;
      timeline.repeat(1);
      timeline.restart();
    }
    // setPlay(true);
  }, []);

  // /**
  //  * Invalidate and restore the timeline to its current progress value
  //  */
  // const handleInvalidateAndRestore = useCallback(() => {
  //   // track interval id
  //   let intervalId: NodeJS.Timeout;
  //   if (tl.current) {
  //     const timeline = tl.current;
  //     console.log("handle invalidate and restore", timeline.progress());
  //     // set current progress and then invalidate
  //     const currentProgress = timeline.progress();
  //     playerProgressRef.current = currentProgress;
  //     timeline.invalidate().progress(currentProgress);
  //     intervalId = setInterval(() => {
  //       timeline.progress(currentProgress);
  //     }, 500);
  //   }
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  const handleSeek = useCallback((value: number) => {
    if (tl.current) {
      const timeline = tl.current;
      timeline.seek(value);
    }
  }, []);

  const handleSeekTest = useCallback(() => {
    if (tl.current) {
      const timeline = tl.current;
      timeline.seek(4);
    }
  }, []);

  const handleProgressUpdate = (progress: number) => {
    if (progress > 0) {
      // const timeline = tl.current;
      // timeline.current.progress(progress);
      // timeline.current.pause();
    }
  };

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
    if (tl.current) {
      const timeline = tl.current;
      timeline.pause();
      emitCustomEvent(Events.PAUSE);
    }
  };

  const handlePlay = () => {
    if (tl.current) {
      const timeline = tl.current;
      // setPlay(true);
      timeline.resume();
      emitCustomEvent(Events.RESUME);
    }
  };

  /** Event listener dragging */
  useCustomEventListener(Events.SEEK_START, () => {
    setIsDragging(true);
  });

  useCustomEventListener(Events.SCRUBBER_PLAY, () => {
    handlePlay();
  });

  useCustomEventListener(Events.SCRUBBER_PAUSE, () => {
    handlePause();
  });

  useCustomEventListener(Events.SCRUBBER_SEEK, (time: number) => {
    handleSeek(time);
  });

  useCustomEventListener(Events.SEEK_END, () => {
    setIsDragging(false);
  });

  useCustomEventListener(
    Events.SCRUBBER_PROGRESS_UPDATE,
    (progress: number) => {
      handleProgressUpdate(progress);
    }
  );
  /** EOF event listners */

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
        isDragging,
        getTimelineDuration,
      }}
    >
      {children}
    </GsapPixieContext.Provider>
  );
};

export { GsapPixieContext, GsapPixieContextProvider, Events };
