import type { Meta, StoryObj } from "@storybook/react";
import { SpriteType, TimelineTest } from "./TimelineTest";
import { TimelineWithGif } from "./TimelineWithGif";
import { ImageProps } from "./common.tests";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Features/TimelineTest",
  component: TimelineTest,

  tags: ["autodocs"],
  argTypes: {
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
    spriteType: {
      description: "The content of the component.",
      control: {
        type: "select",
        options: Object.values(SpriteType),
        description: "filter effects of the sprite",
      },
    },
    pixiBaseProps: {
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
    startAt: 0,
    endtAt: 5,
    spriteType: SpriteType.Image,
    pixiBaseProps: ImageProps,
  },
  argTypes: {
    // @ts-ignore
    spriteType: {
      control: "select",
      options: Object.values(SpriteType),
      description: "Sprite Type for displaying on the canvas",
    },
  },
};

export const GifTest: Story = {
  render: (args: any) => <TimelineWithGif {...args} />,
  args: {
    startAt: 0,
    endtAt: 5,
    spriteType: SpriteType.Image,
    pixiBaseProps: ImageProps,
  },
  argTypes: {
    // @ts-ignore
    spriteType: {
      control: "select",
      options: Object.values(SpriteType),
      description: "Sprite Type for displaying on the canvas",
    },
  },
};
