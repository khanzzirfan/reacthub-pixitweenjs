import * as React from "react";
interface PixiFlipContainerProps {
    children: React.ReactNode;
    startAt: number;
    duration: number;
    uniqueId?: string;
}
declare function PixiFlipContainer(props: PixiFlipContainerProps): import("react/jsx-runtime").JSX.Element;
export { PixiFlipContainer };
