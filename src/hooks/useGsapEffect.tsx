import { useCallback } from "react";
import * as PIXI from "pixi.js";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { Animations } from "../types/Animations";
import { PixiPlugin } from "gsap/PixiPlugin";

// register Pixi Plugin
gsap.registerPlugin(PixiPlugin);
// give the plugin a reference to the PIXI object
PixiPlugin.registerPIXI(PIXI);

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
        {
          pixi: {
            scaleX: 0.9,
            scaleY: 0.9,
          },
        },
        {
          pixi: {
            scaleX: 1.2,
            scaleY: 1.2,
          },
          duration: 0.5,
          ease: "slow",
        }
      )
      .to(target, { pixi: { scaleX: 1, scaleY: 1, ...vars }, duration: 0.5 });
  },
});

/** GSAP Effect = SHAKE */
gsap.registerEffect({
  name: "SHAKE",
  effect(target: PIXI.Container, vars: any) {
    return gsap
      .timeline()
      .to(target, { duration: 0.1, pixi: { x: "+=5" } })
      .to(target, { duration: 0.1, pixi: { x: "-=10" } })
      .to(target, { duration: 0.1, pixi: { x: "+=10" } })
      .to(target, { duration: 0.1, pixi: { x: "-=10" } })
      .to(target, { duration: 0.1, pixi: { x: "+=5" } })
      .to(target, { pixi: { ...vars }, duration: 0.5 });
  },
});

/** GSAP Effect = SWING */
gsap.registerEffect({
  name: "SWING",
  effect(target: PIXI.Container, vars: any) {
    return gsap
      .timeline()
      .to(target, { duration: 0.5, pixi: { rotation: 1 } })
      .to(target, { duration: 0.5, pixi: { rotation: -1.5 } })
      .to(target, { pixi: { rotation: 0, ...vars }, duration: 0.5 });
  },
});

/** GSAP Effect = JELLO */
gsap.registerEffect({
  name: "JELLO",
  effect(target: PIXI.Container, vars: any) {
    return gsap
      .timeline()
      .to(target, {
        duration: 0.3,
        pixi: { scaleX: 0.5, rotation: -1 },
      })
      .to(target, { duration: 0.4, pixi: { scaleX: 1.5, rotation: 1 } })
      .to(target, { duration: 0.3, pixi: { scaleX: 1, rotation: 0 } })
      .to(target, { pixi: { rotation: 0, ...vars }, duration: 0.5 });
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
        pixi: {
          scaleX: 0.5,
          x: vars.x * -0.5,
        },
      })
      .to(target, {
        duration: 0.3,
        pixi: {
          scaleX: 1.5,
          x: vars.x * 1.5,
        },
      })
      .to(target, {
        duration: 0.3,
        pixi: {
          scaleX: 0.5,
          x: vars.x * -0.01,
        },
      })
      .to(target, { duration: 0.3, pixi: { scaleX: 1, x: vars.x } })
      .to(target, {
        rotation: 0,
        pixi: { ...vars, rotation: 0 },
        duration: 0.5,
      });
  },
});

/** GSAP Effect = NONE */
gsap.registerEffect({
  name: "NONE", // @ts-ignore
  effect(target: PIXI.Container, vars: any) {
    return gsap.timeline().to(target, {
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
    return gsap.timeline().fromTo(
      target,
      {
        pixi: {
          scaleX: 1.5,
          scaleY: 1.5,
        },
      },
      {
        ...vars,
        pixi: {
          x: vars?.x,
          y: vars?.y,
          scaleX: 1,
          scaleY: 1,
        },
        duration: 2,
        ease: "bounce.out",
      }
    );
  },
});

/** GSAP Effect = BOUNCE_IN_DOWN */
gsap.registerEffect({
  name: "BOUNCE_IN_DOWN",
  effect(target: PIXI.Container, vars: any) {
    return gsap.timeline().from(target, {
      duration: 2,
      ease: "bounce.out",
      immediateRender: true,
      pixi: {
        ...vars,
        x: vars?.x,
        y: -1500,
        alpha: 0,
      },
    });
  },
});

/** GSAP Effect = BOUNCE_IN_LEFT */
gsap.registerEffect({
  name: "BOUNCE_IN_LEFT",
  effect(target: PIXI.Container, vars: any) {
    return gsap.timeline().from(target, {
      ease: "bounce.out",
      pixi: {
        ...vars,
        x: -1500,
        duration: 2,
        alpha: 0,
      },
    });
  },
});

/** GSAP Effect = BOUNCE_IN_RIGHT */
gsap.registerEffect({
  name: "BOUNCE_IN_RIGHT",
  effect(target: PIXI.Container, vars: any) {
    return gsap.timeline().from(target, {
      ease: "bounce.out",
      duration: 2,
      pixi: {
        ...vars,
        x: 1500,
      },
    });
  },
});

/** GSAP Effect = BOUNCE_IN_UP */
gsap.registerEffect({
  name: "BOUNCE_IN_UP",
  effect(target: PIXI.Container, vars: any) {
    return gsap.timeline().from(target, {
      ease: "bounce.out",
      pixi: {
        ...vars,
        y: 1500,
      },
      duration: 2,
    });
  },
});

/** GSAP Effect = BOUNCE_OUT */
gsap.registerEffect({
  name: "BOUNCE_OUT",
  effect(target: PIXI.Container, vars: any) {
    return gsap.timeline().from(target, {
      ...vars,
      ease: "bounce.in",
      pixi: {
        y: 2000,
      },
      duration: 1.5,
    });
  },
});

/** GSAP Effect = FADE_IN */
gsap.registerEffect({
  name: "FADE_IN",
  effect(target: PIXI.Container) {
    return gsap.timeline().fromTo(
      target,
      {
        alpha: 0,
      },
      {
        ease: "power4.in",
        alpha: 1,
        duration: 1,
      }
    );
  },
});

/** GSAP Effect = FADE_IN_DOWN */
gsap.registerEffect({
  name: "FADE_IN_DOWN",
  effect(target: PIXI.Container, vars: any) {
    return gsap.timeline().fromTo(
      target,
      {
        pixi: {
          y: -1000,
          alpha: 0,
        },
      },
      {
        duration: 1,
        ease: "power4.in",
        pixi: {
          y: 0,
          alpha: 1,
          ...vars,
        },
      }
    );
  },
});

/** GSAP Effect = FADE_IN_LEFT */
gsap.registerEffect({
  name: "FADE_IN_LEFT",
  effect(target: PIXI.Container, vars: any) {
    return gsap.timeline().fromTo(
      target,
      {
        pixi: {
          alpha: 0,
          x: -1000,
        },
      },
      {
        ease: "power4.in",
        pixi: {
          x: 0,
          alpha: 1,
          ...vars,
        },
        duration: 1,
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
        pixi: {
          x: 2000,
          alpha: 0,
        },
      },
      {
        duration: 1,
        ease: "power4.in",
        pixi: {
          x: 0,
          alpha: 1,
          ...vars,
        },
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
        pixi: {
          y: 2000,
          alpha: 0,
        },
      },
      {
        duration: 0.8,
        ease: "power4.in",
        pixi: {
          y: 0,
          alpha: 1,
          ...vars,
        },
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

export function useGsapEffect(): { updateEffect: any } {
  const updateEffect = useCallback(
    (
      target: PIXI.Container,
      effect: Animations | string,
      vars: any
    ): gsap.core.Tween | gsap.core.Timeline => {
      if (gsap.effects[effect] && target) {
        return gsap.effects[effect](target, vars);
      }
      return gsap.effects["NONE"](target, vars);
    },
    []
  );

  return { updateEffect };
}
