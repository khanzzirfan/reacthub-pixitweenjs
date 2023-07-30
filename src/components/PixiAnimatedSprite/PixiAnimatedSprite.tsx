import * as React from "react";
import { AnimatedSprite as ReactPixiAnimatedSprite } from "@pixi/react";
import * as PIXI from "pixi.js";

type PixiAnimatedSpriteProps = {
  forwardRef: any;
  isPlaying: boolean;
  images?: string[] | undefined;
  initialFrame?: number | undefined;
  scale?: number | [number, number];
  x: number;
  y: number;
  width?: number;
  height?: number;
  anchor?: number;
  rotation?: number;
  alpha?: number;
  animationSpeed?: number;
  textures?: PIXI.Texture[] | undefined;
  loop?: boolean;
  onComplete?: () => void;
  onFrameChange?: (currentFrame: number) => void;
};

const PixiAnimatedSpriteComp = ({
  isPlaying,
  forwardRef,
  ...props
}: PixiAnimatedSpriteProps) => {
  const animationSprite = React.useRef<any>(null);

  React.useImperativeHandle(forwardRef, () => animationSprite.current!, [
    animationSprite,
  ]);

  React.useEffect(() => {
    if (animationSprite.current === null) return;
    const sprite = animationSprite.current;
    sprite[isPlaying ? "gotoAndPlay" : "gotoAndStop"](sprite.currentFrame);
  }, [isPlaying]);

  return (
    <ReactPixiAnimatedSprite
      ref={animationSprite}
      {...props}
      isPlaying={isPlaying}
    />
  );
};
const PixiAnimatedSprite = React.memo(PixiAnimatedSpriteComp);
export default PixiAnimatedSprite;
