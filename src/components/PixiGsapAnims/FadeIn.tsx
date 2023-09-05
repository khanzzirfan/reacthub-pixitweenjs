import * as React from "react";
import { useRef, useContext } from "react";
import { Container } from "@pixi/react";
import * as PIXI from "pixi.js";
import gsap from "gsap";
import { GsapPixieContext } from "../../providers/GsapPixieContextProvider";

// Declare fadein component types
interface FadeInProps {
  children: React.ReactNode;
  vars: {
    duration: number;
    ease: string;
  };
  effect?: "pluse" | "bouncein" | "spin";
}

function FadeIn(props: FadeInProps) {
  const { children, vars } = props;
  //// Refs
  const containerRef = useRef<PIXI.Container>(null);
  const tweenRef = useRef<gsap.core.Tween>();

  //// Context
  const { tl } = useContext(GsapPixieContext);

  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (tweenRef.current) tweenRef.current.kill();
      if (containerRef.current && tl.current) {
        if (containerRef.current.children.length === 0) return;
        tweenRef.current = gsap.from(containerRef.current?.children, {
          alpha: 0,
          ...vars,
        });

        // add tween to timeline
        tl.current.add(tweenRef.current, 0);
      }
    });
    return () => ctx.revert();
  }, []);

  return <Container ref={containerRef}>{children}</Container>;
}

export { FadeIn };
