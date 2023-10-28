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
  //// Refs
  const containerRef = useRef<PIXI.Container>(null);
  const childRef = useRef<PIXI.Container>(null);
  const dataRef = useRef<PIXI.Container>(null);
  const dataTweenRef = useRef<gsap.core.Tween>(null);

  // active refs
  const wasInReverseModeRef = useRef<boolean>(false);

  //// Context
  const {
    tl,
    totalDuration = 0,
    reverseModeRef,
  } = useContext(GsapPixieContext);

  const initialEventMode = startAt < 0.2 ? "static" : "none";

  const alphaRef = useRef<number>(1);

  useCustomEventListener(Events.COMPLETE, () => {
    // reset the eventmode.
    if (containerRef.current) {
      // @ts-ignore
      containerRef.current.eventMode = initialEventMode;
    }
  });

  // reset timeline when reverse mode end.
  useCustomEventListener(Events.REVERSE_MODE_END, () => {
    if (tl.current) {
      const currentTime = tl.current.time();
      if (currentTime > startAt && currentTime < endAt) {
        if (childRef.current) childRef.current.alpha = 1;
        if (containerRef.current) {
          containerRef.current.alpha = 1;
          // @ts-ignore
          containerRef.current.eventMode = "static";
        }
      } else {
        if (childRef.current) childRef.current.alpha = 0;
        if (containerRef.current) {
          containerRef.current.alpha = 0;
          // @ts-ignore
          containerRef.current.eventMode = "none";
        }
      }
    }
  });

  const gsapOnUpdateAlpha = () => {
    if (reverseModeRef.current && dataTweenRef.current && tl.current) {
      wasInReverseModeRef.current = true;
      const currentTime = tl.current.time();
      if (currentTime > startAt && currentTime < endAt) {
        if (childRef.current) childRef.current.alpha = 1;
        if (containerRef.current) containerRef.current.alpha = 1;
      } else {
        if (childRef.current) childRef.current.alpha = 0;
        if (containerRef.current) containerRef.current.alpha = 0;
      }
    }
  };

  useCustomEventListener(Events.COMPLETE, () => {
    // gsapGlobalOnComplete(startAt);
  });

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      if (containerRef.current && tl.current) {
        // // set data duration to timeline
        const startTween = gsap.to(containerRef.current, {
          alpha: 1,
          duration: 0.1,
        });

        // @ts-ignore
        dataTweenRef.current = gsap.to(childRef.current, {
          alpha: 1,
          duration: Number(endAt) - Number(startAt),
          onStart: () => {
            if (containerRef.current) {
              containerRef.current.alpha = 1;
              // @ts-ignore
              containerRef.current.eventMode = "static";
              alphaRef.current = 1;
            }
          },
          onUpdate: gsapOnUpdateAlpha,
          onComplete: () => {
            if (containerRef.current) {
              containerRef.current.alpha = 0;
              // @ts-ignore
              containerRef.current.eventMode = "none";
              alphaRef.current = 0;
            }
          },
        });
        // add tween
        tl.current.add([startTween, dataTweenRef.current], startAt);
      }
    });
    return () => {
      if (dataTweenRef.current) {
        tl.current.remove(dataTweenRef.current);
        dataTweenRef.current.progress(0).kill();
      }
      ctx.revert();
    };
  }, [startAt, endAt, totalDuration, uniqueId]);

  console.log("current alpha with time", containerRef?.current?.alpha);

  return (
    <Container
      ref={containerRef}
      alpha={startAt < 0.2 ? 1 : 0} //@ts-ignore
      eventMode={startAt < 0.2 ? "static" : "none"}
    >
      <Container ref={dataRef}>
        <Container ref={childRef} alpha={1}>
          {props.children}
        </Container>
      </Container>
    </Container>
  );
};
