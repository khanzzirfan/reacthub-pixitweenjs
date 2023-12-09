// manually pass these overrideable in your component props
/* audioCtx
 * width
 * height
 **/

import { Waveforms } from "../../types/Effects";
import { Options, ConstructorOptions } from "audiomotion-analyzer";

export type WaveConfigOptions = Partial<ConstructorOptions & Options>;

export const waveConfig: Record<Waveforms, WaveConfigOptions> = {
  [Waveforms.NONE]: {
    mode: 2,
  },
  [Waveforms.ROUNDBARS]: {
    mode: 2,
    alphaBars: false,
    ansiBands: false,
    barSpace: 0.25,
    channelLayout: "single",
    colorMode: "bar-level",
    frequencyScale: "log",
    gradient: "prism",
    ledBars: false,
    linearAmplitude: true,
    linearBoost: 1.6,
    lumiBars: false,
    maxFreq: 16000,
    minFreq: 30,
    mirror: 0,
    radial: false,
    reflexRatio: 0.3,
    reflexAlpha: 1,
    roundBars: true,
    showPeaks: false,
    showScaleX: false,
    showScaleY: false,
    smoothing: 0.7,
    weightingFilter: "D",
  },
  [Waveforms.LED]: {
    mode: 3,
    barSpace: 0.6,
    ledBars: true,
    showScaleX: false,
    showScaleY: false,
  },
  [Waveforms.RADIAL_SPECTRUM]: {
    mode: 3,
    barSpace: 0.25,
    bgAlpha: 0.5,
    fillAlpha: 0.5,
    gradient: "prism",
    ledBars: false,
    linearAmplitude: true,
    linearBoost: 1.8,
    lineWidth: 1.5,
    maxDecibels: -30,
    maxFreq: 16000,
    radial: true,
    showBgColor: true,
    showPeaks: true,
    spinSpeed: 2,
    outlineBars: true,
    showScaleX: false,
    showScaleY: false,
    reflexFit: true,
  },
  [Waveforms.LUMI_BARS]: {
    mode: 3,
    barSpace: 0.6,
    lumiBars: true,
    reflexRatio: 0.5,
    fillAlpha: 0.3,
    frequencyScale: "bark",
    gradientLeft: "steelblue",
    gradientRight: "orangered",
    showScaleX: false,
    showScaleY: false,
  },
  [Waveforms.EQUALIZER]: {
    mode: 2,
    gradient: "rainbow",
    lineWidth: 1.5,
    fillAlpha: 0.5,
    showPeaks: false,
    showScaleX: false,
    showScaleY: false,
  },
};
