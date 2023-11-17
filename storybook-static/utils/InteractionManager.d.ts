/// <reference types="react" />
type PixiInteractionManagerProps = {
    children: React.ReactNode;
    options?: {
        [key: string]: unknown;
    };
};
/**
 * Initialize Pixi Interaction Manager
 * @param param0
 * @returns
 * @see https://pixijs.download/dev/docs/PIXI.InteractionManager.html
 * @see https://pixijs.download/dev/docs/PIXI.InteractionManager.html#moveWhenInside
 * @see https://pixijs.download/dev/docs/PIXI.InteractionManager.html#on
 *
 * */
declare const InteractionManager: ({ children, options, }: PixiInteractionManagerProps) => import("react").ReactNode;
export default InteractionManager;
