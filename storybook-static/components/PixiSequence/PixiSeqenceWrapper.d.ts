import * as React from "react";
export interface PixiSequenceWrapperProps {
    children: React.ReactNode;
    /** start time of the total sequence in seconds */
    startAt: number;
    /** end time of the last sequence in seconds. It is end of global timeline seconds */
    endAt: number;
}
export declare const PixiSequenceWrapper: (props: PixiSequenceWrapperProps) => React.ReactNode;
