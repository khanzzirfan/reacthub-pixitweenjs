import * as React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import {
  GsapPixieContext,
  Events,
} from "../providers/GsapPixieContextProvider";
import { emitCustomEvent } from "../events";

import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export const VideoSeekBar: React.FC = () => {
  const rafRef = React.useRef<number>();
  const sliderThumbRef = React.useRef<HTMLDivElement>(null);
  const {
    tl: timeline,
    playerTimeRef,
    handlePlay,
    handlePause,
    handleSeekTest,
    handleRestart,
  } = React.useContext(GsapPixieContext);

  /// state
  const [time, setTime] = React.useState<number>(0);
  const totalVideoSeconds = 20;

  const animate = () => {
    /// console.log("totalDuration", timeline.current.totalDuration());
    if (playerTimeRef && playerTimeRef.current) {
      setTime(playerTimeRef.current);
    }
    rafRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current!);
  }, []); // Make sure the effect runs only once

  const handleOnSliderChange = (value: number) => {
    console.log("onslider change", value);
    const nTotSeconds =
      totalVideoSeconds && totalVideoSeconds > 0 ? totalVideoSeconds : 1;
    const progress = value / nTotSeconds;
    console.log("progressbar", value, progress);

    playerTimeRef.current = value;
    // handleSeek(value);
    // // @ts-ignore
    timeline && timeline.current.progress(progress);
    // timeline && timeline.current.pause();
    // gsap.set(sliderProgressRef.current!, {
    //   scaleX: progress,
    // });
  };

  /** on slider start
   * 1. pause the timeline
   * 2. trigger custom event isDraggingStart
   */
  const handleOnSliderChangeStart = () => {
    // trigger custom event and pause the timeline
    emitCustomEvent(Events.DRAGGING_START);
    timeline && timeline.current.pause();
  };

  const handleOnSliderChangeEnd = () => {
    // trigger custom event and pause the timeline
    emitCustomEvent(Events.DRAGGING_END);
    timeline && timeline.current.pause();
  };

  /** Create Draggable for the Gsap Player */

  return (
    <Flex flexDir={"column"}>
      <Box>
        <Button onClick={handleRestart}>Play</Button>
        <Button onClick={handlePause}>Pause</Button>
        <Button onClick={handlePlay}>Resume</Button>
        <Button onClick={handleSeekTest}>Seek (4:00)</Button>
      </Box>
      <Flex px={1} mt={2}>
        <Slider
          aria-label="slider-ex-1"
          data-testid="sliderthumb"
          value={playerTimeRef.current || 0}
          min={0}
          max={10}
          step={0.1}
          onChange={handleOnSliderChange}
          onChangeStart={handleOnSliderChangeStart}
          onChangeEnd={handleOnSliderChangeEnd}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb data-testid="sliderthumb" ref={sliderThumbRef} />
        </Slider>
      </Flex>
      <Flex flexDir={"row"}>
        <Text>
          Gsap-CurrentTime: {Math.round((time + Number.EPSILON) * 100) / 100} /{" "}
          {10}
        </Text>
      </Flex>
    </Flex>
  );
};
