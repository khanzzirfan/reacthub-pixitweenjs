import type { Meta, StoryObj } from "@storybook/react";
import PixiLottieSprite from "./PixiLottieSprite";
import { AppStateContextProvider } from "../../utils/AppStateProvider";
import { AppWrapper } from "../../utils/AppWrapper";
import { PixiSequenceWrapper } from "../../components/PixiSequence/PixiSeqenceWrapper";
import { PixiSequence } from "../../components/PixiSequence";
import { Effects } from "../../types/Effects";
import { Animations } from "../../types";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/LottieSprite",
  component: PixiLottieSprite,
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
    visible: {
      control: "boolean",
      description: "element to be visible on pixi stage and interactive",
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
    pointerup: {
      action: "pointerup",
      description: "pointerup event",
    },
    mousedown: {
      action: "mousedown",
      description: "mousedown event",
    },
    mouseup: {
      action: "mouseup",
      description: "mouseup event",
    },
    pointerover: {
      action: "pointerover",
      description: "pointerover event",
    },
    mouseover: {
      action: "mouseover",
      description: "mouseover event",
    },
    mouseout: {
      action: "mouseout",
      description: "mouseout event",
    },
    pointerout: {
      action: "pointerout",
      description: "pointerout event",
    },
  },
} satisfies Meta<typeof PixiLottieSprite>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiSequenceWrapper startAt={0} endAt={16}>
        <PixiSequence startAt={args.startAt} endAt={args.endAt}>
          <PixiLottieSprite {...args} />
        </PixiSequence>
      </PixiSequenceWrapper>
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "lottie001", // uniqueId of the sprite
    src: "https://assets1.lottiefiles.com/packages/lf20_RkWAMt.json",
    locked: false,
    loop: false,
    applyTransformer: false,
    startAt: 0,
    endAt: 3,
    frameStartAt: 0,
    frameEndAt: 3,
    transformation: {
      x: 200,
      y: 200,
      width: 200,
      height: 200,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      colorCorrection: {},
    },
    visible: true,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Filter: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiSequenceWrapper startAt={0} endAt={16}>
        <PixiSequence startAt={args.startAt} endAt={args.endAt}>
          <PixiLottieSprite {...args} />
        </PixiSequence>
      </PixiSequenceWrapper>
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "lottie-car-drive", // uniqueId of the sprite
    src: "https://lottie.host/272b60dd-462d-42a3-8ed6-fec4143633d6/X4FxBascRI.json",
    locked: false,
    loop: true,
    applyTransformer: false,
    startAt: 0,
    endAt: 3,
    frameStartAt: 0,
    frameEndAt: 3,
    transformation: {
      x: 200,
      y: 200,
      width: 200,
      height: 200,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      effect: Effects.Sepia,
      animation: Animations.NONE,
      colorCorrection: {},
    },
    visible: true,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FadeIn: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiSequenceWrapper startAt={0} endAt={16}>
        <PixiSequence startAt={args.startAt} endAt={args.endAt}>
          <PixiLottieSprite {...args} />
        </PixiSequence>
      </PixiSequenceWrapper>
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "lottie-car-drive", // uniqueId of the sprite
    src: "https://lottie.host/272b60dd-462d-42a3-8ed6-fec4143633d6/X4FxBascRI.json",
    locked: false,
    loop: true,
    applyTransformer: false,
    startAt: 0,
    endAt: 3,
    frameStartAt: 0,
    frameEndAt: 3,
    transformation: {
      x: 200,
      y: 200,
      width: 200,
      height: 200,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      effect: Effects.None,
      animation: Animations.FADE_IN,
      colorCorrection: {},
    },
    visible: true,
  },
};
