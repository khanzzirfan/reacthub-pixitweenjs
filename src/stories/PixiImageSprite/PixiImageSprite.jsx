import React, { Context } from "react";
import { GsapPixieContext } from "../../providers/GsapPixieContextProvider";
import { Stage, Sprite, Container, useApp, withPixiApp } from "@pixi/react";
import * as PIXI from "pixi.js";
import gsap from "gsap";
import isEmpty from "lodash/isEmpty";
import { getAnimByName } from "../../providers/GsapAnim";

export const PixiImageSprite = withPixiApp((props) => {
  /// console.log("allProps", props);
  //// Refs
  const imageRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const imgGroupRef = React.useRef(null);

  //// Context
  const { tl } = React.useContext(GsapPixieContext);

  /// 1001
  console.log("contxt Values", tl);
  const {
    startAt,
    endAt,
    transformation: { x, y, animation } = {},
    ...restProps
  } = props;

  const app = useApp();
  const PixiTransformer = React.useRef(null);

  React.useEffect(() => {
    let ctx = gsap.context(() => {});
    if (containerRef.current && tl.current) {
      const data = {
        duration: Number(endAt) - Number(startAt),
      };

      const ease = getAnimByName(animation);
      ctx = gsap.context(() => {
        if (!isEmpty(ease.from)) {
          tl.current
            .from(containerRef.current, { ...ease.from }, startAt)
            .to(imgGroupRef.current, { alpha: 1, duration: 0.2 }, startAt)
            .from(imgGroupRef.current, { ...data }, startAt)
            .to(containerRef.current, { alpha: 0, duration: 0.2 }, endAt - 0.2);
        } else if (!isEmpty(ease.to)) {
          tl.current
            .to(
              containerRef.current,
              { alpha: 1, duration: 0.2, ...ease.to },
              startAt,
            )
            .from(imgGroupRef.current, { ...data }, startAt)
            .to(containerRef.current, { alpha: 0, duration: 0.2 }, endAt - 0.2);
        } else if (!isEmpty(ease.fromTo)) {
          tl.current
            .fromTo(
              containerRef.current,
              ease.fromTo.from,
              ease.fromTo.to,
              startAt,
            )
            .from(imgGroupRef.current, { ...data }, startAt)
            .to(containerRef.current, { alpha: 0, duration: 0.2 }, endAt - 0.2);
        } else {
          tl.current
            .to(containerRef.current, { alpha: 1, duration: 0.01 }, startAt)
            .from(imgGroupRef.current, { ...data }, startAt)
            .to(
              containerRef.current,
              { alpha: 0, duration: 0.1 },
              Number(endAt) - Number(0.1),
            );
        }
      });
    }
    return () => ctx.revert(); // cleanup!
  }, [animation, startAt, endAt]);

  return (
    <Container ref={containerRef} alpha={0}>
      <Container ref={imgGroupRef}>
        <Sprite
          image="https://assets.codepen.io/693612/surya.svg"
          width={150}
          height={150}
          anchor={0.5}
          ref={imageRef}
          x={x}
          y={y}
          interactive={true}
          pointerdown={() => {
            console.log("pointerdown");
          }}
          pointerup={() => {
            console.log("pointer up");
          }}
          mousedown={() => {
            console.log("mousedown");
          }}
        />
      </Container>
    </Container>
  );
});
