import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: (props: import("./PixiSequence").PixiSequenceProps) => import("react/jsx-runtime").JSX.Element;
    decorators: ((Story: any) => import("react/jsx-runtime").JSX.Element)[];
    tags: string[];
    argTypes: {
        children: {
            description: string;
            control: {
                type: string;
            };
        };
        startAt: {
            description: string;
            control: {
                type: string;
            };
        };
        endAt: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Normal: Story;
export declare const GifSequence: Story;
export declare const VideoSequence: Story;
