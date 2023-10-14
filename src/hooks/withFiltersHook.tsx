import * as PIXI from "pixi.js";
import * as PixiFilters from "pixi-filters";

export interface FiltersProps {
  contrast?: number;
  saturation?: number;
  brightness?: number;
  alpha?: number;
  red?: number;
  blue?: number;
  gamma?: number;
  green?: number;
  blurRadius?: number;
  temperature?: number;
  hue?: number;
  sharpness?: number;
  vignette?: number;
  noise?: number;
  outline?: number;
}

export const withFiltersHook = (props: FiltersProps) => {
  const {
    contrast = 1,
    saturation = 1,
    brightness = 1,
    alpha = 1,
    red = 1,
    blue = 1,
    gamma = 1,
    green = 1,
    blurRadius = 0,
    temperature = 0,
    hue = 0,
    sharpness = 0,
    vignette = 0,
    noise = 0,
    outline = 0,
    outlineColor = 0x000000,
  } = props || {};

  // Create a temperature filter
  const temperatureFilter = new PIXI.Filter(
    // @ts-ignore
    null,
    `
      precision mediump float;
      varying vec2 vTextureCoord;
      uniform sampler2D uSampler;
      uniform float temperature;
    
      void main() {
        vec4 color = texture2D(uSampler, vTextureCoord);
        color.r = color.r + (temperature / 100.0);
        color.b = color.b - (temperature / 100.0);
        gl_FragColor = color;
      }
    `
  );
  temperatureFilter.uniforms.temperature = temperature;

  // Create a sharpness filter
  const sharpnessFilter = new PixiFilters.ConvolutionFilter([
    0,
    -sharpness,
    0,
    -sharpness,
    1 + 4 * sharpness,
    -sharpness,
    0,
    -sharpness,
    0,
  ]);

  // create hue filter
  const hueFilter = new PIXI.filters.ColorMatrixFilter();
  hueFilter.hue(hue, false);

  // create a blur filter
  const blurFilter = new PixiFilters.KawaseBlurFilter(blurRadius, 1, true);

  // create a vignette filter
  const vignetteFilter = new PixiFilters.OldFilmFilter({
    vignetting: vignette,
  });

  // create a noise filter
  const noiseFilter = new PIXI.filters.NoiseFilter(noise);

  // create a outline filter
  const outlineFilter = new PixiFilters.OutlineFilter(outline, outlineColor);

  // create a adjustment filter
  const adjustmentFilter = new PixiFilters.AdjustmentFilter({
    ...(gamma && { gamma: gamma }),
    ...(brightness && { brightness: brightness }),
    ...(contrast && { contrast: contrast }),
    ...(saturation && { saturation: saturation }),
    ...(red && { red: red }),
    ...(green && { green: green }),
    ...(blue && { blue: blue }),
    ...(alpha && { alpha: alpha }),
  });

  return {
    adjustmentFilter,
    blurFilter,
    hueFilter,
    sharpnessFilter,
    temperatureFilter,
    vignetteFilter,
    noiseFilter,
    outlineFilter,
  };
};
