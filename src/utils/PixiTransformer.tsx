import * as PIXI from "pixi.js";
import * as React from "react";
// @ts-ignore
import { Transformer } from "reacthub-react-bindings";

type PixiTransformerProps = {
  pixiTransformerRef: React.MutableRefObject<any>;
  imageRef: React.MutableRefObject<any>;
  isMounted: boolean;
  transformCommit?: (data: any) => void;
  transformChange?: (data: any) => void;
  mouseoverEvent?: (flag: boolean) => void;
  uniqueId?: string;
};
const PixiTransformer = ({
  pixiTransformerRef,
  imageRef,
  isMounted,
  transformCommit,
  transformChange,
  mouseoverEvent,
  uniqueId = "",
}: PixiTransformerProps) => {
  const colorYellow = PIXI.utils.string2hex("#F3C409");
  const anchorFill = PIXI.utils.string2hex("#F3C409");

  const handleOnMouseOver = React.useCallback(() => {
    if (mouseoverEvent) {
      mouseoverEvent(true);
    }
  }, [mouseoverEvent]);

  const handleOnMouseOut = React.useCallback(() => {
    if (mouseoverEvent) {
      mouseoverEvent(false);
    }
  }, [mouseoverEvent]);

  const handleOnTransformCommit = React.useCallback(() => {
    if (imageRef.current === null) return;
    const x = imageRef.current.x;
    const y = imageRef.current.y;
    const width = imageRef.current.width;
    const height = imageRef.current.height;
    const rotate = imageRef.current.rotation;
    const scale: [number, number] = [
      imageRef.current.scale.x,
      imageRef.current.scale.y,
    ];
    if (transformCommit) {
      transformCommit({
        uniqueId,
        transformation: {
          x: Math.round(x),
          y: Math.round(y),
          width: Math.round(Math.max(5, width)),
          height: Math.round(Math.max(5, height)),
          rotate: Math.round(rotate),
          scale: scale,
        },
      });
    }
  }, [transformCommit]);

  React.useEffect(() => {
    if (pixiTransformerRef.current) {
      pixiTransformerRef.current.on("mouseover", handleOnMouseOver);
      pixiTransformerRef.current.on("mouseout", handleOnMouseOut);
    }
    return () => {
      if (pixiTransformerRef.current) {
        pixiTransformerRef.current.off("mouseover", handleOnMouseOver);
        pixiTransformerRef.current.off("mouseout", handleOnMouseOut);
      }
    };
  }, []);

  return (
    <Transformer
      ref={pixiTransformerRef}
      group={isMounted ? [imageRef.current] : []}
      rotateEnabled={true}
      boxRotationEnabled={true}
      boxScalingEnabled={true}
      wireframeStyle={{ thickness: 1, color: anchorFill }}
      lockAspectRatio={true}
      scaleEnabled={true}
      handleStyle={{
        // color: colorYellow,
        outlineColor: colorYellow,
        shape: "circle",
        radius: 9,
      }}
      transformchange={transformChange}
      transformcommit={handleOnTransformCommit}
    />
  );
};

export default PixiTransformer;
