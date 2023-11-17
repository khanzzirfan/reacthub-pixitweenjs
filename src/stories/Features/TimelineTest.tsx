import * as React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { PixiSequence } from "../../components/PixiSequence";
import { PixiImageSprite } from "../../components/PixiImageSprite";
import { ImageProps } from "./common.tests";
import { VideoSeekBar } from "../../utils/VideoSeekBar";
import { GsapPixieContextProvider } from "../../providers/GsapPixieContextProvider";
import { ChakraProvider } from "@chakra-ui/react";

/// import pixi stage
import PixiStage from "../../utils/PixiStage";
import * as PIXI from "pixi.js";
import { Animations } from "../../types";

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
}

export interface TimelineProps {
  children?: React.ReactNode;
  sequences: TimelineTestProps[];
}

export const TimelineTest = (props: TimelineProps) => {
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
                  x: 150,
                  y: 150,
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
                src="https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F64b6738988f3e366d955cebd%2Fvideos%2FMXlcGUL5Ws%2Fanim-mercury.jpg"
                applyTransformer={selected === randomIds.image2}
                startAt={sequences[1].startAt}
                endAt={sequences[1].endAt}
                transformation={{
                  ...ImageProps.transformation,
                  x: 500,
                  y: 200,
                  width: 100,
                  height: 100,
                  animation: Animations.BOUNCE_IN,
                }}
              />
            </PixiSequence>
            <PixiSequence
              startAt={sequences[2].startAt}
              endAt={sequences[2].endAt}
            >
              <PixiImageSprite
                {...ImageProps}
                pointerdown={() => {
                  setSelected(randomIds.image3);
                }}
                uniqueId={randomIds.image3}
                src="https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F64b6738988f3e366d955cebd%2Fvideos%2Fm-TrPlwQHj%2Fantoine-petit-screen-wip-02.jpg"
                applyTransformer={selected === randomIds.image3}
                startAt={sequences[2].startAt}
                endAt={sequences[2].endAt}
                transformation={{
                  ...ImageProps.transformation,
                  x: 300,
                  y: 400,
                  animation: Animations.BOUNCE_IN,
                }}
              />
            </PixiSequence>
          </PixiStage>
          <Box mt={5} w={600}>
            <VideoSeekBar />
          </Box>
        </Flex>
      </ChakraProvider>
    </GsapPixieContextProvider>
  );
};
