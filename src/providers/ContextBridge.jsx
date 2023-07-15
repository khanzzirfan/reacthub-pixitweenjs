// your Stage:
import { Stage as PixiStage } from "@pixi/react";
import React from "react";
import * as PIXI from "pixi.js";

import {
  GsapPixieContext,
  GsapPixieContextProvider,
} from "./GsapPixieContextProvider";
// the context bridge:
const ContextBridge = ({ children, Context, render }) => {
  return (
    <Context.Consumer>
      {(value) =>
        render(<GsapPixieContextProvider>{children}</GsapPixieContextProvider>)
      }
    </Context.Consumer>
  );
};

const Stage = ({ children, ...props }) => {
  return (
    <ContextBridge
      Context={GsapPixieContext}
      render={(children) => <PixiStage {...props}>{children}</PixiStage>}
    >
      {children}
    </ContextBridge>
  );
};

export const App = ({ children, backgroundColor, ...props }) => {
  const backgroundColorx = PIXI.utils.string2hex(backgroundColor || "#2D2E3C");
  const width = 600;
  const height = 600;

  /// color: 0x1099bb,
  return (
    <Stage
      width={width}
      height={height}
      // options={{ background: backgroundColor }}
      options={{ backgroundColor: backgroundColorx, resolution: 2 }}
    >
      {children}
    </Stage>
  );
};
