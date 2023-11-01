export enum Animations {
  NONE = "NONE",
  FLASH = "FLASH",
  PULSE = "PULSE",
  SHAKE = "SHAKE",
  SWING = "SWING",
  JELLO = "JELLO",
  WOOBLE = "WOOBLE",
  FADE_IN = "FADE_IN",
  FADE_OUT = "FADE_OUT",
  FADE_IN_OUT = "FADE_IN_OUT",
  SLIDE_IN_LEFT = "SLIDE_IN_LEFT",
  SLIDE_IN_RIGHT = "SLIDE_IN_RIGHT",
  SLIDE_IN_TOP = "SLIDE_IN_TOP",
  SLIDE_IN_BOTTOM = "SLIDE_IN_BOTTOM",
  SLIDE_OUT_LEFT = "SLIDE_OUT_LEFT",
  SLIDE_OUT_RIGHT = "SLIDE_OUT_RIGHT",
  SLIDE_OUT_TOP = "SLIDE_OUT_TOP",
  SLIDE_OUT_BOTTOM = "SLIDE_OUT_BOTTOM",
  ZOOM_IN = "ZOOM_IN",
  ZOOM_OUT = "ZOOM_OUT",
  ZOOM_IN_OUT = "ZOOM_IN_OUT",
  BOUNCE_IN = "BOUNCE_IN",
  BOUNCE_OUT = "BOUNCE_OUT",
  BOUNCE_IN_OUT = "BOUNCE_IN_OUT",
  BOUNCE_IN_DOWN = "BOUNCE_IN_DOWN",
  BOUNCE_IN_LEFT = "BOUNCE_IN_LEFT",
  BOUNCE_IN_RIGHT = "BOUNCE_IN_RIGHT",
  BOUNCE_IN_UP = "BOUNCE_IN_UP",
  BOUNCE_OUT_DOWN = "BOUNCE_OUT_DOWN",
  BOUNCE_OUT_LEFT = "BOUNCE_OUT_LEFT",
  BOUNCE_OUT_RIGHT = "BOUNCE_OUT_RIGHT",
  BOUNCE_OUT_UP = "BOUNCE_OUT_UP",
  FADE_IN_DOWN = "FADE_IN_DOWN",
  FADE_IN_LEFT = "FADE_IN_LEFT",
  FADE_IN_RIGHT = "FADE_IN_RIGHT",
  FADE_IN_UP = "FADE_IN_UP",
  FADE_OUT_DOWN = "FADE_OUT_DOWN",
  FADE_OUT_LEFT = "FADE_OUT_LEFT",
  FADE_OUT_RIGHT = "FADE_OUT_RIGHT",
  FADE_OUT_UP = "FADE_OUT_UP",
  ELASTIC_IN = "ELASTIC_IN",
  ELASTIC_OUT = "ELASTIC_OUT",
  ELASTIC_IN_OUT = "ELASTIC_IN_OUT",
  BACK_IN = "BACK_IN",
  BACK_OUT = "BACK_OUT",
  BACK_IN_OUT = "BACK_IN_OUT",
  CIRCULAR_IN = "CIRCULAR_IN",
  CIRCULAR_OUT = "CIRCULAR_OUT",
  CIRCULAR_IN_OUT = "CIRCULAR_IN_OUT",
  EXPO_IN = "EXPO_IN",
  EXPO_OUT = "EXPO_OUT",
  EXPO_IN_OUT = "EXPO_IN_OUT",
  SINE_IN = "SINE_IN",
  SINE_OUT = "SINE_OUT",
  SINE_IN_OUT = "SINE_IN_OUT",
  BOUNCE = "BOUNCE",
  ELASTIC = "ELASTIC",
  BACK = "BACK",
  CIRCULAR = "CIRCULAR",
  EXPO = "EXPO",
  SINE = "SINE",
  // Custom
}

export interface IGsapAnimInterface {
  from?: any;
  to?: any;
  fromTo?: any;
  duration?: number;
  x?: number;
  y?: number;
  alpha?: number;
}
