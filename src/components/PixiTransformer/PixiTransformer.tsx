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
  onDoubleClick?: (data: any) => void;
  uniqueId?: string;
};

type PixiTransformerState = {
  isDragging: boolean;
};

/**
 * Initialize PixiTransformer to transform the image
 * @param param0
 * @returns
 */
const PixiTransformer = ({
  pixiTransformerRef,
  imageRef,
  isMounted,
  transformCommit,
  transformChange,
  mouseoverEvent,
  onDoubleClick,
  uniqueId = "",
}: PixiTransformerProps) => {
  // states
  const colorYellow = PIXI.utils.string2hex("#F3C409");
  const anchorFill = PIXI.utils.string2hex("#F3C409");
  const transformerState = React.useRef<PixiTransformerState>({
    isDragging: false,
  });

  const handleOnMouseOver = React.useCallback(() => {
    if (mouseoverEvent && !transformerState.current.isDragging) {
      mouseoverEvent(true);
    }
  }, [mouseoverEvent]);

  const handleOnMouseOut = React.useCallback(() => {
    if (mouseoverEvent && !transformerState.current.isDragging) {
      mouseoverEvent(false);
    }
  }, [mouseoverEvent]);

  const handleOnMouseDown = React.useCallback(() => {
    // update transfomer state to is draggin.
    transformerState.current.isDragging = true;
  }, []);

  const handleOnMouseUp = React.useCallback(() => {
    // update transfomer state to is not dragging.
    transformerState.current.isDragging = false;
  }, []);

  const handleOnMouseUpOutside = React.useCallback(() => {
    // update transfomer state to is not dragging.
    transformerState.current.isDragging = false;
  }, []);

  const handleOnDoubleClick = React.useCallback(() => {
    console.log("dobule click in pixi transformer");
    if (onDoubleClick) onDoubleClick({ uniqueId });
  }, [onDoubleClick]);

  // add handler for transform change
  const handleOnTransformChange = React.useCallback(
    (e: any) => {
      // update transfomer state to is draggin.
      transformerState.current.isDragging = true;
      if (transformChange) transformChange(e);
    },
    [transformChange]
  );

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
    // update transformer state to is not dragging.
    transformerState.current.isDragging = false;
  }, [transformCommit]);

  React.useEffect(() => {
    if (pixiTransformerRef.current) {
      pixiTransformerRef.current.on("mouseover", handleOnMouseOver);
      pixiTransformerRef.current.on("mouseout", handleOnMouseOut);
      pixiTransformerRef.current.on("mousedown", handleOnMouseDown);
      pixiTransformerRef.current.on("mouseup", handleOnMouseUp);
      pixiTransformerRef.current.on("mouseupoutside", handleOnMouseUpOutside);
      /// pixiTransformerRef.current.on("dblclick", handleOnDoubleClick);
      pixiTransformerRef.current.addListener("dblclick", handleOnDoubleClick);
    }
    return () => {
      if (pixiTransformerRef.current) {
        pixiTransformerRef.current.off("mouseover", handleOnMouseOver);
        pixiTransformerRef.current.off("mouseout", handleOnMouseOut);
        pixiTransformerRef.current.off("mousedown", handleOnMouseDown);
        pixiTransformerRef.current.off("mouseup", handleOnMouseUp);
        pixiTransformerRef.current.off(
          "mouseupoutside",
          handleOnMouseUpOutside
        );
        ////  pixiTransformerRef.current.off("dblclick", handleOnDoubleClick);
        pixiTransformerRef.current.removeListener(
          "dblclick",
          handleOnDoubleClick
        );
      }
    };
  }, []);

  return (
    <Transformer
      // @ts-ignore
      ref={pixiTransformerRef}
      group={isMounted ? [imageRef.current] : []}
      rotateEnabled={true}
      boxRotationEnabled={true}
      centeredScaling={true}
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
      transformchange={handleOnTransformChange}
      transformcommit={handleOnTransformCommit}
    />
  );
};

export default PixiTransformer;
