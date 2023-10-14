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
import { withFiltersHook } from "../../hooks/withFiltersHook";
import { withEffectsHooks } from "../../hooks/withEffectsHook";
import { Effects } from "../../types/Effects";

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
  const {
    src,
    visible,
    disabled,
    transformation: {
      x,
      y,
      width,
      height,
      anchor,
      colorCorrection = {},
      effect,
    },
    pointerdown,
  } = props;

  // log all props

  const {
    blurRadius = 0,
    vignette = 0,
    noise = 0,
    outline = 0,
  } = colorCorrection;
  // use with filters hoooks to get the filters
  const {
    temperatureFilter,
    sharpnessFilter,
    hueFilter,
    blurFilter,
    adjustmentFilter,
    vignetteFilter,
    noiseFilter,
    outlineFilter,
  } = withFiltersHook(colorCorrection);

  const { nightVisionFilter } = withEffectsHooks();

  React.useEffect(() => {
    return () => {
      console.log("PixiImageSprite unmounting");
    };
  }, []);

  return (
    <AbstractContainer {...props} ref={ref}>
      <Container ref={imgGroupRef}>
        <Sprite
          image={src}
          width={width}
          height={height}
          anchor={anchor}
          ref={imageRef}
          alpha={visible ? 1 : 0}
          x={x}
          y={y}
          {...(!disabled &&
            visible && { interactive: true, pointerdown: pointerdown })}
          filters={[
            temperatureFilter,
            sharpnessFilter,
            hueFilter,
            adjustmentFilter,
            // conditionally add blur filter
            ...(blurRadius > 0 ? [blurFilter] : []),
            // conditionally add night vision filter
            ...(effect === Effects.NightVision ? [nightVisionFilter] : []),
            // conditionally add vignette filter
            ...(vignette > 0 ? [vignetteFilter] : []),
            // conditionally add noise filter
            ...(noise > 0 ? [noiseFilter] : []),
            // conditionally add outline filter
            ...(outline > 0 ? [outlineFilter] : []),
          ]}
        />
      </Container>
    </AbstractContainer>
  );
});

export default PixiImageSprite;

// @ts-ignore
PixiImageSprite.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: "ImageSprite",
};
