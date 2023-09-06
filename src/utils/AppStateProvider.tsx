import * as React from "react";
import useDeepEffect from "./useDeepEffect";
import { TransformationEnd } from "../types/transformation";

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
  const [mouseOverSprite, setMouseOverSprite] = React.useState<boolean>(false);
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
    },
    []
  );

  const onMouseOverSprite = React.useCallback(() => {
    setMouseOverSprite(true);
  }, []);

  const onMouseOutSprite = React.useCallback(() => {
    setMouseOverSprite(false);
  }, []);

  const onClickSprite = React.useCallback(() => {}, []);

  const onTextUpdate = React.useCallback((data: any) => {
    console.log("onTextUpdate", data);
  }, []);

  const onExitQuillEditor = React.useCallback(() => {
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
        mouseOverSprite,
        onTextUpdate,
        onExitQuillEditor,
        datatestid: counter,
      })}
    </>
  );
};
