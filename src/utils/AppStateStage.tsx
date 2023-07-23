import * as React from "react";
import ContextBridge from "./ContextBridge";
import { AppStateContext } from "../providers/AppStateProvider";
import { Container as PixiContainer } from "@pixi/react";

interface AppStateStageProps {
  children: React.ReactNode;
}

const AppStateStage: React.FC<AppStateStageProps> = ({
  children,
  ...props
}) => {
  return (
    <ContextBridge
      Context={AppStateContext}
      render={(children: React.ReactNode) => (
        // @ts-ignore
        <PixiContainer {...props}>{children}</PixiContainer>
      )}
    >
      {children}
    </ContextBridge>
  );
};

export default AppStateStage;
