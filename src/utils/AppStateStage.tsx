import * as React from "react";
import { Container as PixiContainer } from "@pixi/react";

interface AppStateStageProps {
  children: React.ReactNode;
}

const AppStateStage: React.FC<AppStateStageProps> = ({
  children,
  ...props
}) => {
  return <PixiContainer {...props}>{children}</PixiContainer>;
};

export default AppStateStage;
