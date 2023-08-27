import * as React from "react";
import { useContext, useEffect, useRef, useState } from "react";
// @ts-ignore
import map from "lodash/map";
import {
  Events,
  GsapPixieContext,
} from "../../providers/GsapPixieContextProvider";
import { Container, useApp, Graphics, withFilters } from "@pixi/react";
import { AdjustmentFilter } from "@pixi/filter-adjustment";
import * as PIXI from "pixi.js";
import gsap from "gsap";
import { useWorkerParser, usePlayerState } from "@react-gifs/tools";
import PixiTransformer from "../../utils/PixiTransformer";

// @ts-ignore
import isEmpty from "lodash/isEmpty";
import { getAnimByName } from "../../utils/GsapAnim";
import { TransformationEnd } from "../../types/transformation";
import { PixiAnimatedSprite } from "../PixiAnimatedSprite";
import { useCustomEventListener } from "react-custom-events";

type PixiGifSpriteProps = {
  uniqueId: string;
  src: string;
  startAt: number;
  endAt: number;
  initialAlpha: number;
  locked: boolean;
  loop: boolean;
  transformation: {
    x: number;
    y: number;
    width: number;
    height: number;
    anchor: number;
    rotation?: number;
    alpha?: number;
    scale?: number | [number, number];
    tint?: number;
    blendMode?: number;
    animation?: string;
    colorCorrection?: {
      enabled?: boolean;
      temperature?: number;
      hue?: number;
      contrast?: number;
      saturation?: number;
      exposure?: number;
      reset?: boolean;
      sharpness?: number;
      value?: number;
      levels?: number;
      luminance?: number;
      enhance?: number;
      blurRadius?: number;
      red?: number;
      green?: number;
      blue?: number;
      alpha?: number;
      scaleInput?: number;
    };
    effect?: string;
  };
  pointerdown?: () => void;
  pointerup?: () => void;
  mousedown?: () => void;
  mouseup?: () => void;
  pointerover?: () => void;
  mouseover?: () => void;
  mouseout?: () => void;
  pointerout?: () => void;
  applyTransformer?: boolean;
  onAnchorTransformationEnd?: (endData: any) => void;
};

const Filters = withFilters(Container, {
  blur: PIXI.filters.BlurFilter,
  adjust: AdjustmentFilter,
  matrix: PIXI.filters.ColorMatrixFilter,
});

/** CYAN Filters */
const CYAN = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];

interface GifState {
  isPlaying: boolean;
  progress: number;
  speed: number;
  isMuted: boolean;
  isWaiting: boolean;
  loaded: boolean;
  size: { width: number; height: number };
  isDragging: boolean;
}

const initialState: GifState = {
  isPlaying: false,
  progress: 0,
  speed: 1,
  isMuted: false,
  isWaiting: false,
  loaded: false,
  size: { width: 50, height: 50 },
  isDragging: false,
};

/**
 * PixiGifSprite Component is used to render gif image
 * @param props Gif Sprite props
 * @returns
 */
const PixiGifSprite: React.FC<PixiGifSpriteProps> = (props) => {
  //// State
  const [gifFrame, setGifFrame] = React.useState<PIXI.Texture[]>([]);
  const [, setGifDuration] = React.useState<number>(0);
  const [gifFrameObject, setGifFrameObject] = React.useState<
    PIXI.FrameObject[]
  >([]);
  const [, setCurrentFrame] = useState<number>(0);
  const [, setIsComplete] = useState<boolean>(false);

  const [isDragging, setIsDragging] = useState(false);
  const [, setIsMouseOverTransformer] = useState(false);

  const [gifState, update] = usePlayerState({ autoPlay: false });
  const graphicRef = React.useRef<PIXI.Graphics>(null);

  //// Refs
  const animatedSpriteRef = useRef<PIXI.AnimatedSprite>(null);
  const containerRef = useRef<PIXI.Container>(null);
  const parentNode = useRef<PIXI.Container>(null);
  const imgGroupRef = useRef<PIXI.Container>(null);
  const transformerRef = useRef<PIXI.Container>(null);
  const gifStateRef = useRef<GifState>(initialState);

  //// Context
  const { tl } = useContext(GsapPixieContext);

  /// 1001
  const { frames: gifFrames, delays: gifDelays, loaded } = gifState;

  const {
    uniqueId,
    src,
    startAt,
    endAt,
    initialAlpha,
    locked,
    loop,
    transformation: {
      width = 0,
      height = 0,
      x,
      y,
      rotation = 0,
      scale,
      animation,
      colorCorrection,
      effect,
    },
    pointerdown,
    pointerup,
    mousedown,
    mouseup,
    pointerover,
    mouseover,
    mouseout,
    pointerout,
    applyTransformer,
    onAnchorTransformationEnd,
  } = props;

  // color corrections
  const {
    contrast = 1,
    saturation = 1,
    exposure = 1,
    blurRadius = 0,
    alpha = 1,
  } = colorCorrection || {};

  /** adjustment filter */
  const adjustments = {
    brightness: exposure,
    contrast,
    saturation,
    alpha,
  };

  const app = useApp();

  //  load and parse gif
  useWorkerParser(src, update);

  // updates current index
  // usePlayback(gifState, () => update(({ index }) => ({ index: index + 1 })));

  /** Adding custom event listners */
  /** Event Listeneres */
  useCustomEventListener(Events.PAUSE, (data) => {
    console.log("pause event", data);
    if (animatedSpriteRef.current) {
      animatedSpriteRef.current.stop();
      gifStateRef.current.isPlaying = false;
    }
  });

  // transformer to handle sprite transformation
  const handleOnTransformEnd = React.useCallback(
    (endData: TransformationEnd) => {
      console.log("changeEnd", endData);
      if (onAnchorTransformationEnd) {
        onAnchorTransformationEnd(endData);
      }
    },
    []
  );

  React.useEffect(() => {
    if (!isEmpty(gifFrames)) {
      // app.stage.addChild(frames);
      /// load textues
      const texturedFrames = map(gifFrames, (eachFrame: ImageData) => {
        const { data, width, height } = eachFrame;
        const dataEx = new Uint8Array(data);
        return PIXI.Texture.fromBuffer(dataEx, width, height);
      });

      const frameObj = texturedFrames.map(
        (eachFrame: PIXI.Texture, index: number) => {
          return {
            texture: eachFrame,
            time: gifDelays[index],
          };
        }
      );

      setGifFrame(texturedFrames);
      setGifFrameObject(frameObj);
      let duration = 0;
      gifDelays.forEach((delay) => {
        duration += delay * 10;
      });
      setGifDuration(duration);
    }
  }, [gifFrames, gifDelays]);

  /** Gsap Start and Stop Events */
  const gsapOnStart = (startAt: number) => {
    if (animatedSpriteRef.current) {
      animatedSpriteRef.current.gotoAndPlay(startAt || 0);
      gifStateRef.current.isPlaying = true;
    }
  };

  const gsapOnComplete = () => {
    if (animatedSpriteRef.current) {
      animatedSpriteRef.current.stop();
      // animatedSpriteRef.current.gotoAndStop(0);
      gifStateRef.current.isPlaying = false;
    }
  };

  const onInterrupt = () => {
    if (animatedSpriteRef.current) {
      animatedSpriteRef.current.stop();
      gifStateRef.current.isPlaying = false;
    }
  };

  const onUpdate = () => {
    // console.log('timeline paused', ctxTimeLine.paused());
    if (animatedSpriteRef.current && !gifStateRef.current.isPlaying) {
      animatedSpriteRef.current.play();
      gifStateRef.current.isPlaying = true;
    }
  };

  const handleComplete = () => {
    setIsComplete(true);
    // if (onComplete) {
    //   onComplete();
    // }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {});
    if (containerRef.current && tl.current) {
      const data = {
        duration: Number(endAt) - Number(startAt),
        onStart: gsapOnStart,
        onComplete: gsapOnComplete,
        onStartParams: [startAt],
        onCompleteParams: [],
        onInterrupt: onInterrupt,
        onUpdate: onUpdate,
        onUpdateParams: [],
      };

      const ease = getAnimByName(animation || "None");
      ctx = gsap.context(() => {
        if (!isEmpty(ease.from)) {
          tl.current
            .from(containerRef.current, { ...ease.from }, startAt)
            .to(imgGroupRef.current, { alpha: 1, duration: 0.2 }, startAt)
            .from(imgGroupRef.current, { ...data }, startAt)
            .to(containerRef.current, { alpha: 0, duration: 0.2 }, endAt - 0.2);
        } else if (!isEmpty(ease.to)) {
          tl.current
            .to(
              containerRef.current,
              { alpha: 1, duration: 0.2, ...ease.to },
              startAt
            )
            .from(imgGroupRef.current, { ...data }, startAt)
            .to(containerRef.current, { alpha: 0, duration: 0.2 }, endAt - 0.2);
        } else if (!isEmpty(ease.fromTo)) {
          tl.current
            .fromTo(
              containerRef.current,
              ease.fromTo?.from,
              ease.fromTo?.to,
              startAt
            )
            .from(imgGroupRef.current, { ...data }, startAt)
            .to(containerRef.current, { alpha: 0, duration: 0.2 }, endAt - 0.2);
        } else {
          tl.current
            .to(containerRef.current, { alpha: 1, duration: 0.01 }, startAt)
            .from(imgGroupRef.current, { ...data }, startAt)
            .to(
              containerRef.current,
              { alpha: 0, duration: 0.1 },
              Number(endAt) - Number(0.1)
            );
        }
      });
    }
    return () => ctx.revert(); // cleanup!
  }, [animation, startAt, endAt]);

  /** handle on tranformer onchange */
  const handleOnTransformChange = React.useCallback(() => {
    setIsDragging(true);
  }, []);

  app.ticker.add((delta) => {
    if (graphicRef.current) {
      graphicRef.current.rotation += 0.01 * delta;
      graphicRef.current
        .clear()
        .lineStyle(4, 0xffffff, 1)
        .moveTo(40, 0)
        .arc(0, 0, 40, 0, Math.PI * 2 * 0.6, false);
    }
  });

  const draw = React.useCallback((g: PIXI.Graphics) => {
    g.clear();
  }, []);

  return (
    // @ts-ignore
    <Container ref={parentNode}>
      {/* @ts-ignore */}
      <Container
        ref={containerRef}
        alpha={initialAlpha}
        position={[x, y]}
        pivot={[x, y]}
        width={width}
        height={height}
      >
        {/* @ts-ignore */}
        <Container ref={imgGroupRef}>
          {!loaded && (
            // @ts-ignore
            <Container anchor={0.5} position={[width / 2, height / 2]}>
              <Graphics x={x} y={y} ref={graphicRef} draw={draw} />
            </Container>
          )}
          {gifFrame && gifFrame.length > 0 && (
            <Filters
              scale={1}
              blur={{ blur: blurRadius, quality: 4 }}
              adjust={adjustments}
              apply={({ matrix }: { matrix: any }) => {
                if (effect === "BlackAndWhite") {
                  matrix.desaturate();
                } else if (effect === "Sepia") {
                  matrix.sepia();
                } else if (effect === "RetroVintage") {
                  matrix.negative();
                } else if (effect === "NightVision") {
                  matrix.negative();
                } else if (effect === "Normal") {
                  matrix.reset();
                }
              }}
              matrix={{
                enabled: true,
                // @ts-ignore
                matrix: CYAN,
              }}
            >
              <PixiAnimatedSprite
                x={x}
                y={y}
                width={width}
                height={height}
                rotation={rotation}
                animationSpeed={1}
                loop={loop}
                // isPlaying={!!tlPlay}
                // @ts-ignore
                textures={gifFrameObject}
                onComplete={handleComplete}
                onFrameChange={(currentFrame: number) =>
                  setCurrentFrame(currentFrame)
                }
                anchor={0.5}
                {...(!locked &&
                  !isDragging && {
                    interactive: true,
                    buttonMode: true,
                    pointerdown: pointerdown,
                    pointerover: pointerover,
                    pointerout: pointerout,
                    pointerup: pointerup,
                    mousedown: mousedown,
                    mouseup: mouseup,
                    mouseover: mouseover,
                    mouseout: mouseout,
                  })}
                forwardRef={animatedSpriteRef}
                scale={scale}
              />
            </Filters>
          )}
        </Container>
      </Container>
      {applyTransformer && (
        <PixiTransformer
          pixiTransformerRef={transformerRef}
          imageRef={containerRef}
          isMounted={loaded}
          transformCommit={handleOnTransformEnd}
          transformChange={handleOnTransformChange}
          mouseoverEvent={setIsMouseOverTransformer}
          uniqueId={uniqueId}
        />
      )}
    </Container>
  );
};

export default PixiGifSprite;
