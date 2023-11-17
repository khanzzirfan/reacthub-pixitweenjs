import * as React from "react";
type PixiTransformerProps = {
    pixiTransformerRef: React.MutableRefObject<any>;
    imageRef: React.MutableRefObject<any>;
    isMounted: boolean;
    transformCommit?: (data: any) => void;
    transformChange?: (data: any) => void;
    mouseoverEvent?: (flag: boolean) => void;
    onDoubleClick?: () => void;
    uniqueId?: string;
    isText?: boolean;
};
/**
 * Initialize PixiTransformer to transform the image
 * @param param0
 * @returns
 */
declare const PixiTransformer: ({ pixiTransformerRef, imageRef, isMounted, transformCommit, transformChange, mouseoverEvent, onDoubleClick, uniqueId, isText, }: PixiTransformerProps) => import("react/jsx-runtime").JSX.Element;
export default PixiTransformer;
