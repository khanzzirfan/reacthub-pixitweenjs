import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import gsap from "gsap";
import { emitCustomEvent } from "react-custom-events";
// import { Power4 } from "gsap";

// Context has been created
const GsapPixieContext = React.createContext({});

const Events = {
  STOP: "GSAP_STOP",
  PAUSE: "GSAP_PAUSE",
  PLAY: "GSAP_PLAY",
  RESUME: "GSAP_RESUME",
};
// Provider
const GsapPixieContextProvider = ({ children }) => {
  const [play, setPlay] = useState(false);
  const [frameNumber, setFrameNumber] = useState(0);

  const tl = useRef();
  const gsapCtx = useRef();
  const playerTimeRef = useRef(0.0);

  // gsap.ticker.add((time, deltaTime, frame) => {
  //   console.log("timeframe", time, deltaTime, frame);
  //   setFrameNumber(frame);
  // });

  const parentElementRef = useRef();
  // передаем предка анимируемых элементов
  const q = gsap.utils.selector(parentElementRef);

  useLayoutEffect(() => {
    gsapCtx.current = gsap.context(() => {
      // add a box and circle animation to our timeline and play on first render
      console.log("creating timeline");
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap.timeline({
        paused: true,
        defaults: { duration: 0 },
      });
    });
    return () => gsapCtx.revert();
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

  // const timeline = React.useCallback(
  //   gsap.timeline({
  //     paused: true,
  //     defaults: { duration: 0, onUpdate: onUpdate },
  //   }),
  //   [],
  // );

  useEffect(() => {
    const timeline = tl.current;
    timeline
      .eventCallback("onUpdate", function () {
        // console.log(timeline.progress());
        onUpdate();
      })
      .eventCallback("onComplete", function () {
        timeline.seek(0.01);
        timeline.pause();
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

  const addTotalDuration = (duration) => {
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
  }, []);

  const handleRepeat = useCallback(() => {
    const timeline = tl.current;

    timeline.repeat(1);
    timeline.restart();
  }, []);

  const handleSeek = useCallback(() => {
    const timeline = tl.current;
    timeline.seek(5);
  }, []);

  const setDurationTimeline = useCallback(() => {
    const timeline = tl.current;

    timeline.totalDuration(3);
  }, []);

  const handlePause = () => {
    const timeline = tl.current;

    timeline.pause();
    emitCustomEvent(Events.PAUSE);
  };

  const handlePlay = () => {
    const timeline = tl.current;

    timeline.resume();
    emitCustomEvent(Events.RESUME);
  };

  return (
    <GsapPixieContext.Provider
      value={{
        gsapCtx,
        tl,
      }}
    >
      {children}
    </GsapPixieContext.Provider>
  );
};

export { GsapPixieContext, GsapPixieContextProvider, Events };
