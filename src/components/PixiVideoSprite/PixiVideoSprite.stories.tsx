import type { Meta, StoryObj } from "@storybook/react";
import { PixiVideoSprite } from ".";
import { AppStateContextProvider } from "../../utils/AppStateProvider";
import { AppWrapper } from "../../utils/AppWrapper";
import { Animations } from "../../types";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/VideoSprite",
  component: PixiVideoSprite,
  decorators: [
    (Story: any) => (
      <div style={{ width: "100%", height: "100%" }}>
        <AppWrapper>{Story({ appState: "x" })}</AppWrapper>
      </div>
    ),
  ],
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
    frameStartAt: { control: "number", description: "frameStartAt" },
    frameEndAt: { control: "number", description: "frameEndAt" },
    mute: { control: "boolean", description: "mute" },
    locked: { control: "boolean", description: "locked" },
    visible: { control: "boolean", description: "visible" },
    onAnchorTransformationEnd: {
      action: "onAnchorTransformationEnd",
      description:
        "on transforamtion end the event is fire callback with latest sprite transformation properties.",
    },
    pointerdown: {
      action: "pointerdown",
      description: "pointerdown event",
    },
    fps: {
      control: "number",
      description: "fps of the video",
    },
  },
} satisfies Meta<typeof PixiVideoSprite>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiVideoSprite {...args} />
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "oceanv1", // uniqueId of the sprite
    src: "https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2Fyd2M9NnQHL%2FForBiggerBlazes.mp4",
    transformation: {
      x: 290,
      y: 250,
      width: 550,
      height: 400,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      colorCorrection: {},
    },
    applyTransformer: false,
    startAt: 3,
    endAt: 7,
    frameStartAt: 0,
    frameEndAt: 10,
    visible: true,
    mute: false,
    locked: false,
  },
};

export const FadeIn: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiVideoSprite {...args} />
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "ForBiggerBlazes002", // uniqueId of the sprite
    src: "https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2Fyd2M9NnQHL%2FForBiggerBlazes.mp4",
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
      animation: Animations.FADE_IN,
      colorCorrection: {},
    },
    applyTransformer: false,
    startAt: 0,
    endAt: 10,
    frameStartAt: 0,
    frameEndAt: 10,
    visible: true,
    mute: false,
    locked: false,
  },
};

export const Filters: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiVideoSprite {...args} />
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "videofiter002", // uniqueId of the sprite
    src: "https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2Fyd2M9NnQHL%2FForBiggerBlazes.mp4",
    transformation: {
      x: 290,
      y: 250,
      width: 550,
      height: 400,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      colorCorrection: {
        enabled: true,
        contrast: 2,
        saturation: 2,
        exposure: 2,
        blurRadius: 1,
      },
    },
    applyTransformer: false,
    startAt: 0,
    endAt: 10,
    frameStartAt: 0,
    frameEndAt: 10,
    visible: true,
    mute: false,
    locked: false,
  },
};

export const SplitPosition: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiVideoSprite {...args} />
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "videofiter002", // uniqueId of the sprite
    src: "https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2Fyd2M9NnQHL%2FForBiggerBlazes.mp4",
    transformation: {
      x: 290,
      y: 250,
      width: 550,
      height: 400,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
    },
    applyTransformer: false,
    startAt: 0,
    endAt: 10,
    frameStartAt: 5,
    frameEndAt: 10,
    visible: true,
    mute: false,
    locked: false,
  },
};

export const SplitStartPos: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiVideoSprite {...args} />
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "videofiter002", // uniqueId of the sprite
    src: "https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2Fyd2M9NnQHL%2FForBiggerBlazes.mp4",
    transformation: {
      x: 290,
      y: 250,
      width: 550,
      height: 400,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
    },
    applyTransformer: false,
    startAt: 5,
    endAt: 10,
    frameStartAt: 0,
    frameEndAt: 10,
    visible: true,
    mute: false,
    locked: false,
  },
};

export const VideoFps: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiVideoSprite {...args} />
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "videofiterfps002", // uniqueId of the sprite
    src: "https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2Fyd2M9NnQHL%2FForBiggerBlazes.mp4",
    transformation: {
      x: 290,
      y: 250,
      width: 550,
      height: 400,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
    },
    applyTransformer: false,
    startAt: 0,
    endAt: 15,
    frameStartAt: 0,
    frameEndAt: 15,
    visible: true,
    mute: false,
    locked: false,
    fps: 30,
  },
};
