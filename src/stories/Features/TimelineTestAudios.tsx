import * as React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { PixiSequence } from "../../components/PixiSequence";
import { PixiImageSprite, PixiAudioSprite } from "../../components";
import { VideoSeekBar } from "../../utils/VideoSeekBar";
import { GsapPixieContextProvider } from "../../providers/GsapPixieContextProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { ImageProps, audioProps } from "./common.tests";
import { PixiSequenceWrapper } from "../../components/PixiSequence/PixiSeqenceWrapper";

/// import pixi stage
import PixiStage from "../../utils/PixiStage";
import * as PIXI from "pixi.js";

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

export const TimelineTestAudios = (props: TimelineProps) => {
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
            <PixiSequenceWrapper startAt={0} endAt={16}>
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
                startAt={sequences[0].startAt}
                endAt={sequences[0].endAt}
                uniqueId="audiosprite-2"
              >
                <PixiAudioSprite
                  {...audioProps}
                  uniqueId="audiosprite-2"
                  startAt={sequences[0].startAt}
                  endAt={sequences[0].endAt}
                  audioStartAt={4}
                  audioEndAt={10}
                  visible={true}
                  src="https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2F7M7ixuYvwQ%2Fsingle-speaker-speech-audio.mp3"
                />
              </PixiSequence>

              <PixiSequence
                startAt={sequences[1].startAt}
                endAt={sequences[1].endAt}
                uniqueId="audiosprite-3"
              >
                <PixiAudioSprite
                  {...audioProps}
                  uniqueId="audiosprite-3"
                  startAt={sequences[1].startAt}
                  endAt={sequences[1].endAt}
                  audioStartAt={0}
                  audioEndAt={5}
                  visible={true}
                />
              </PixiSequence>
              <PixiSequence
                startAt={sequences[2].startAt}
                endAt={sequences[2].endAt}
                uniqueId="audiosprite-4"
              >
                <PixiAudioSprite
                  {...audioProps}
                  startAt={sequences[2].startAt}
                  endAt={sequences[2].endAt}
                  uniqueId="audiosprite-4"
                  audioStartAt={0}
                  audioEndAt={9.482438}
                  src="https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2Ftik4DkVw_V%2Fpenguins-audio_1-8.MP3"
                  visible={true}
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
