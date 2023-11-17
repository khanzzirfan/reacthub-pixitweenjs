import * as React from "react";
export declare enum SpriteType {
    Image = "Image",
    Gif = "Gif",
    Video = "Video"
}
export interface TimelineTestProps {
    startAt: number;
    endAt: number;
}
export interface TimelineProps {
    children?: React.ReactNode;
    sequences: TimelineTestProps[];
}
export declare const TimelineTestAudios: (props: TimelineProps) => import("react/jsx-runtime").JSX.Element;
