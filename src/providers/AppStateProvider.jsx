import React, { createContext, useState } from "react";
import useDeepEffect from "./useDeepEffect";

export const AppStateContext = createContext();
export const AppStateContextProvider = ({ children, ...props }) => {
  const [appState, setAppState] = useState(props);
  useDeepEffect(() => {
    setAppState(props);
  }, [props]);

  const onAnchorTransformationEnd = React.useCallback(
    (data) => {
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

  const onMouseOverSprite = React.useCallback((data) => {}, []);

  const onClickSprite = React.useCallback((data) => {}, []);

  return (
    <AppStateContext.Provider>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          ...appState,
          onAnchorTransformationEnd,
          onMouseOverSprite,
          onClickSprite,
        });
      })}
    </AppStateContext.Provider>
  );
};
