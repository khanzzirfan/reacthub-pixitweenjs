import { TilingSprite } from "@pixi/react";

export enum OverlayTypes {
  NONE = "none",
  NORMAL = "normal",
  LENSFLARE = "lensflare",
  FILMSTRIP = "filmstrip",
  GRUNGE = "grunge",
  BRICKS = "bricks",
}

export enum Waveforms {
  NONE = "none",
  EQUALIZER = "equalizer",
  SIRIWAVE = "siriwave",
}

export interface Overlay {
  src: string;
  blendmode: "ADD" | "MULTIPLY";
  alpha: number;
}

export interface Overlays {
  normal: Overlay;
  lensflare: Overlay;
  filmstrip: Overlay;
  grunge: Overlay;
  bricks: Overlay;
}

export const overlays: Overlays = {
  normal: {
    src: "https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/assets/overlays/eyecast_lensflare_overlay_50.jpg",
    blendmode: "ADD",
    alpha: 0, // opacity 0 - 1
  },
  lensflare: {
    src: "https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/assets/overlays/eyecast_lensflare_overlay_50.jpg",
    blendmode: "ADD",
    alpha: 1, // opacity 0 - 1
  },
  filmstrip: {
    src: "https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/assets/overlays/frames_filmstrip_5.png",
    blendmode: "ADD",
    alpha: 1, // opacity 0 - 1
  },
  grunge: {
    src: "https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/assets/overlays/pixi_overlay_grunge_60.jpg",
    blendmode: "ADD",
    alpha: 1, // opacity 0 - 1
  },
  bricks: {
    src: "https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/assets/overlays/bricks_Overlay_100.jpg",
    blendmode: "MULTIPLY",
    alpha: 1, // opacity 0 - 1
  },
};

interface PixiOverlayProps {
  overlay: OverlayTypes;
  width: number;
  height: number;
  x: number;
  y: number;
}

export const PixiOverlayTilingSprite = (props: PixiOverlayProps) => {
  const { overlay, width, height, x, y } = props;
  // @ts-ignore
  const { src, blendmode } = overlays[overlay] || overlays["normal"];

  return (
    <TilingSprite
      image={src}
      width={width}
      height={height}
      x={x}
      y={y}
      tilePosition={{ x: 0, y: 0 }}
      tileScale={0.5}
      alpha={0.5}
      anchor={0.5}
    />
  );
};
