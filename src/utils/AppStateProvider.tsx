import * as React from "react";
import useDeepEffect from "./useDeepEffect";
import { TransformationEnd } from "../types/transformation";
import { action } from "@storybook/addon-actions";
import "@pixi/gif";

interface AppState {
  transformation: {
    [key: string]: unknown;
  };
}

interface AppStateContextProviderProps extends AppState {
  children: React.ReactNode;
}

export const AppStateContextProvider: React.FC<
  AppStateContextProviderProps
> = ({ children, ...props }) => {
  console.log("AppStateContextProvider", props);
  /// const [mouseOverSprite, setMouseOverSprite] = React.useState<boolean>(false);
  const [counter, setCounter] = React.useState<number>(0);

  const appStateRef = React.useRef<AppState>(props);

  useDeepEffect(() => {
    console.log("useDeepEffect", props);
    appStateRef.current = props;
    setCounter((prev) => prev + 1);
  }, [props]);

  const onAnchorTransformationEnd = React.useCallback(
    (data: TransformationEnd) => {
      console.log("onAnchorTransformationEnd", data);
      const { transformation } = data;
      const newAppState = {
        ...appStateRef.current,
        transformation: {
          ...appStateRef.current?.transformation,
          ...transformation,
        },
      };
      console.log("saving state", newAppState);
      appStateRef.current = newAppState;
      setCounter((prev) => prev + 1);
    },
    []
  );

  const onMouseOverSprite = React.useCallback(() => {
    action("onMouseOverSprite")();
    // setMouseOverSprite(true);
  }, []);

  const onMouseOutSprite = React.useCallback(() => {
    action("onMouseOutSprite")();
    // setMouseOverSprite(false);
  }, []);

  const onClickSprite = React.useCallback(() => {
    action("onClickSprite")();
  }, []);

  const onTextUpdate = React.useCallback((data: any) => {
    action("onTextUpdate")(data);
    console.log("onTextUpdate", data);
    const newAppState = {
      ...appStateRef.current,
      text: data.text,
      transformation: {
        ...appStateRef.current?.transformation,
      },
    };
    appStateRef.current = newAppState;
    setCounter((prev) => prev + 1);
  }, []);

  const onExitQuillEditor = React.useCallback(() => {
    action("onExitQuillEditor")();
    console.log("onExitQuillEditor");
  }, []);

  return (
    <>
      {/*@ts-ignore */}
      {React.cloneElement(children, {
        ...appStateRef.current,
        onAnchorTransformationEnd,
        onMouseOverSprite,
        onClickSprite,
        pointerdown: onClickSprite,
        pointerover: onMouseOverSprite,
        pointerout: onMouseOutSprite,
        onTextUpdate,
        onExitQuillEditor,
        datatestid: counter,
      })}
    </>
  );
};
