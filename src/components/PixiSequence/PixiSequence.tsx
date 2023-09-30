import * as React from "react";
import { useRef, useContext } from "react";
import { Container } from "@pixi/react";
import gsap from "gsap";
import * as PIXI from "pixi.js";
import { useCustomEventListener } from "../../events";
import {
  GsapPixieContext,
  Events,
} from "../../providers/GsapPixieContextProvider";
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

  // active refs
  const activeRef = useRef<boolean>(false);
  const wasInReverseModeRef = useRef<boolean>(false);

  //// Context
  const {
    tl,
    totalDuration = 0,
    reverseModeRef,
  } = useContext(GsapPixieContext);

  // reset timeline when reverse mode end.
  useCustomEventListener(Events.REVERSE_MODE_END, () => {
    if (tl.current) {
      const currentTime = tl.current.time();
      if (currentTime < Math.max(0, startAt - 1)) {
        setActive(() => false);
        activeRef.current = false;
        if (dataTweenRef.current) dataTweenRef.current.revert();
        if (childTweenRef.current) childTweenRef.current.revert();
      }
    }
  });

  const gsapOnAlphaStart = () => {
    if (!activeRef.current) {
      activeRef.current = true;
      setActive(true);
    }
  };

  const gsapOnAlphaComplete = () => {
    setActive(false);
    activeRef.current = false;
  };

  const gsapOnUpdateAlpha = () => {
    if (reverseModeRef.current && dataTweenRef.current && tl.current) {
      wasInReverseModeRef.current = true;
      const currentTime = tl.current.time();
      if (currentTime > startAt && currentTime < endAt) {
        setActive(() => true);
        activeRef.current = true;
        if (childRef.current) childRef.current.alpha = 1;
      } else {
        setActive(() => false);
        activeRef.current = false;
        if (childRef.current) childRef.current.alpha = 0;
      }
    }
  };

  // react to a global timeline oncomplete event and setactive state
  const gsapGlobalOnComplete = (startAt: number) => {
    // console.log("gsapGlobalOnComplete set the initial alpha value");
    if (startAt < 0.2) {
      setActive(true);
      activeRef.current = true;
    } else {
      setActive(false);
      activeRef.current = false;
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
        if (startAt < 0.2) {
          setActive(true);
          activeRef.current = true;
        }

        // // set data duration to timeline
        // @ts-ignore
        dataTweenRef.current = gsap.to(
          dataRef.current,
          // @ts-ignore
          {
            alpha: 1,
            overwrite: "auto",
            duration: Number(endAt) - Number(startAt),
            onStart: gsapOnAlphaStart,
            onStartParams: [{ alpha: 1 }],
            onUpdate: gsapOnUpdateAlpha,
            onComplete: gsapOnAlphaComplete,
            onCompleteParams: [{ alpha: startAt > 0 ? 0 : 1 }],
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
    activeRef.current = active;
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

    // add a timeout of few seconds if the childref is not already actively running. make it to progress
    const timeoutId = setTimeout(() => {
      if (childTweenRef.current && tl.current && dataTweenRef.current) {
        if (
          !childTweenRef.current?.isActive() &&
          childTweenRef.current?.time() < 0.2
        ) {
          // current time of dataTweenRef
          const currentTime = dataTweenRef.current?.time();
          // set it in the childTweenRef
          childTweenRef.current?.time(currentTime);
        }
      }
    }, 50); // TODO: make this a variable

    return () => {
      if (childTweenRef.current) childTweenRef.current.kill();
      ctx.revert();
      clearTimeout(timeoutId);
    };
  }, [active, startAt]);

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
