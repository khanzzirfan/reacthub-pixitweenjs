import { PixiImageSprite } from "./PixiImageSprite";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Components/ImageSprite",
  component: PixiImageSprite,

  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
      description: "background color for the application stage",
    },
    uniqueId: {
      control: "text",
      description: "uniqueId of the sprite",
    },
    src: {
      control: "text",
      description: "source of the image",
    },
    transformation: {
      control: "object",
      description: "transformation of the sprite",
      x: { control: "number", description: "x position of the sprite" },
      y: { control: "number", description: "y position of the sprite" },
      width: { control: "number", description: "width of the sprite" },
      height: { control: "number", description: "height of the sprite" },
      anchor: { control: "number", description: "anchor of the sprite" },
      rotation: { control: "number", description: "rotation of the sprite" },
      alpha: {
        control: "number",
        min: 0,
        max: 1,
        description: "alpha of the sprite",
      },
      scale: { control: "number", description: "scale of the sprite" },
      tint: { control: "number", description: "tint of the sprite" },
      blendMode: { control: "number", description: "blendMode of the sprite" },
      colorCorrection: {
        control: "object",
        description: "colorCorrection of the sprite",
        brightness: {
          control: "number",
          description: "brightness of the sprite",
        },
        contrast: { control: "number", description: "contrast of the sprite" },
        saturation: {
          control: "number",
          description: "saturation of the sprite",
        },
        alpha: { control: "number", description: "alpha of the sprite" },
      },
    },
    applyTransformer: { control: "boolean", description: "applyTransformer" },
    startAt: { control: "number", description: "startAt" },
    endAt: { control: "number", description: "endAt" },
    initialAlpha: {
      control: "number",
      min: 0,
      max: 1,
      description: "sprite initial alpha value (default  1)",
    },
    onAnchorTransformationEnd: {
      action: "onAnchorTransformationEnd",
      description:
        "on transforamtion end the event is fire callback with latest sprite transformation properties.",
    },
    pointerdown: {
      action: "pointerdown",
      description: "pointerdown event",
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal = {
  args: {
    uniqueId: "surya001", // uniqueId of the sprite
    src: "https://assets.codepen.io/693612/surya.svg",
    transformation: {
      x: 100,
      y: 100,
      width: 150,
      height: 150,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      colorCorrection: {},
    },
    applyTransformer: false,
    startAt: 0,
    endAt: 10,
    initialAlpha: 1,
  },
};

export const FadeIn = {
  args: {
    uniqueId: "surya002", // uniqueId of the sprite
    src: "https://assets.codepen.io/693612/surya.svg",
    transformation: {
      x: 100,
      y: 100,
      width: 150,
      height: 150,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      animation: "FADE_IN",
      colorCorrection: {},
    },
    applyTransformer: false,
    startAt: 0,
    endAt: 10,
    initialAlpha: 0,
  },
};
