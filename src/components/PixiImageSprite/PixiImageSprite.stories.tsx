import type { Meta, StoryObj } from "@storybook/react";
import { PixiImageSprite } from ".";
import { AppStateContextProvider } from "../../utils/AppStateProvider";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/ImageSprite",
  component: PixiImageSprite,

  tags: ["autodocs"],
  argTypes: {
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
        enabled: {
          control: "boolean",
          description: "enabled of the sprite  with color filter mode applied.",
        },
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
} satisfies Meta<typeof PixiImageSprite>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiImageSprite {...args} />
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "surya001", // uniqueId of the sprite
    src: "https://assets.codepen.io/693612/surya.svg",
    applyTransformer: false,
    startAt: 0,
    endAt: 10,
    transformation: {
      x: 200,
      y: 200,
      width: 150,
      height: 150,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      colorCorrection: {
        enabled: false,
        contrast: 1,
        saturation: 1,
        exposure: 1,
        blurRadius: 0,
      },
    },
    initialAlpha: 1,
  },
};

export const FadeIn: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiImageSprite {...args} />
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "surya002", // uniqueId of the sprite
    src: "https://assets.codepen.io/693612/surya.svg",
    applyTransformer: false,
    startAt: 0,
    endAt: 10,
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
    initialAlpha: 0,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Filters: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiImageSprite {...args} />
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "image-filters001", // uniqueId of the sprite
    src: "https://assets.codepen.io/693612/surya.svg",
    applyTransformer: false,
    startAt: 0,
    endAt: 10,
    transformation: {
      x: 200,
      y: 200,
      width: 150,
      height: 150,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      colorCorrection: {
        enabled: true,
        contrast: 1,
        saturation: 2,
        exposure: 1,
        blurRadius: 0,
      },
    },
    initialAlpha: 1,
  },
};
