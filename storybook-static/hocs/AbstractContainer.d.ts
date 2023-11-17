import * as React from "react";
import { PixiBaseSpriteProps, ForwardedRefResponse } from "../types/BaseProps";
interface AbstractContainerProps extends PixiBaseSpriteProps {
    ignoreTlForVideo?: boolean;
    isText?: boolean;
    isDragging?: boolean;
    isGif?: boolean;
    onDoubleClick?: () => void;
    isTextEditMode?: boolean;
}
declare const AbstractContainer: React.ForwardRefExoticComponent<AbstractContainerProps & React.RefAttributes<ForwardedRefResponse | null>>;
export default AbstractContainer;
