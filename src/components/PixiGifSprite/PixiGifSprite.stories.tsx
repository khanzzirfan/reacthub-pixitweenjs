import type { Meta, StoryObj } from "@storybook/react";
import { PixiGifSprite } from ".";
import { AppStateContextProvider } from "../../utils/AppStateProvider";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/GifSprite",
  component: PixiGifSprite,

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
} satisfies Meta<typeof PixiGifSprite>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiGifSprite {...args} />
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "suryaGify001", // uniqueId of the sprite
    src: "https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif",
    locked: false,
    loop: false,
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
    endAt: 4,
    initialAlpha: 1,
  },
};