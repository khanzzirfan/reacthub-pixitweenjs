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
  const [appState, setAppState] = React.useState<AppState>(props);
  const [mouseOverSprite, setMouseOverSprite] = React.useState<boolean>(false);

  const appStateRef = React.useRef<AppState>(appState);

  useDeepEffect(() => {
    setAppState(props);
    appStateRef.current = props;
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
      setAppState(newAppState);
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

  return (
    <>
      {/*@ts-ignore */}
      {React.cloneElement(children, {
        ...appState,
        onAnchorTransformationEnd,
        onMouseOverSprite,
        onClickSprite,
        pointerdown: onClickSprite,
        pointerover: onMouseOverSprite,
        pointerout: onMouseOutSprite,
        mouseOverSprite,
      })}
    </>
  );
};
