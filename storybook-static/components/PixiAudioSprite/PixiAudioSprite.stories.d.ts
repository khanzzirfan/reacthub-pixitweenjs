/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<{
        uniqueId: string;
        src: string;
        startAt: number;
        endAt: number;
        audioStartAt: number;
        audioEndAt: number;
        mute: boolean;
        speed: number;
        visible: boolean;
    }>;
    decorators: ((Story: any) => import("react/jsx-runtime").JSX.Element)[];
    tags: string[];
    argTypes: {
        uniqueId: {
            control: string;
            description: string;
        };
        src: {
            control: string;
            description: string;
        };
        startAt: {
            control: string;
            description: string;
        };
        endAt: {
            control: string;
            description: string;
        };
        audioStartAt: {
            control: string;
            description: string;
        };
        audioEndAt: {
            control: string;
            description: string;
        };
        mute: {
            control: string;
            description: string;
        };
        speed: {
            control: string;
            description: string;
        };
        visible: {
            control: string;
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Normal: Story;
export declare const Speech: Story;
export declare const Customized: Story;
export declare const SplitPosition: Story;
