import { useState, RefObject, useEffect } from "react";
import * as PIXI from "pixi.js";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

// register flip plugin
gsap.registerPlugin(CustomEase);

gsap.registerEffect({
  name: "pulse",
  effect(target: PIXI.Container) {
    return gsap.fromTo(
      target,
      { x: 1, y: 1 },
      {
        x: 15,
        y: 15,
        duration: 1,
        repeat: 1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  },
});

gsap.registerEffect({
  name: "bouncein",
  effect(target: PIXI.Container) {
    return gsap.from(target, { duration: 2, ease: "bounce.out", y: -1500 });
  },
});

gsap.registerEffect({
  name: "spin",
  effect(targets: PIXI.Container) {
    return gsap.to(targets, {
      rotation: (_: any, el) =>
        gsap.utils.snap(360, Number(gsap.getProperty(el, "rotation")) + 360),
    });
  },
});

export function useGsapEffect(
  target: RefObject<PIXI.Container>,
  effect: string,
  vars: any
) {
  const [animation, setAnimation] = useState();

  useEffect(() => {
    if (gsap.effects[effect] && target.current) {
      console.log("applying animation effect to ", target.current);
      setAnimation(gsap.effects[effect](target.current, vars));
    }
  }, [effect, target, vars]);

  return animation;
}
