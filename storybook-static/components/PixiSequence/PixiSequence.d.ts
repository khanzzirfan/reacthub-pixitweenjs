import * as React from "react";
export interface PixiSequenceProps {
    children: React.ReactNode;
    /** start time of the sequence in seconds */
    startAt: number;
    /** end time of the sequence in seconds */
    endAt: number;
    /** unique id */
    uniqueId?: string;
}
export declare const PixiSequence: (props: PixiSequenceProps) => import("react/jsx-runtime").JSX.Element;
