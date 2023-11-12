import type { Meta, StoryObj } from "@storybook/react";
import { PixiTextSprite } from ".";
import { AppStateContextProvider } from "../../utils/AppStateProvider";
import { AppWrapper } from "../../utils/AppWrapper";
import { PixiSequenceWrapper } from "../../components/PixiSequence/PixiSeqenceWrapper";
import { PixiSequence } from "../../components/PixiSequence";
import { Animations } from "../../types";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/TextSprite",
  component: PixiTextSprite,
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
    text: {
      control: "text",
      description: "Text to be displayed",
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
    visible: { control: "boolean", description: "visible" },
    onAnchorTransformationEnd: {
      action: "onAnchorTransformationEnd",
      description:
        "on transforamtion end the event is fire callback with latest sprite transformation properties.",
    },
    pointerup: {
      action: "pointerup",
      description: "pointerup event",
    },
    onTextUpdate: {
      action: "onTextUpdate",
      description: "onTextUpdate event",
    },
    pointerdown: {
      action: "pointerdown",
      description: "pointerdown event",
    },
    pointerout: {
      action: "pointerout",
      description: "pointerout event",
    },
    pointerover: {
      action: "pointerover",
      description: "pointerover event",
    },
  },
} satisfies Meta<typeof PixiTextSprite>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiTextSprite {...args} />
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "TextSpritexx001", // uniqueId of the sprite
    text: "Welcome to PixiJS",
    disabled: false,
    applyTransformer: false,
    transformation: {
      x: 300,
      y: 200,
      width: 200,
      height: 200,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      blendMode: 0,
      colorCorrection: {},
      fill: "#00ff99",
      fontSize: 50,
      fontFamily: "Arial",
      fontStyle: "italic",
      fontWeight: "bold",
      fontVariant: "normal",
      align: "center",
      stroke: "#522d2d",
      strokeThickness: 0,
      letterSpacing: 0,
      lineHeight: 0,
      dropShadow: false,
      dropShadowColor: "#522d2d",
      dropShadowBlur: 0,
      wordWrap: false,
      wordWrapWidth: 5000000,
      padding: 10,
      textBaseline: "alphabetic",
      trim: false,
    },
    startAt: 0,
    endAt: 10,
    visible: true,
  },
};

export const FadeIn: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiSequenceWrapper startAt={0} endAt={5}>
        <PixiSequence startAt={args.startAt} endAt={args.endAt}>
          <PixiTextSprite {...args} />
        </PixiSequence>
      </PixiSequenceWrapper>
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "TextSprite001", // uniqueId of the sprite
    text: "Hello Welcome to PixiJS",
    disabled: false,
    applyTransformer: false,
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
      fill: "#00ff99",
      fontSize: 20,
      fontFamily: "Arial",
      align: "center",
      stroke: 0x000000,
      strokeThickness: 0,
      letterSpacing: 0,
      lineHeight: 0,
      dropShadow: false,
      dropShadowColor: 0x000000,
      dropShadowBlur: 0,
      wordWrap: false,
      wordWrapWidth: 100,
      padding: 0,
      textBaseline: "alphabetic",
      trim: false,
    },
    startAt: 0,
    endAt: 10,
    visible: true,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Filters: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiTextSprite {...args} />
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "TextSpritexx001", // uniqueId of the sprite
    text: "Hello Welcome to PixiJS",
    disabled: false,
    applyTransformer: false,
    transformation: {
      x: 200,
      y: 200,
      width: 200,
      height: 200,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      blendMode: 0,
      colorCorrection: {
        enabled: true,
        contrast: 2,
        saturation: 2,
        exposure: 2,
        blurRadius: 1,
      },
      fill: "#00ff99",
      fontSize: 80,
      fontFamily: "Arial",
      align: "center",
      stroke: "#522d2d",
      strokeThickness: 0,
      letterSpacing: 0,
      lineHeight: 0,
      dropShadow: false,
      dropShadowColor: "#522d2d",
      dropShadowBlur: 0,
      wordWrap: false,
      wordWrapWidth: 5000000,
      padding: 10,
      textBaseline: "alphabetic",
      trim: false,
    },
    startAt: 0,
    endAt: 10,
    visible: true,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Draggable: Story = {
  render: (args: any) => (
    <>
      <AppStateContextProvider {...args}>
        <PixiSequenceWrapper startAt={0} endAt={5}>
          <PixiSequence startAt={args.startAt} endAt={args.endAt}>
            <PixiTextSprite {...args} />
          </PixiSequence>
        </PixiSequenceWrapper>
      </AppStateContextProvider>
      <AppStateContextProvider {...args}>
        <PixiTextSprite {...args} />
      </AppStateContextProvider>
    </>
  ),
  args: {
    uniqueId: "TextSprite001", // uniqueId of the sprite
    text: "Hello Welcome to PixiJS",
    disabled: false,
    applyTransformer: true,
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
      fill: "#00ff99",
      fontSize: 20,
      fontFamily: "Arial",
      align: "center",
      stroke: 0x000000,
      strokeThickness: 0,
      letterSpacing: 0,
      lineHeight: 0,
      dropShadow: false,
      dropShadowColor: 0x000000,
      dropShadowBlur: 0,
      wordWrap: false,
      wordWrapWidth: 100,
      padding: 0,
      textBaseline: "alphabetic",
      trim: false,
      animation: Animations.FADE_IN,
    },
    startAt: 0,
    endAt: 5,
    visible: true,
  },
};
