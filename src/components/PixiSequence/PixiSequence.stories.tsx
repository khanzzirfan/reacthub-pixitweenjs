import type { Meta, StoryObj } from "@storybook/react";
import { PixiSequence } from ".";
import { Container } from "@pixi/react";
import { PixiImageSprite } from "../PixiImageSprite";
import { PixiGifSprite } from "../PixiGifSprite";
import { PixiVideoSprite } from "../PixiVideoSprite";
import { AppStateSequenceProvider } from "../../utils/AppStateSequenceProvider";
import { AppWrapper } from "../../utils/AppWrapper";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/PixiSequence",
  component: PixiSequence,
  decorators: [
    (Story: any) => (
      <div style={{ width: "100%", height: "100%" }}>
        <AppWrapper>{Story({ appState: "x" })}</AppWrapper>
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The content of the component.",
      control: {
        type: "text",
      },
    },
    startAt: {
      description: "The content of the component.",
      control: {
        type: "number",
      },
    },
    endAt: {
      description: "The content of the component.",
      control: {
        type: "number",
      },
    },
  },
} satisfies Meta<typeof PixiSequence>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  render: (args: any) => {
    const initialProps = {
      uniqueId: "image-overlay-filters001", // uniqueId of the sprite
      src: "https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2Ff4gWXRxDXf%2FAnimChar.jpeg",
      applyTransformer: false,
      startAt: 0,
      endAt: 5,
      transformation: {
        x: 200,
        y: 200,
        width: 300,
        height: 300,
        anchor: 0.5,
        rotation: 0,
        alpha: 1,
        scale: 1,
        tint: 0xffffff,
        blendMode: 0,
        overlay: args.overlay,
      },
      initialAlpha: 1,
    };
    return (
      <AppStateSequenceProvider {...initialProps}>
        <Container>
          <PixiSequence {...args}>
            <PixiImageSprite {...initialProps} />
          </PixiSequence>
        </Container>
      </AppStateSequenceProvider>
    );
  },
  args: {
    children: "PixiSequence",
    startAt: 2,
    endAt: 5,
  },
};

export const GifSequence: Story = {
  render: (args: any) => {
    const initialProps = {
      uniqueId: "image-overlay-filters001", // uniqueId of the sprite
      src: "https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif",
      applyTransformer: false,
      startAt: 2,
      endAt: 5,
      frameStartAt: 0,
      frameEndAt: 2.5,
      transformation: {
        x: 200,
        y: 200,
        width: 300,
        height: 300,
        anchor: 0.5,
        rotation: 0,
        alpha: 1,
        scale: 1,
        tint: 0xffffff,
        blendMode: 0,
        overlay: args.overlay,
      },
      initialAlpha: 1,
      locked: false,
      loop: false,
    };
    const allSequenceProps = {
      ...initialProps,
      ...args,
    };

    return (
      <AppStateSequenceProvider {...allSequenceProps}>
        <Container>
          <PixiSequence {...args}>
            <PixiGifSprite {...allSequenceProps} />
          </PixiSequence>
        </Container>
      </AppStateSequenceProvider>
    );
  },
  args: {
    children: "PixiSequence",
    startAt: 2,
    endAt: 5,
  },
};

export const VideoSequence: Story = {
  render: (args: any) => {
    const initialProps = {
      uniqueId: "oceanv1", // uniqueId of the sprite
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
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
      applyTransformer: true,
      startAt: 0,
      endAt: 10,
      frameStartAt: 0,
      frameEndAt: 10,
      initialAlpha: 1,
      mute: false,
      locked: false,
    };
    const allSequenceProps = {
      ...initialProps,
      ...args,
    };

    return (
      <AppStateSequenceProvider {...allSequenceProps}>
        <Container>
          <PixiSequence {...args}>
            <PixiVideoSprite {...allSequenceProps} />
          </PixiSequence>
        </Container>
      </AppStateSequenceProvider>
    );
  },
  args: {
    children: "PixiSequence",
    startAt: 2,
    endAt: 5,
  },
};
