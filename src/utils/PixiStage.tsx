import * as React from "react";
import ContextBridge from "./ContextBridge";
import { Stage as PixiStage } from "@pixi/react";
import { AppStateContextProvider } from "./AppStateProvider";
import { GsapPixieContext } from "../providers/GsapPixieContextProvider";

interface StageProps {
  children: React.ReactNode;
  width: number;
  height: number;
  options: any;
}

const Stage: React.FC<StageProps> = ({ children, ...props }) => {
  return (
    <ContextBridge
      Context={GsapPixieContext}
      render={(children: React.ReactNode | React.ReactElement) => (
        <PixiStage {...props}>
          {/* @ts-ignore */}
          <AppStateContextProvider {...props}>
            {/* @ts-ignore */}
            {children}
          </AppStateContextProvider>
        </PixiStage>
      )}
    >
      {children}
    </ContextBridge>
  );
};

export default Stage;
