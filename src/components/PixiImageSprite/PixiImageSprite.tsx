import * as React from "react";
import { useRef } from "react";
import { Sprite, Container } from "@pixi/react";
import * as PIXI from "pixi.js";
// @ts-ignore
import isEmpty from "lodash/isEmpty";
// setup hocs
import AbstractContainer from "../../hocs/AbstractContainer";
import {
  PixiBaseSpriteProps,
  ForwardedRefResponse,
} from "../../types/BaseProps";

const PixiImageSprite = React.forwardRef<
  ForwardedRefResponse | null,
  PixiBaseSpriteProps
>((props, ref) => {
  //// State

  //// Refs
  const imageRef = useRef<PIXI.Sprite>(null);
  const imgGroupRef = useRef<PIXI.Container>(null);

  //// Context

  /// 1001
  // console.log("contxt Values", tl);
  const {
    src,
    transformation: { x, y, width, height, anchor },
    pointerdown,
    pointerup,
  } = props;

  return (
    <AbstractContainer {...props} ref={ref}>
      <Container ref={imgGroupRef}>
        <Sprite
          image={src}
          width={width}
          height={height}
          anchor={anchor}
          ref={imageRef}
          x={x}
          y={y}
          // @ts-ignore
          interactive={true}
          pointerdown={pointerdown}
          pointerup={pointerup}
        />
      </Container>
    </AbstractContainer>
  );
});

export default PixiImageSprite;
