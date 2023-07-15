import { PixiImageSprite } from "./PixiImageSprite";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Pixi/ImageSprite",
  component: PixiImageSprite,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
      description: "background color for the application stage",
    },
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
    applyTransformer: { control: "boolean", description: "applyTransformer" },
    startAt: { control: "number", description: "startAt" },
    endAt: { control: "number", description: "endAt" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal = {
  args: {
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
    applyTransformer: false,
    startAt: 0,
    endAt: 100,
  },
};
