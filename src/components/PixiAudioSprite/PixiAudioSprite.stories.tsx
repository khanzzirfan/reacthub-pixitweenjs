import type { Meta, StoryObj } from "@storybook/react";
import { PixiAudioSprite } from ".";
import { AppStateContextProvider } from "../../utils/AppStateProvider";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/AudioSprite",
  component: PixiAudioSprite,

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
    mute: { control: "boolean", description: "mute" },
    speed: { control: "number", description: "speed" },
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
    src: "https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2F8Qq3DKrGnQ%2Fpiano2-CoolEdit.mp3",
    startAt: 0,
    endAt: 5,
    mute: false,
    speed: 1,
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
    mute: false,
    speed: 1,
  },
};

export const Customized: Story = {
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
    mute: true,
    speed: 1,
  },
};
