import * as React from "react";
import { useRef } from "react";
// @ts-ignore
import PropTypes from "prop-types";
import { Sprite, Container, useApp, useTick } from "@pixi/react";
import * as PIXI from "pixi.js";
import AbstractContainer from "../../hocs/AbstractContainer";
// @ts-ignore
import isEmpty from "lodash/isEmpty";
// @ts-ignore
import debounce from "lodash/debounce";
import {
  PixiBaseSpriteProps,
  ForwardedRefResponse,
} from "../../types/BaseProps";
import { withFiltersHook } from "../../hooks/withFiltersHook";
import useDebouncedPointerEvents from "../../hooks/useDebouncePointerEvents";

export interface CanvasImageProps {
  getCanvas: () => PIXI.TextureSource | PIXI.TextureSource[];
}

export interface PixiVideoSpriteProps extends PixiBaseSpriteProps {
  uniqueId: string;
  src: string;
  frameStartAt: number;
  frameEndAt: number;
  mute: boolean;
  locked: boolean;
  pointerdown?: () => void;
  pointerup?: () => void;
  mousedown?: () => void;
  mouseup?: () => void;
  pointerover?: () => void;
  mouseover?: () => void;
  mouseout?: () => void;
  applyTransformer?: boolean;
  onAnchorTransformationEnd?: (endData: any) => void;
  canvasImageRef?: CanvasImageProps;
}

const PixiVideoCanvasSyncSprite = React.forwardRef<
  ForwardedRefResponse | null,
  PixiVideoSpriteProps
>((props, ref) => {
  //// State
  const [videoTexture, setVideoTexture] =
    React.useState<PIXI.Texture<PIXI.Resource>>();

  //// Refs
  const imageRef = useRef<PIXI.Sprite>(null);
  const containerRef = useRef<PIXI.Container>(null);

  /// 1001
  // console.log("contxt Values", tl);
  const {
    visible,
    disabled,
    transformation: { x, y, width, height, colorCorrection = {} },
    pointerdown = () => void 0,
    pointerout = () => void 0,
    pointerover = () => void 0,
    canvasImageRef,
  } = props;

  const canvasSource = canvasImageRef && canvasImageRef?.getCanvas();
  const app = useApp();

  /// hooks;
  const { onPointerDown, onPointerOut, onPointerOver } =
    useDebouncedPointerEvents(pointerover, pointerdown, pointerout, 1);

  const { blurRadius = 0, vignette = 0, noise = 0 } = colorCorrection;
  // use with filters hoooks to get the filters
  const {
    temperatureFilter,
    sharpnessFilter,
    hueFilter,
    blurFilter,
    adjustmentFilter,
    vignetteFilter,
    noiseFilter,
  } = withFiltersHook(colorCorrection);

  useTick(() => {
    if (imageRef.current) {
      if (imageRef.current.texture) {
        const baseTexture = imageRef.current.texture.baseTexture;
        if (baseTexture) {
          baseTexture.update();
        }
        if (containerRef.current) app.renderer.render(containerRef.current);
      }
    }
  });

  // load
  React.useEffect(() => {
    // create a new Sprite using the video texture (yes it's that easy)
    if (!isEmpty(canvasSource)) {
      const texture = PIXI.Texture.from(canvasSource!);
      // if (!texture) return;
      setVideoTexture(texture);
    }
    // create a new Sprite using the video texture (yes it's that easy)
    // const videoSprite = new PIXI.Sprite(texture);
  }, [canvasSource]);

  return (
    <AbstractContainer
      {...props}
      ref={ref}
      ignoreTlForVideo={true}
      pointerdown={onPointerDown}
      pointerover={onPointerOver}
      pointerout={onPointerOut}
    >
      {/* @ts-ignore */}
      <Container ref={containerRef}>
        {videoTexture && (
          <Sprite
            texture={videoTexture}
            width={width}
            height={height}
            anchor={0.5}
            x={x}
            y={y}
            ref={imageRef}
            alpha={visible ? 1 : 0}
            {...(!disabled &&
              visible && { interactive: true, pointerdown: pointerdown })}
            filters={[
              temperatureFilter,
              sharpnessFilter,
              hueFilter,
              adjustmentFilter,
              // conditionally add blur filter
              ...(blurRadius > 0 ? [blurFilter] : []),
              // conditionally add vignette filter
              ...(vignette > 0 ? [vignetteFilter] : []),
              // conditionally add noise filter
              ...(noise > 0 ? [noiseFilter] : []),
            ]}
          />
        )}
      </Container>
    </AbstractContainer>
  );
});

export default PixiVideoCanvasSyncSprite;
