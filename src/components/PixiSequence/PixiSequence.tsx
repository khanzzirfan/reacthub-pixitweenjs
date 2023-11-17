import * as React from "react";
import { useRef, useContext } from "react";
import { Container } from "@pixi/react";
import gsap from "gsap";
import * as PIXI from "pixi.js";
import { GsapPixieContext } from "../../providers/GsapPixieContextProvider";

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

  //// Context
  const { tl, totalDuration = 0 } = useContext(GsapPixieContext);

  // reset timeline when reverse mode end.
  React.useEffect(() => {
    const ctx = gsap.context(() => {
      if (containerRef.current && tl.current) {
        // kill tween before adding it.
        if (dataTweenRef.current) {
          dataTweenRef.current.kill();
          tl.current.remove(dataTweenRef.current);
        }

        const initialAlpha = startAt < 0.2 ? 1 : 0;
        // @ts-ignore
        dataTweenRef.current = gsap
          .timeline()
          .set(containerRef.current, { alpha: initialAlpha })
          .to(containerRef.current, {
            pixi: {
              alpha: 1,
              eventMode: "static",
            },
            duration: Number(endAt) - Number(startAt),
          })
          .set(containerRef.current, { alpha: 0, eventMode: "none" });
        // add tween
        tl.current.add([dataTweenRef.current], startAt);
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
