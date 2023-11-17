import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: (props: import("./TimelineTest").TimelineProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        sequences: {
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
export declare const GifTest: Story;
export declare const VideoTest: Story;
export declare const AudioTest: Story;
export declare const HowlerAudioTest: Story;
export declare const Animations: Story;
