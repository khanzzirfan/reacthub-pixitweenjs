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
    outlineColor?: number;
}
export declare const withFiltersHook: (props: FiltersProps) => {
    adjustmentFilter: PixiFilters.AdjustmentFilter;
    blurFilter: PixiFilters.KawaseBlurFilter;
    hueFilter: PIXI.ColorMatrixFilter;
    sharpnessFilter: PixiFilters.ConvolutionFilter;
    temperatureFilter: PIXI.Filter;
    vignetteFilter: PixiFilters.OldFilmFilter;
    noiseFilter: PIXI.NoiseFilter;
};
