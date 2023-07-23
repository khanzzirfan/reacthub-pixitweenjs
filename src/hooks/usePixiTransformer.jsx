import { Transformer } from "@pixi-essentials/transformer";
import * as PIXI from "pixi.js";
import { useApp } from "@pixi/react";
import React, { useEffect, useRef } from "react";
import has from 'lodash/has';
import isEmpty from 'lodash/isEmpty';

const colorYellow = PIXI.utils.string2hex("#F3C409");
const anchorFill = PIXI.utils.string2hex("#F3C409");

export const usePixiTransformer = (
  uniqueId = "",
  onTransformEnd,
  events = {},
  mouseoverEvent = (f) => f,
  setDragging = (f) => f
) => {
  const [isDragging, setIsDragging] = React.useState(false);
  const PixiTransformer = React.useRef(null);
  const mounted = React.useRef(false);
  const app = useApp();
  const transformerRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      if (transformerRef.current) {
        parentRef.current.removeChild(transformerRef.current);
      }
    };
  }, []);

  const transformChange = React.useCallback((e) => {
    setIsDragging(true);
    setDragging(true);
  }, []);

  const transformCommit = React.useCallback((e) => {
    const x = PixiTransformer.current.x;
    const y = PixiTransformer.current.y;
    const width = PixiTransformer.current.width;
    const height = PixiTransformer.current.height;
    const rotate = PixiTransformer.current.rotation;
    const scale = [
      PixiTransformer.current.scale.x,
      PixiTransformer.current.scale.y
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
          scale
        }
      });
    }
    setIsDragging(false);
    setDragging(false);
  }, []);

  const handleOnDblClick = React.useCallback((e) => {
    if (events && has(events, "dblclick")) {
      events.dblclick(e);
    }
  }, []);

  const handleOnMouseOver = React.useCallback(
    (msevent) => {
      if (mouseoverEvent) {
        mouseoverEvent(true);
      }
    },
    [mouseoverEvent]
  );

  const handleOnMouseOut = React.useCallback(
    (msevent) => {
      if (mouseoverEvent) {
        mouseoverEvent(false);
      }
    },
    [mouseoverEvent]
  );

  const handleTransformer = React.useCallback(
    (node, parentNode) => {
      const isEnabled = true;
      PixiTransformer.current = node;
      const transformer = new Transformer({
        rotateEnabled: isEnabled,
        boxRotationEnabled: isEnabled,
        boxScalingEnabled: isEnabled,
        scaleEnabled: isEnabled,
        group: [node],
        wireframeStyle: {
          thickness: 2,
          color: anchorFill
        },
        lockAspectRatio: true,
        handleStyle: {
          // color: colorYellow,
          outlineColor: colorYellow,
          shape: "circle",
          radius: 10
        }
      });

      // transformer.addListener("transformchange", transformChange);
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
      transformerRef.current = transformer;
      parentRef.current = parentNode;
      parentRef.current.addChild(transformerRef.current);
    },
    [
      transformCommit,
      transformChange,
      handleOnMouseOver,
      handleOnMouseOut,
      handleOnDblClick
    ]
  );

  const removeTransformer = React.useCallback(() => {
    if (transformerRef.current) {
      parentRef.current.removeChild(transformerRef.current);
    }
  }, []);

  return { handleTransformer, removeTransformer, isDragging };
};
