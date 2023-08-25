import type { Meta, StoryObj } from "@storybook/react";
import { PixiSvgPathSprite } from ".";
import { AppStateContextProvider } from "../../utils/AppStateProvider";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/SvgSprite",
  component: PixiSvgPathSprite,

  tags: ["autodocs"],
  argTypes: {
    uniqueId: {
      control: "text",
      description: "uniqueId of the sprite",
    },
    path: {
      control: "text",
      description: "source of the svg path",
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
} satisfies Meta<typeof PixiSvgPathSprite>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiSvgPathSprite {...args} />
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "svg001", // uniqueId of the sprite
    path: "M 100 100 L 300 100 L 200 300 z",
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
      fill: "#FFC0CB",
    },
    applyTransformer: false,
    startAt: 0,
    endAt: 10,
    initialAlpha: 1,
  },
};

export const FadeIn: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiSvgPathSprite {...args} />
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "surya002", // uniqueId of the sprite
    path: "M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0",
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
      fill: "#fe2c54",
    },
    applyTransformer: false,
    startAt: 0,
    endAt: 10,
    initialAlpha: 0,
  },
};
