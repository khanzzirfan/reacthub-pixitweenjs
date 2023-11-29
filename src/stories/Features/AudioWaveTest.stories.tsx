import type { Meta, StoryObj } from "@storybook/react";
import AudioVisualizer from "../components/audio/ReactAudioWave";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Features/AudioVisualizer",
  component: AudioVisualizer,

  tags: ["autodocs"],
  argTypes: {
    src: {
      description: "audio source url.",
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof AudioVisualizer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  render: (args: any) => <AudioVisualizer {...args} />,
  args: {
    src: "https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6556e2bc65dffe866558cf47%2Fvideos%2Fz8AyBilLvx%2Fpenguins-audio_1-8.MP3",
    mute: false,
    speed: 1,
    visible: true,
    uniqueId: "audio001",
    waveform: false,
  },
};
