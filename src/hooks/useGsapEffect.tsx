import { useState, RefObject } from "react";
import useDeepEffect from "./useDeepEffect";
import * as PIXI from "pixi.js";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { Animations } from "../types/Animations";

// register flip plugin
gsap.registerPlugin(CustomEase);

// Register a custom ease for the spring bounce effect
CustomEase.create("springBounce", "0.32, 1.06, 0.61, 0.93");

/** GSAP Effect = PULSE */
gsap.registerEffect({
  name: "PULSE",
  effect(target: PIXI.Container, vars: any) {
    return gsap
      .timeline()
      .fromTo(
        target,
        { width: vars?.width * 0.9, height: vars?.height * 0.9 },
        {
          width: vars?.width * 1.1,
          height: vars?.height * 1.1,
          duration: 0.5,
          ease: "slow",
        }
      )
      .to(target, { ...vars, duration: 0.5 });
  },
});

/** GSAP Effect = SHAKE */
gsap.registerEffect({
  name: "SHAKE",
  effect(target: PIXI.Container, vars: any) {
    return gsap
      .timeline()
      .to(target, { duration: 0.1, x: "+=5" })
      .to(target, { duration: 0.1, x: "-=10" })
      .to(target, { duration: 0.1, x: "+=10" })
      .to(target, { duration: 0.1, x: "-=10" })
      .to(target, { duration: 0.1, x: "+=5" })
      .to(target, { ...vars, duration: 0.5 });
  },
});

/** GSAP Effect = SWING */
gsap.registerEffect({
  name: "SWING",
  effect(target: PIXI.Container, vars: any) {
    return gsap
      .timeline()
      .to(target, { duration: 0.5, rotation: 1 })
      .to(target, { duration: 0.5, rotation: -1 })
      .to(target, { rotation: 0, ...vars, duration: 0.5 });
  },
});

/** GSAP Effect = JELLO */
gsap.registerEffect({
  name: "JELLO",
  effect(target: PIXI.Container, vars: any) {
    return gsap
      .timeline()
      .to(target, { duration: 0.3, width: vars.width * 0.5, rotation: -1 })
      .to(target, { duration: 0.4, width: vars.width * 1.2, rotation: 1 })
      .to(target, { duration: 0.3, width: vars.width, rotation: 0 })
      .to(target, { rotation: 0, ...vars, duration: 0.5 });
  },
});

/** GSAP Effect = JELLO */
gsap.registerEffect({
  name: "WOOBLE",
  effect(target: PIXI.Container, vars: any) {
    return gsap
      .timeline()
      .to(target, {
        duration: 0.3,
        width: vars.width * 0.5,
        x: vars.x * -0.5,
      })
      .to(target, {
        duration: 0.3,
        width: vars.width * 1.5,
        x: vars.x * 1.5,
      })
      .to(target, {
        duration: 0.3,
        width: vars.width * 0.5,
        x: vars.x * -0.01,
      })
      .to(target, { duration: 0.3, width: vars.width, x: vars.x })
      .to(target, { rotation: 0, ...vars, duration: 0.5 });
  },
});

/** GSAP Effect = NONE */
gsap.registerEffect({
  name: "NONE", // @ts-ignore
  effect(target: PIXI.Container, vars: any) {
    return gsap.to(target, {
      duration: 0,
    });
  },
});

/** GSAP Effect = FLASH */
gsap.registerEffect({
  name: "FLASH",
  effect(target: PIXI.Container, vars: any) {
    // Apply the custom flash animation with PixiJS-specific properties
    return gsap
      .timeline()
      .to(target, { duration: 0.2, alpha: 0 })
      .to(target, { duration: 0.2, alpha: 1 })
      .to(target, { duration: 0.2, alpha: 0 })
      .to(target, { duration: 0.2, alpha: 1 })
      .to(target, { duration: 0.2, alpha: 0 })
      .to(target, { duration: 0.2, alpha: 1, ...vars });
  },
});

/** GSAP Effect = BOUNCE_IN */
gsap.registerEffect({
  name: "BOUNCE_IN",
  effect(target: PIXI.Container, vars: any) {
    // Apply the custom bounceIn animation with PixiJS-specific properties
    return gsap.from(target, {
      ...vars,
      duration: 2,
      width: vars?.width * 1.5,
      height: vars?.height * 1.5,
      ease: "bounce.out",
    });
  },
});

/** GSAP Effect = BOUNCE_IN_DOWN */
gsap.registerEffect({
  name: "BOUNCE_IN_DOWN",
  effect(target: PIXI.Container, vars: any) {
    return gsap.from(target, {
      ...vars,
      duration: 2,
      ease: "bounce.out",
      y: -1500,
      alpha: 0,
    });
  },
});

/** GSAP Effect = BOUNCE_IN_LEFT */
gsap.registerEffect({
  name: "BOUNCE_IN_LEFT",
  effect(target: PIXI.Container, vars: any) {
    return gsap.from(target, {
      ...vars,
      ease: "bounce.out",
      x: -1500,
      duration: 2,
      alpha: 0,
    });
  },
});

/** GSAP Effect = BOUNCE_IN_RIGHT */
gsap.registerEffect({
  name: "BOUNCE_IN_RIGHT",
  effect(target: PIXI.Container, vars: any) {
    return gsap.from(target, {
      ...vars,
      ease: "bounce.out",
      x: 1500,
      duration: 2,
    });
  },
});

/** GSAP Effect = BOUNCE_IN_UP */
gsap.registerEffect({
  name: "BOUNCE_IN_UP",
  effect(target: PIXI.Container, vars: any) {
    return gsap.from(target, {
      ...vars,
      ease: "bounce.out",
      y: 1500,
      duration: 2,
    });
  },
});

/** GSAP Effect = BOUNCE_OUT */
gsap.registerEffect({
  name: "BOUNCE_OUT",
  effect(target: PIXI.Container, vars: any) {
    return gsap.from(target, {
      ...vars,
      ease: "bounce.in",
      y: 2000,
      duration: 1.5,
    });
  },
});

/** GSAP Effect = FADE_IN */
gsap.registerEffect({
  name: "FADE_IN",
  effect(target: PIXI.Container, vars: any) {
    return gsap.fromTo(
      target,
      {
        alpha: 0,
      },
      {
        ease: "power4.in",
        alpha: 1,
        duration: 1,
        ...vars,
      }
    );
  },
});

/** GSAP Effect = FADE_IN_DOWN */
gsap.registerEffect({
  name: "FADE_IN_DOWN",
  effect(target: PIXI.Container, vars: any) {
    return gsap.fromTo(
      target,
      {
        y: -1000,
        alpha: 0,
      },
      {
        ease: "power4.in",
        y: 0,
        alpha: 1,
        duration: 1,
        ...vars,
      }
    );
  },
});

/** GSAP Effect = FADE_IN_LEFT */
gsap.registerEffect({
  name: "FADE_IN_LEFT",
  effect(target: PIXI.Container, vars: any) {
    return gsap.fromTo(
      target,
      {
        x: -1000,
        alpha: 0,
      },
      {
        ease: "power4.in",
        x: 0,
        alpha: 1,
        duration: 1,
        ...vars,
      }
    );
  },
});

/** GSAP Effect = FADE_IN_RIGHT */
gsap.registerEffect({
  name: "FADE_IN_RIGHT",
  effect(target: PIXI.Container, vars: any) {
    return gsap.fromTo(
      target,
      {
        x: 2000,
        alpha: 0,
      },
      {
        ease: "power4.in",
        x: 0,
        alpha: 1,
        duration: 1,
        ...vars,
      }
    );
  },
});

/** GSAP Effect = FADE_IN_UP */
gsap.registerEffect({
  name: "FADE_IN_UP",
  effect(target: PIXI.Container, vars: any) {
    return gsap.fromTo(
      target,
      {
        y: 2000,
        alpha: 0,
      },
      {
        ease: "power4.in",
        y: 0,
        alpha: 1,
        duration: 0.8,
        ...vars,
      }
    );
  },
});

gsap.registerEffect({
  name: "SPIN",
  effect(targets: PIXI.Container) {
    return gsap.to(targets, {
      rotation: (_: any, el) =>
        gsap.utils.snap(360, Number(gsap.getProperty(el, "rotation")) + 360),
    });
  },
});

export function useGsapEffect(
  target: RefObject<PIXI.Container>,
  effect: Animations | string,
  vars: any
): gsap.core.Tween {
  const [animation, setAnimation] = useState<gsap.core.Tween>(
    gsap.to(target, { duration: 0 })
  );

  useDeepEffect(() => {
    if (gsap.effects[effect] && target.current) {
      setAnimation(gsap.effects[effect](target.current, vars));
    }
  }, [effect, target, vars]);

  return animation;
}
