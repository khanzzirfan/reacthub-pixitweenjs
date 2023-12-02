import * as React from "react";
import useDeepEffect from "./useDeepEffect";
import { TransformationEnd } from "../types/transformation";
import { GsapPixieContext } from "../providers/GsapPixieContextProvider";
import gsap from "gsap";
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

export const AppStateSequenceProvider: React.FC<
  AppStateContextProviderProps
> = ({ children, ...props }) => {
  console.log("AppStateContextProvider", props);
  const [mouseOverSprite, setMouseOverSprite] = React.useState<boolean>(false);
  const appStateRef = React.useRef<AppState>(props);

  //// Context
  const { tl } = React.useContext(GsapPixieContext);

  useDeepEffect(() => {
    appStateRef.current = props;
    // @ts-ignore
    const { startAt, endAt } = props;
    const duration = endAt - startAt;
    console.log("AppStateContextProvider useDeepEffect", props);
    const ctx = gsap.context(() => {
      if (tl.current) {
        // add tween to timeline
        tl.current.to(appStateRef.current, { duration: duration }, 0);
      }
    });
    return () => ctx.revert();
  }, [props]);

  const onAnchorTransformationEnd = React.useCallback(
    (data: TransformationEnd) => {
      console.log("onAnchorTransformationEnd", data);
      action("onAnchorTransformationEnd")();
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
    action("onMouseOverSprite")();
  }, []);

  const onMouseOutSprite = React.useCallback(() => {
    setMouseOverSprite(false);
    action("onMouseOutSprite")();
  }, []);

  const onClickSprite = React.useCallback(() => {
    action("onClickSprite")();
  }, []);

  const onTextUpdate = React.useCallback((data: any) => {
    console.log("onTextUpdate", data);
    action("onTextUpdate")();
  }, []);

  const onExitQuillEditor = React.useCallback(() => {
    console.log("onExitQuillEditor");
    action("onExitQuillEditor")();
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
      })}
    </>
  );
};
