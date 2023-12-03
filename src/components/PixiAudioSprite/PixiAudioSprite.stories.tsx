import type { Meta, StoryObj } from "@storybook/react";
import { PixiAudioSprite } from ".";
import { AppStateContextProvider } from "../../utils/AppStateProvider";
import { AppWrapper } from "../../utils/AppWrapper";
import { Waveforms } from "../../types/Effects";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/AudioSprite",
  component: PixiAudioSprite,
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
    startAt: { control: "number", description: "startAt" },
    endAt: { control: "number", description: "endAt" },
    audioStartAt: {
      control: "number",
      description:
        "audio start at seconds if different from the sequence play startAt time",
    },
    audioEndAt: {
      control: "number",
      description:
        "audio ends at seconds if different from the sequence play endAt time",
    },
    mute: { control: "boolean", description: "mute" },
    speed: { control: "number", description: "speed" },
    visible: {
      control: "boolean",
      description: "element to be visible on pixi stage and interactive",
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
      waveform: {
        type: "string",
        options: Object.values(Waveforms),
        description: "Waveforms effects of the sprite",
      },
    },
  },
} satisfies Meta<typeof PixiAudioSprite>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiAudioSprite {...args} />
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "audio001", // uniqueId of the sprite
    src: "https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F6556e2bc65dffe866558cf47%2Fvideos%2Fz8AyBilLvx%2Fpenguins-audio_1-8.MP3",
    startAt: 0,
    endAt: 5,
    audioStartAt: 0,
    audioEndAt: 5,
    mute: false,
    speed: 1,
    visible: true,
    transformation: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      rotation: 0,
      scale: 1,
      alpha: 1,
      anchor: 0.5,
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Visualization: Story = {
  render: (args: any) => {
    const initialState = {
      uniqueId: "audio001", // uniqueId of the sprite
      src: "https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F6556e2bc65dffe866558cf47%2Fvideos%2Fz8AyBilLvx%2Fpenguins-audio_1-8.MP3",
      startAt: 0,
      endAt: 5,
      audioStartAt: 0,
      audioEndAt: 5,
      mute: false,
      speed: 1,
      visible: true,
      transformation: {
        x: 100,
        y: 100,
        width: 300,
        height: 300,
        rotation: 0,
        scale: 1,
        alpha: 1,
        anchor: 0.5,
        waveform: args.waveform || Waveforms.EQUALIZER,
      },
    };

    return (
      <AppStateContextProvider {...initialState}>
        <PixiAudioSprite {...initialState} />
      </AppStateContextProvider>
    );
  },
  args: {
    uniqueId: "audio001", // uniqueId of the sprite
    src: "https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F6556e2bc65dffe866558cf47%2Fvideos%2Fz8AyBilLvx%2Fpenguins-audio_1-8.MP3",
    startAt: 0,
    endAt: 5,
    audioStartAt: 0,
    audioEndAt: 5,
    mute: false,
    speed: 1,
    visible: true,
    transformation: {
      x: 100,
      y: 100,
      width: 300,
      height: 300,
      rotation: 0,
      scale: 1,
      alpha: 1,
      anchor: 0.5,
      waveform: Waveforms.EQUALIZER,
    },
  },
  argTypes: {
    // @ts-ignore
    waveform: {
      control: "select",
      options: Object.values(Waveforms),
      description:
        "Waveforms effects of the sprite. it is enum type supplied as prop to the transformation property in the props.",
    },
  },
  parameters: {
    controls: {
      include: ["waveform"],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Speech: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiAudioSprite {...args} />
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "audio001", // uniqueId of the sprite
    src: "https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2F7M7ixuYvwQ%2Fsingle-speaker-speech-audio.mp3",
    startAt: 0,
    endAt: 5,
    audioStartAt: 0,
    audioEndAt: 5,
    mute: false,
    speed: 1,
    visible: true,
    transformation: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      rotation: 0,
      scale: 1,
      alpha: 1,
      anchor: 0.5,
    },
  },
};

export const Muted: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiAudioSprite {...args} />
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "audio002", // uniqueId of the sprite
    src: "https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2F8Qq3DKrGnQ%2Fpiano2-CoolEdit.mp3",
    startAt: 0,
    endAt: 5,
    audioStartAt: 3,
    audioEndAt: 5,
    mute: true,
    speed: 1,
    visible: true,
    transformation: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      rotation: 0,
      scale: 1,
      alpha: 1,
      anchor: 0.5,
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SplitPosition: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiAudioSprite {...args} />
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "audio001", // uniqueId of the sprite
    src: "https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2F7M7ixuYvwQ%2Fsingle-speaker-speech-audio.mp3",
    startAt: 0,
    endAt: 9,
    audioStartAt: 4,
    audioEndAt: 8,
    mute: false,
    speed: 1,
    visible: true,
    transformation: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      rotation: 0,
      scale: 1,
      alpha: 1,
      anchor: 0.5,
    },
  },
};
