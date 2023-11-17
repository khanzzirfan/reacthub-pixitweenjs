/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import { Effects } from "../../types/Effects";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("../../types").PixiBaseSpriteProps & import("react").RefAttributes<import("../../types").ForwardedRefResponse | null>>;
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
        transformation: {
            control: string;
            description: string;
            x: {
                control: string;
                description: string;
            };
            y: {
                control: string;
                description: string;
            };
            width: {
                control: string;
                description: string;
            };
            height: {
                control: string;
                description: string;
            };
            anchor: {
                control: string;
                description: string;
            };
            rotation: {
                control: string;
                description: string;
            };
            alpha: {
                control: string;
                min: number;
                max: number;
                description: string;
            };
            scale: {
                control: string;
                description: string;
            };
            tint: {
                control: string;
                description: string;
            };
            blendMode: {
                control: string;
                description: string;
            };
            effects: {
                type: string;
                options: Effects[];
                description: string;
            };
            colorCorrection: {
                control: string;
                description: string;
                enabled: {
                    control: string;
                    description: string;
                };
                brightness: {
                    control: string;
                    description: string;
                };
                contrast: {
                    control: string;
                    description: string;
                };
                saturation: {
                    control: string;
                    description: string;
                };
                alpha: {
                    control: string;
                    description: string;
                };
            };
        };
        applyTransformer: {
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
        visible: {
            control: string;
            description: string;
        };
        onAnchorTransformationEnd: {
            action: string;
            description: string;
        };
        pointerdown: {
            action: string;
            description: string;
        };
        pointerout: {
            action: string;
            description: string;
        };
        pointerover: {
            action: string;
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Normal: Story;
export declare const FadeIn: Story;
export declare const Filters: Story;
export declare const FilterEffects: Story;
export declare const Overlays: Story;
export declare const PointerTests: Story;
export declare const Animation: Story;
export declare const PointerAnimation: Story;
