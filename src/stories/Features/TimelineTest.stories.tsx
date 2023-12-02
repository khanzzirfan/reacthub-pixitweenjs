import type { Meta, StoryObj } from "@storybook/react";
import { TimelineTest } from "./TimelineTest";
import { TimelineTestVideos } from "./TimelineTestWithVideos";
import { TimelineWithGif } from "./TimelineWithGif";
import { TimelineAnimationTest } from "./TimelineAnimations";
import { TimelineTestAudios } from "./TimelineTestAudios";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Features/TimelineTest",
  component: TimelineTest,

  tags: ["autodocs"],
  argTypes: {
    sequences: {
      description: "The content of the component.",
      control: {
        type: "object",
      },
    },
  },
} satisfies Meta<typeof TimelineTest>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  render: (args: any) => <TimelineTest {...args} />,
  args: {
    sequences: [
      {
        startAt: 0,
        endAt: 5,
      },
      {
        startAt: 4,
        endAt: 9,
      },
      {
        startAt: 6,
        endAt: 8,
      },
    ],
  },
};

export const GifTest: Story = {
  render: (args: any) => <TimelineWithGif {...args} />,
  args: {
    sequences: [
      {
        startAt: 0,
        endAt: 5,
      },
      {
        startAt: 4,
        endAt: 9,
      },
      {
        startAt: 6,
        endAt: 15,
      },
    ],
  },
};

export const VideoTest: Story = {
  render: (args: any) => <TimelineTestVideos {...args} />,
  args: {
    sequences: [
      {
        // image sprite
        startAt: 3,
        endAt: 8,
      },
      {
        // image sprite
        startAt: 0,
        endAt: 6,
      },
      {
        // video sprite
        startAt: 2,
        endAt: 7,
      },
      {
        // video sprite
        startAt: 5,
        endAt: 15,
      },
      {
        startAt: 8,
        endAt: 19,
      },
      {
        startAt: 21,
        endAt: 25,
      },
    ],
  },
};

export const AudioTest: Story = {
  render: (args: any) => <TimelineTestAudios {...args} />,
  args: {
    sequences: [
      {
        startAt: 0,
        endAt: 5,
      },
      {
        startAt: 4,
        endAt: 9,
      },
      {
        startAt: 6,
        endAt: 20,
      },
    ],
  },
};

export const Animations: Story = {
  render: (args: any) => <TimelineAnimationTest {...args} />,
  args: {
    sequences: [
      {
        startAt: 0,
        endAt: 4,
      },
      {
        startAt: 2,
        endAt: 6,
      },
      {
        startAt: 3,
        endAt: 10,
      },
      {
        startAt: 6,
        endAt: 12,
      },
    ],
  },
};
