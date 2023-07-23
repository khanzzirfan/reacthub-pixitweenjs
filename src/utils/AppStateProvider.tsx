import * as React from "react";
import useDeepEffect from "./useDeepEffect";
import { TransformationEnd } from "../types/transformation";

interface AppState {
  transformation: {
    [key: string]: unknown;
  };
}

interface AppStateContextProps extends AppState {
  onAnchorTransformationEnd: (data: TransformationEnd) => void;
  onMouseOverSprite: (data: unknown) => void;
  onClickSprite: (data: unknown) => void;
}

export const AppStateContext = React.createContext<AppStateContextProps>({
  transformation: {},
  onAnchorTransformationEnd: () => {},
  onMouseOverSprite: () => {},
  onClickSprite: () => {},
});

interface AppStateContextProviderProps extends AppState {
  children: React.ReactNode;
}

export const AppStateContextProvider: React.FC<
  AppStateContextProviderProps
> = ({ children, ...props }) => {
  const [appState, setAppState] = React.useState<AppState>(props);
  useDeepEffect(() => {
    setAppState(props);
  }, [props]);

  const onAnchorTransformationEnd = React.useCallback(
    (data: {
      uniqueId: string;
      transformation: { [key: string]: unknown };
    }) => {
      const { uniqueId, transformation } = data;
      const newAppState = {
        ...props,
        transformation: {
          ...props.transformation,
          ...transformation,
        },
      };
      setAppState(newAppState);
    },
    [props],
  );

  const onMouseOverSprite = React.useCallback((data: unknown) => {}, []);

  const onClickSprite = React.useCallback((data: unknown) => {}, []);

  return (
    <AppStateContext.Provider
      value={{
        ...appState,
        onAnchorTransformationEnd,
        onMouseOverSprite,
        onClickSprite,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
