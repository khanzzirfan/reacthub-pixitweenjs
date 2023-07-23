import { Transformer } from "@pixi-essentials/transformer";
import * as PIXI from "pixi.js";
import { useApp } from "@pixi/react";
import * as React from "react";
import { useEffect, useRef, useCallback } from "react";
import { Transformation } from "../types/transformation";
// @ts-ignore
import has from "lodash/has";

const colorYellow = PIXI.utils.string2hex("#F3C409");
const anchorFill = PIXI.utils.string2hex("#F3C409");

interface Events {
  dblclick?: (e: any) => void;
}

interface Props {
  uniqueId?: string;
  onTransformEnd?: (data: {
    uniqueId: string;
    transformation: Transformation;
  }) => void;
  events?: Events;
  mouseoverEvent?: (flag: boolean) => void;
  setDragging?: (flag: boolean) => void;
}

export const usePixiTransformer = ({
  uniqueId = "",
  onTransformEnd,
  events = {},
  mouseoverEvent = (f) => f,
  setDragging = (f) => f,
}: Props) => {
  const [isDragging, setIsDragging] = React.useState(false);
  const PixiTransformer = React.useRef<PIXI.Container>(null);
  const mounted = React.useRef(false);
  const app = useApp();
  const transformerRef = useRef<Transformer>(null);
  const parentRef = useRef<PIXI.Container>(null);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      if (transformerRef.current) {
        parentRef.current?.removeChild(transformerRef.current);
      }
    };
  }, []);

  const transformChange = useCallback(() => {
    setIsDragging(true);
    setDragging(true);
  }, []);

  const transformCommit = useCallback(() => {
    if (PixiTransformer.current === null) return;
    const x = PixiTransformer.current.x;
    const y = PixiTransformer.current.y;
    const width = PixiTransformer.current.width;
    const height = PixiTransformer.current.height;
    const rotate = PixiTransformer.current.rotation;
    const scale: [number, number] = [
      PixiTransformer.current.scale.x,
      PixiTransformer.current.scale.y,
    ];
    if (onTransformEnd) {
      onTransformEnd({
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
    setIsDragging(false);
    setDragging(false);
  }, []);

  const handleOnDblClick = useCallback((e: any) => {
    if (events && has(events, "dblclick") && events.dblclick) {
      events.dblclick(e);
    }
  }, []);

  const handleOnMouseOver = useCallback(
    (msevent: any) => {
      if (mouseoverEvent) {
        mouseoverEvent(true);
      }
    },
    [mouseoverEvent],
  );

  const handleOnMouseOut = useCallback(
    (msevent: any) => {
      if (mouseoverEvent) {
        mouseoverEvent(false);
      }
    },
    [mouseoverEvent],
  );

  const handleTransformer = useCallback(
    (node: PIXI.Container, parentNode: PIXI.Container) => {
      const isEnabled = true;
      // @ts-ignore
      PixiTransformer.current = node;
      const transformer = new Transformer({
        rotateEnabled: isEnabled,
        boxRotationEnabled: isEnabled,
        boxScalingEnabled: isEnabled,
        scaleEnabled: isEnabled,
        group: [node],
        wireframeStyle: {
          thickness: 2,
          color: anchorFill,
        },
        lockAspectRatio: true,
        handleStyle: {
          // color: colorYellow,
          outlineColor: colorYellow,
          shape: "circle",
          radius: 10,
        },
      });

      // transformer.addListener("transformchange", transformChange);
      // @ts-ignore
      transformer.addListener("transformcommit", transformCommit);
      // transformer.addListener("dblclick", (evt) => {
      //   handleOnDblClick(evt);
      // });
      // transformer.on("mouseover", () => {
      //   handleOnMouseOver(true);
      // });
      // transformer.on("mouseout", () => {
      //   handleOnMouseOut(false);
      // });
      // @ts-ignore
      transformerRef.current = transformer;
      // @ts-ignore
      parentRef.current = parentNode;
      parentRef.current.addChild(transformerRef.current);
    },
    [
      transformCommit,
      transformChange,
      handleOnMouseOver,
      handleOnMouseOut,
      handleOnDblClick,
    ],
  );

  const removeTransformer = useCallback(() => {
    if (transformerRef.current) {
      // @ts-ignore
      parentRef.current.removeChild(transformerRef.current);
    }
  }, []);

  return { handleTransformer, removeTransformer, isDragging };
};
