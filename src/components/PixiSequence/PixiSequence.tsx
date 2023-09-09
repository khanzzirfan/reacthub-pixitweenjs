import * as React from "react";
import { useRef, useContext } from "react";
import { Container } from "@pixi/react";
import gsap from "gsap";
import * as PIXI from "pixi.js";
import { GsapPixieContext } from "../../providers/GsapPixieContextProvider";
// @ts-ignore
import debounce from "lodash/debounce";

// delcare props for timeline
export interface PixiSequenceProps {
  children: React.ReactNode;
  /** start time of the sequence in seconds */
  startAt: number;
  /** end time of the sequence in seconds */
  endAt: number;
  /** unique id */
  uniqueId?: string;
}

export const PixiSequence = (props: PixiSequenceProps) => {
  const { startAt, endAt, uniqueId } = props;
  const [active, setActive] = React.useState<boolean>(false);
  //// Refs
  const containerRef = useRef<PIXI.Container>(null);
  const childRef = useRef<PIXI.Container>(null);
  const dataRef = useRef<PIXI.Container>(null);
  const dataTweenRef = useRef<gsap.core.Tween>(null);
  const childTweenRef = useRef<gsap.core.Tween>(null);
  //// Context
  const {
    tl,
    totalDuration = 0,
    reverseModeRef,
  } = useContext(GsapPixieContext);

  const gsapOnAlphaStart = () => {
    /// console.log("gsapOnAlphaStart params p ", params, props);
    setActive(true);
    /// setPixiAlpha(params.alpha);
  };

  const gsapOnAlphaComplete = () => {
    /// console.log("gsapOnAlphaComplete params p", params, props);
    setActive(false);
    ///setPixiAlpha(params.alpha);
  };

  const gsapOnUpdateAlpha = () => {
    /// setPixiAlpha(params.alpha);
    if (reverseModeRef.current && dataTweenRef.current && tl.current) {
      const currentTime = tl.current.time();
      if (currentTime > startAt && currentTime < endAt) {
        setActive(() => true);
        if (childRef.current) childRef.current.alpha = 1;
      }
    }
    /// if (childRef.current) childRef.current.alpha = 1;
  };

  // react to a global timeline oncomplete event and setactive state
  const gsapGlobalOnComplete = (startAt: number) => {
    // console.log("gsapGlobalOnComplete set the initial alpha value");
    if (startAt < 0.2) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  React.useEffect(() => {
    const alphaStartParams = {
      onStart: gsapOnAlphaStart,
      onStartParams: [{ alpha: 1 }],
    };
    const alphaCompleteParams = {
      onComplete: gsapOnAlphaComplete,
      onCompleteParams: [{ alpha: startAt > 0 ? 0 : 1 }],
    };

    // less 1second for the tween to load
    const lessOneSecond = Math.max(0, startAt - 1);
    // if (tl.current) {
    //   tl.current.invalidate();
    // }

    const ctx = gsap.context(() => {
      if (containerRef.current && tl.current) {
        // // // set alpha to 1 at the start of the tween
        const startTween = gsap.from(containerRef.current, {
          alpha: startAt < 0.2 ? 1 : 0,
          duration: 0.5,
          ...alphaStartParams,
        });

        // // // add tween to timeline
        tl.current.add(startTween, lessOneSecond);
        // // // set alpha to 0 at the end of the tween
        tl.current.to(
          containerRef.current,
          {
            alpha: 0,
            duration: 0.5,
            overwrite: "auto",
            ...alphaCompleteParams,
          },
          endAt - 0.5
        );

        // add less one second to active true;
        if (startAt < 0.2) setActive(true);

        // // set data duration to timeline
        // @ts-ignore
        dataTweenRef.current = gsap.to(
          dataRef.current,
          // @ts-ignore
          {
            alpha: 1,
            overwrite: "auto",
            duration: Number(endAt) - Number(startAt),
            onUpdate: gsapOnUpdateAlpha,
          },
          startAt
        );
        tl.current.add(dataTweenRef.current, startAt);

        // total duration of the timeline
        if (totalDuration > 0.2) {
          tl.current.call(gsapGlobalOnComplete, [startAt], totalDuration - 0.3);
        }
      }
    });
    return () => {
      dataTweenRef.current?.kill();
      ctx.revert();
    };
  }, [startAt, endAt, totalDuration]);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      if (childRef.current && tl.current) {
        if (childTweenRef.current) childTweenRef.current.kill();
        // @ts-ignore
        childTweenRef.current = gsap.to(childRef.current, {
          alpha: 1,
          duration: 0.5,
          overwrite: "auto",
        });
        // enabled child ref to be active
        tl.current.add(childTweenRef.current, startAt);
      }
    });

    return () => {
      if (childTweenRef.current) childTweenRef.current.kill();
      ctx.revert();
    };
  }, [active, startAt]);

  // add global oncomplete event minus 1 second
  // const totalTimelineDuration = tl.current.totalDuration();
  // console.log("totalDuration", totalDuration, totalTimelineDuration);
  // /console.log("acitve", uniqueId, active, startAt, endAt);

  return (
    <Container ref={containerRef} alpha={1}>
      <Container ref={dataRef}>
        {active && (
          <Container ref={childRef} alpha={startAt < 0.2 ? 1 : 0}>
            {props.children}
          </Container>
        )}
      </Container>
    </Container>
  );
};
