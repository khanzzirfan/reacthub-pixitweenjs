export declare enum OverlayTypes {
    NONE = "none",
    NORMAL = "normal",
    LENSFLARE = "lensflare",
    FILMSTRIP = "filmstrip",
    GRUNGE = "grunge",
    BRICKS = "bricks"
}
export interface Overlay {
    src: string;
    blendmode: "ADD" | "MULTIPLY";
    alpha: number;
}
export interface Overlays {
    normal: Overlay;
    lensflare: Overlay;
    filmstrip: Overlay;
    grunge: Overlay;
    bricks: Overlay;
}
export declare const overlays: Overlays;
interface PixiOverlayProps {
    overlay: OverlayTypes;
    width: number;
    height: number;
    x: number;
    y: number;
}
export declare const PixiOverlayTilingSprite: (props: PixiOverlayProps) => import("react/jsx-runtime").JSX.Element;
export {};
