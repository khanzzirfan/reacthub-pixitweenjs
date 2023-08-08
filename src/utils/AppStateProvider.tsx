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
  const appStateRef = React.useRef<AppState>(appState);

  useDeepEffect(() => {
    setAppState(props);
    appStateRef.current = props;
  }, [props]);

  const onAnchorTransformationEnd = React.useCallback(
    (data: TransformationEnd) => {
      console.log("onAnchorTransformationEnd", data);
      const { uniqueId, transformation } = data;
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

  const onMouseOverSprite = React.useCallback((data: unknown) => {}, []);

  const onClickSprite = React.useCallback((data: unknown) => {}, []);

  return (
    <>
      {/*@ts-ignore */}
      {React.cloneElement(children, {
        ...appState,
        onAnchorTransformationEnd,
        onMouseOverSprite,
        onClickSprite,
      })}
    </>
  );
};
