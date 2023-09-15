import type { Meta, StoryObj } from "@storybook/react";
import { TimelineTest } from "./TimelineTest";
import { TimelineTestVideos } from "./TimelineTestWithVideos";
import { TimelineWithGif } from "./TimelineWithGif";

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
        startAt: 0,
        endAt: 5,
      },
      {
        startAt: 4,
        endAt: 9,
      },
      {
        startAt: 6,
        endAt: 10,
      },
      {
        startAt: 11,
        endAt: 18,
      },
      {
        startAt: 8,
        endAt: 16,
      },
      {
        startAt: 21,
        endAt: 25,
      },
    ],
  },
};
