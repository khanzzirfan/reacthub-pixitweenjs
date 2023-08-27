import * as React from "react";
import { useRef } from "react";
import { Sprite, Container } from "@pixi/react";
import * as PIXI from "pixi.js";
// @ts-ignore
import isEmpty from "lodash/isEmpty";
// setup hocs
import AbstractContainer from "../../hocs/AbstractContainer";
import { PixiBaseSpriteProps } from "../../types/BaseProps";

const PixiImageSprite: React.FC<PixiBaseSpriteProps> = (props) => {
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
    mousedown,
    mouseup,
    pointerover,
    mouseover,
    mouseout,
  } = props;

  return (
    <AbstractContainer {...props}>
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
          pointerover={pointerover}
          mousedown={mousedown}
          mouseup={mouseup}
          mouseover={mouseover}
          mouseout={mouseout}
        />
      </Container>
    </AbstractContainer>
  );
};

export default PixiImageSprite;
