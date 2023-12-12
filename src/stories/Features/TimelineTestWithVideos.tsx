import * as React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { PixiSequence } from "../../components/PixiSequence";
import {
  PixiVideoSprite,
  PixiImageSprite,
  PixiAudioSprite,
} from "../../components";
import { ImageProps, videoProps, audioProps } from "./common.tests";
import { VideoSeekBar } from "../../utils/VideoSeekBar";
import { GsapPixieContextProvider } from "../../providers/GsapPixieContextProvider";
import { ChakraProvider } from "@chakra-ui/react";

/// import pixi stage
import PixiStage from "../../utils/PixiStage";
import * as PIXI from "pixi.js";
import { PixiSequenceWrapper } from "../../components/PixiSequence/PixiSeqenceWrapper";
import { Animations } from "../../types";
import { Effects, Waveforms } from "../../types/Effects";
import { OverlayTypes } from "../../hocs/OverlayTilingSprite";

export enum SpriteType {
  Image = "Image",
  Gif = "Gif",
  Video = "Video",
}

const initalTransforms = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  animation: Animations.NONE,
  maxX: 0,
  maxY: 0,
  scale: 1,
  rotation: 0,
  effect: Effects.Normal,
  overlay: OverlayTypes.NONE,
  anchor: 0.5,
};

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
}

export interface TimelineProps {
  children?: React.ReactNode;
  sequences: TimelineTestProps[];
}

export const TimelineTestVideos = (props: TimelineProps) => {
  const [selected, setSelected] = React.useState<string>("");
  const backgroundColorx = PIXI.utils.string2hex("#2D2E3C");
  const width = 600;
  const height = 500;

  const { sequences } = props;

  React.useEffect(() => {
    console.log("TimelineTest Mounting", props);
    return () => {
      console.log("TimelineTest Unmounting", props);
    };
  }, [sequences]);

  return (
    <GsapPixieContextProvider>
      <ChakraProvider>
        <Flex flexDir={"column"}>
          <PixiStage
            width={width}
            height={height}
            // options={{ background: backgroundColor }}
            options={{ backgroundColor: backgroundColorx, resolution: 2 }}
          >
            <PixiSequenceWrapper startAt={0} endAt={25}>
              <PixiSequence
                startAt={sequences[0].startAt}
                endAt={sequences[0].endAt}
              >
                <PixiImageSprite
                  {...ImageProps}
                  pointerdown={() => {
                    setSelected(randomIds!?.image);
                  }}
                  applyTransformer={selected === randomIds?.image}
                  uniqueId={randomIds?.image}
                  startAt={sequences[0].startAt}
                  endAt={sequences[0].endAt}
                  transformation={{
                    ...ImageProps.transformation,
                    x: 380,
                    y: 350,
                    width: 100,
                    height: 100,
                    animation: Animations.BOUNCE_IN_RIGHT,
                  }}
                />
              </PixiSequence>
              <PixiSequence
                startAt={sequences[1].startAt}
                endAt={sequences[1].endAt}
              >
                <PixiImageSprite
                  {...ImageProps}
                  pointerdown={() => {
                    setSelected(randomIds.image2);
                  }}
                  uniqueId={randomIds.image2}
                  src="https://assets.codepen.io/693612/surya.svg"
                  applyTransformer={selected === randomIds.image2}
                  startAt={sequences[1].startAt}
                  endAt={sequences[1].endAt}
                  transformation={{
                    ...ImageProps.transformation,
                    x: 500,
                    y: 200,
                    width: 150,
                    height: 140,
                    animation: Animations.SHAKE,
                  }}
                />

                <PixiImageSprite
                  {...ImageProps}
                  uniqueId={"10101010"}
                  src="https://assets.codepen.io/693612/surya.svg"
                  applyTransformer={selected === randomIds.image2}
                  startAt={sequences[1].startAt}
                  endAt={sequences[1].endAt}
                  transformation={{
                    ...ImageProps.transformation,
                    x: 100,
                    y: 200,
                    width: 150,
                    height: 140,
                    animation: Animations.SPIN,
                  }}
                />

                <PixiImageSprite
                  {...ImageProps}
                  uniqueId={"ld87jud"}
                  src="https://assets.codepen.io/693612/surya.svg"
                  applyTransformer={selected === randomIds.image2}
                  startAt={sequences[1].startAt}
                  endAt={sequences[1].endAt}
                  transformation={{
                    ...ImageProps.transformation,
                    x: 300,
                    y: 200,
                    width: 150,
                    height: 140,
                    animation: Animations.BOUNCE_IN_DOWN,
                  }}
                />

                <PixiImageSprite
                  {...ImageProps}
                  uniqueId={"djd798jffdj"}
                  src="https://assets.codepen.io/693612/surya.svg"
                  applyTransformer={selected === randomIds.image2}
                  startAt={sequences[1].startAt}
                  endAt={sequences[1].endAt}
                  transformation={{
                    ...ImageProps.transformation,
                    x: 300,
                    y: 400,
                    width: 150,
                    height: 140,
                    animation: Animations.BOUNCE_IN_UP,
                  }}
                />
              </PixiSequence>
              <PixiSequence
                startAt={sequences[2].startAt}
                endAt={sequences[2].endAt}
                uniqueId="video-001"
              >
                <PixiVideoSprite
                  {...videoProps}
                  pointerdown={() => {
                    setSelected(randomIds.image3);
                  }}
                  src="https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2Fwk9I4g8iJK%2FTransformers_+Rise+of+the+BeastsOfficial.mp4"
                  applyTransformer={selected === randomIds.image3}
                  startAt={sequences[2].startAt}
                  endAt={sequences[2].endAt}
                  transformation={{
                    ...videoProps.transformation,
                    x: 100,
                    y: 350,
                    width: 200,
                    height: 200,
                  }}
                />
              </PixiSequence>

              <PixiSequence
                startAt={sequences[3].startAt}
                endAt={sequences[3].endAt}
                uniqueId="video-1"
              >
                <PixiVideoSprite
                  {...videoProps}
                  pointerdown={() => {
                    setSelected(randomIds.image3);
                  }}
                  applyTransformer={selected === randomIds.image3}
                  startAt={sequences[3].startAt}
                  endAt={sequences[3].endAt}
                  transformation={{
                    ...videoProps.transformation,
                    x: 100,
                    y: 100,
                    width: 350,
                    height: 300,
                  }}
                />
              </PixiSequence>
              <PixiSequence
                startAt={sequences[4].startAt}
                endAt={sequences[4].endAt}
                uniqueId="video-1"
              >
                <PixiVideoSprite
                  {...videoProps}
                  pointerdown={() => {
                    setSelected(randomIds.image3);
                  }}
                  applyTransformer={selected === randomIds.image3}
                  startAt={sequences[4].startAt}
                  endAt={sequences[4].endAt}
                  frameStartAt={5}
                  frameEndAt={12}
                  src="https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2Fwk9I4g8iJK%2FTransformers_+Rise+of+the+BeastsOfficial.mp4"
                  transformation={{
                    ...videoProps.transformation,
                    x: 450,
                    y: 100,
                    width: 450,
                    height: 300,
                  }}
                />
              </PixiSequence>
              <PixiSequence
                startAt={sequences[5].startAt}
                endAt={sequences[5].endAt}
                uniqueId="audiosprite-2"
              >
                <PixiAudioSprite
                  {...audioProps}
                  startAt={sequences[5].startAt}
                  endAt={sequences[5].endAt}
                  audioStartAt={0}
                  audioEndAt={5}
                  visible={true}
                  transformation={{
                    ...initalTransforms,
                    x: 430,
                    y: 100,
                    width: 300,
                    height: 300,
                    rotation: 0,
                    scale: 1,
                    alpha: 1,
                    anchor: 0.5,
                    waveform: Waveforms.LED,
                  }}
                />
              </PixiSequence>
              <PixiSequence
                startAt={sequences[5].startAt}
                endAt={sequences[5].endAt}
              >
                <PixiImageSprite
                  {...ImageProps}
                  pointerdown={() => {
                    setSelected(randomIds!?.image);
                  }}
                  src="https://assets.codepen.io/693612/surya.svg"
                  applyTransformer={selected === randomIds?.image}
                  uniqueId={randomIds?.image}
                  startAt={sequences[5].startAt}
                  endAt={sequences[5].endAt}
                  transformation={{
                    ...ImageProps.transformation,
                    x: 150,
                    y: 150,
                    animation: Animations.PULSE,
                  }}
                />
              </PixiSequence>
            </PixiSequenceWrapper>
          </PixiStage>
          <Box mt={5} w={700}>
            <VideoSeekBar />
          </Box>
        </Flex>
      </ChakraProvider>
    </GsapPixieContextProvider>
  );
};
