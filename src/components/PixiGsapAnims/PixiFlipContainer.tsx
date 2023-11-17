import { useRef, useContext } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import * as React from "react";
import { Container } from "@pixi/react";
import * as PIXI from "pixi.js";
import { GsapPixieContext } from "../../providers/GsapPixieContextProvider";
import { uniqueId as uId } from "lodash";

// register flip plugin
gsap.registerPlugin(Flip);

// Declare fadein component types
interface PixiFlipContainerProps {
  children: React.ReactNode;
  startAt: number;
  duration: number;
  uniqueId?: string;
}

function PixiFlipContainer(props: PixiFlipContainerProps) {
  const tempId = uId() as unknown as string;
  const { children, startAt, duration, uniqueId = tempId } = props;

  //// Refs
  const containerRef = useRef<PIXI.Container>(null);
  const tweenRef = useRef<gsap.core.Tween>();

  //// Context
  const { tl } = useContext(GsapPixieContext);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      if (tweenRef.current) tweenRef.current.kill();
      if (containerRef.current && tl.current) {
        // @ts-ignore
        tweenRef.current = Flip.from(containerRef.current, {
          duration,
          stagger: 0.1,
          ease: "power1.inOut",
          onEnter: () => {
            return gsap.fromTo(
              containerRef.current,
              {
                alpha: 0,
              },
              {
                alpha: 1,
                delay: 0.2,
                duration: 0.3,
              }
            );
          },
          onLeave: () => {
            return gsap.to(containerRef.current, {
              alpha: 0,
            });
          },
        });

        // add tween to timeline
        tl.current.add(tweenRef.current, 0);
      }
    });
    return () => {
      if (tweenRef.current) tweenRef.current.kill();
      ctx.revert();
    };
  }, [startAt, duration]);

  return (
    <Container ref={containerRef} data-flip-id={uniqueId}>
      {children}
    </Container>
  );
}

export { PixiFlipContainer };

/*
 onStart: () => {
            tl.current.addLabel("startFlip", startAt);
            tl.current.addLabel("endFlip", endAt);
          },
          onUpdate: () => {
            console.log("update flip");
            /// const currentTime = gsap.globalTimeline.time();
            // // Check if the component should exit
            // if (currentTime >= endAt) {
            //   // Use GSAP's complete() method to ensure the component exits immediately
            //   tl.current.complete();
            // }
          },
          **/
