import * as React from "react";
import { PixiSequence } from "../../components/PixiSequence";
import { PixiImageSprite } from "../../components/PixiImageSprite";
import { PixiGifSprite } from "../../components/PixiGifSprite";
import { PixiBaseSpriteProps } from "../../types";
import { ImageProps, GifProps } from "./common.tests";

export enum SpriteType {
  Image = "Image",
  Gif = "Gif",
  Video = "Video",
}

const randomIds = {
  image: "image-" + Math.random().toString(36).substr(2, 9),
  gif: "gif-" + Math.random().toString(36).substr(2, 9),
  video: "video-" + Math.random().toString(36).substr(2, 9),
  image2: "image2-" + Math.random().toString(36).substr(2, 9),
  gif2: "gif2-" + Math.random().toString(36).substr(2, 9),
  video2: "video2-" + Math.random().toString(36).substr(2, 9),
  image3: "image3-" + Math.random().toString(36).substr(2, 9),
  gif3: "gif3-" + Math.random().toString(36).substr(2, 9),
  video3: "video3-" + Math.random().toString(36).substr(2, 9),
};

// delcare the props
export interface TimelineTestProps {
  startAt: number;
  endAt: number;
  spriteType: SpriteType;
  pixiBaseProps?: PixiBaseSpriteProps;
}

export const TimelineWithGif = (props: TimelineTestProps) => {
  const [selected, setSelected] = React.useState<string>("");
  const { startAt, endAt } = props;
  //// Context

  // use effect to invalidate the timeline when props changes

  return (
    <>
      <PixiSequence startAt={startAt || 0} endAt={endAt || 5}>
        <PixiImageSprite
          {...ImageProps}
          pointerdown={() => {
            setSelected(randomIds!?.image);
          }}
          applyTransformer={selected === randomIds?.image}
          uniqueId={randomIds?.image}
          startAt={startAt || 0}
          endAt={endAt || 5}
          transformation={{
            ...ImageProps.transformation,
            x: 150,
            y: 150,
          }}
        />
      </PixiSequence>
      <PixiSequence startAt={0} endAt={5}>
        <PixiGifSprite
          {...GifProps}
          pointerdown={() => {
            setSelected(randomIds.image2);
          }}
          uniqueId={randomIds.image2}
          applyTransformer={selected === randomIds.image2}
          startAt={0}
          endAt={8}
          loop={true}
          transformation={{
            ...GifProps.transformation,
            x: 500,
            y: 200,
            width: 100,
            height: 100,
          }}
        />
      </PixiSequence>
      <PixiSequence startAt={8} endAt={15}>
        <PixiImageSprite
          {...ImageProps}
          pointerdown={() => {
            setSelected(randomIds.image3);
          }}
          uniqueId={randomIds.image3}
          src="https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F64b6738988f3e366d955cebd%2Fvideos%2Fm-TrPlwQHj%2Fantoine-petit-screen-wip-02.jpg"
          applyTransformer={selected === randomIds.image3}
          startAt={8}
          endAt={15}
          transformation={{
            ...ImageProps.transformation,
            x: 300,
            y: 400,
          }}
        />
      </PixiSequence>
    </>
  );
};

// @ts-ignore
TimelineWithGif.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: "TimelineWithGif",
};
