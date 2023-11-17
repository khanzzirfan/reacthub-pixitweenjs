import { useApp } from "@pixi/react";
import { useEffect } from "react";

type PixiInteractionManagerProps = {
  children: React.ReactNode;
  options?: {
    [key: string]: unknown;
  };
};

const interactionManagerSettings = { moveWhenInside: true };

/**
 * Initialize Pixi Interaction Manager
 * @param param0
 * @returns
 * @see https://pixijs.download/dev/docs/PIXI.InteractionManager.html
 * @see https://pixijs.download/dev/docs/PIXI.InteractionManager.html#moveWhenInside
 * @see https://pixijs.download/dev/docs/PIXI.InteractionManager.html#on
 *
 * */
const InteractionManager = ({
  children,
  options = interactionManagerSettings,
}: PixiInteractionManagerProps) => {
  const app = useApp();

  useEffect(() => {
    Object.keys(options).forEach((key) => {
      app.renderer.plugins.interaction[key] = options[key];
    });
  }, [options]);

  return children;
};
export default InteractionManager;
