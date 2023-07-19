/// import { Elastic } from "gsap";
// import BezierEasing from 'bezier-easing';

export const getAnimByName = (animate, stageWidth, stageHeight, x, y) => {
  let ease = {};
  switch (animate) {
    case "NONE":
    case "none":
      break;
    case "BOUNCE_IN":
      ease.from = {
        duration: 2,
        ease: "bounce.out",
        y: -1500,
      };
      break;
    case "BOUNCE_IN_DOWN":
      ease.from = { ease: "bounce.out", y: -1500, duration: 2 };
      break;
    case "BOUNCE_IN_LEFT":
      ease.from = { ease: "bounce.out", x: -1500, duration: 2 };
      break;
    case "BOUNCE_IN_RIGHT":
      ease.from = { ease: "bounce.out", x: 1500, duration: 2 };
      break;
    case "BOUNCE_IN_UP":
      ease.from = { ease: "bounce.out", y: 1500, duration: 2 };
      break;
    case "BOUNCE_OUT":
      ease.from = { ease: "bounce.in", y: 2, duration: 2 };
      break;
    case "BOUNCE_OUT_DOWN":
      break;
    case "BOUNCE_OUT_LEFT":
      break;
    case "BOUNCE_OUT_RIGHT":
      break;
    case "BOUNCE_OUT_UP":
      break;
    case "FADE_IN":
      ease.to = { ease: "power4.in", alpha: 1, duration: 0.5 };
      break;
    case "FADE_IN_DOWN":
      ease.fromTo = {
        from: { y: -1000, alpha: 0 },
        to: { ease: "power4.in", y: 0, alpha: 1, duration: 1 },
      };
      break;
    case "FADE_IN_LEFT":
      ease.fromTo = {
        from: { x: -1000, alpha: 0 },
        to: { ease: "power4.in", x: 0, alpha: 1, duration: 1 },
      };
      break;
    case "FADE_IN_RIGHT":
      ease.fromTo = {
        from: { x: 2000, alpha: 0 },
        to: { ease: "power4.in", x: 0, alpha: 1, duration: 1 },
      };
      break;
    case "FADE_IN_UP":
      ease.fromTo = {
        from: { y: 2000, alpha: 0 },
        to: { ease: "power4.in", y: 0, alpha: 1, duration: 1 },
      };
      break;
    case "FADE_OUT":
      break;
    case "FADE_OUT_DOWN":
      break;
    case "FADE_OUT_LEFT":
      break;
    case "FADE_OUT_RIGHT":
      break;
    case "FADE_OUT_UP":
      break;
    default:
      break;
  }

  return ease;
};
