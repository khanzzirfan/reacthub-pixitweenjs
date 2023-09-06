import * as React from "react";
import { useRef, useContext } from "react";
import { Container } from "@pixi/react";
import gsap from "gsap";
import * as PIXI from "pixi.js";
import { GsapPixieContext } from "../../providers/GsapPixieContextProvider";

// delcare props for timeline
export interface PixiSequenceProps {
  children: React.ReactNode;
  startAt: number;
  endAt: number;
}

export const PixiSequence = (props: PixiSequenceProps) => {
  const { startAt, endAt } = props;
  /// const [active, setActive] = React.useState<boolean>(false);
  console.log("PixiSequenceProps", props);
  //// Refs
  const containerRef = useRef<PIXI.Container>(null);
  /// const childRef = useRef<PIXI.Container>(null);
  const dataRef = useRef<PIXI.Container>(null);
  //// const childTweenRef = useRef<gsap.core.Tween>(null);
  //// Context
  const { tl } = useContext(GsapPixieContext);

  const gsapOnAlphaStart = (params: { alpha: number }) => {
    console.log("gsapOnAlphaStart params p ", params, props);
    // setActive(true);
    /// setPixiAlpha(params.alpha);
  };

  const gsapOnAlphaComplete = (params: { alpha: number }) => {
    console.log("gsapOnAlphaComplete params p", params, props);
    // setActive(false);
    ///setPixiAlpha(params.alpha);
  };

  // react to a global timeline oncomplete event and setactive state
  // const gsapGlobalOnComplete = (startAt: number) => {
  //   console.log("gsapGlobalOnComplete set the initial alpha value");
  //   if (startAt < 0.2) {
  //     setActive(true);
  //   } else {
  //     setActive(false);
  //   }
  // };

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
    const lessOneSecond = Math.max(0, startAt);
    // if (tl.current) {
    //   tl.current.invalidate();
    // }

    if (containerRef.current && tl.current) {
      console.log("adding tween to timeline > 1 sec", lessOneSecond);

      // // // set alpha to 1 at the start of the tween
      const startTween = gsap.from(containerRef.current, {
        alpha: startAt < 0.2 ? 1 : 0,
        duration: Math.min(0.5, endAt - startAt),
        overwrite: "auto",
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

      // set data duration to timeline
      tl.current.fromTo(
        dataRef.current,
        { alpha: 1 },
        {
          alpha: 1,
          overwrite: "auto",
          duration: Number(endAt) - Number(startAt),
        },
        startAt
      );
    }
    // if (totalDuration > 0.2) {
    //   tl.current.call(gsapGlobalOnComplete, [startAt], totalDuration);
    // }
    return () => {
      // ctx.revert();
    };
  }, [startAt, endAt]);

  // React.useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     if (childRef.current && tl.current) {
  //       if (childTweenRef.current) childTweenRef.current.kill();
  //       // @ts-ignore
  //       childTweenRef.current = gsap.to(childRef.current, {
  //         alpha: 1,
  //         duration: 0.5,
  //         overwrite: "auto",
  //       });
  //       // enabled child ref to be active
  //       tl.current.add(childTweenRef.current, startAt);
  //     }
  //   });

  //   return () => {
  //     console.log("unmounting sequence child");
  //     if (childTweenRef.current) childTweenRef.current.kill();
  //     ctx.revert();
  //   };
  // }, [active, startAt]);

  // add global oncomplete event minus 1 second
  const totalDuration = tl.current.totalDuration();
  console.log("totalDuration", totalDuration);

  return (
    <Container ref={containerRef} alpha={1}>
      <Container ref={dataRef} alpha={startAt < 0.2 ? 1 : 0}>
        {props.children}
      </Container>
    </Container>
  );
};
