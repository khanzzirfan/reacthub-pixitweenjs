import * as React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Flex,
  Icon,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import { GsapPixieContext } from "../providers/GsapPixieContextProvider";

import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export const VideoSeekBar: React.FC = () => {
  const rafRef = React.useRef<number>();
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const sliderThumbRef = React.useRef<HTMLDivElement>(null);
  const sliderProgressRef = React.useRef<HTMLDivElement>(null);
  const {
    tl: timeline,
    playerTimeRef,
    handlePlay,
    handlePause,
    handleReset,
    handleSeek,
    handleRestart,
    handleRepeat,
  } = React.useContext(GsapPixieContext);

  /// state
  const [time, setTime] = React.useState<number>(0);
  const [duration, setDuration] = React.useState<number>(0);

  const totalVideoSeconds = 20;

  const animate = (time: number) => {
    /// console.log("totalDuration", timeline.current.totalDuration());
    setDuration(timeline.current.totalDuration());
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
    const nTotSeconds =
      totalVideoSeconds && totalVideoSeconds > 0 ? totalVideoSeconds : 1;
    const progress = value / nTotSeconds;
    console.log("progressbar", value, progress);
    playerTimeRef.current = value;
    // @ts-ignore
    timeline && timeline.progress(progress);
    gsap.set(sliderProgressRef.current!, {
      scaleX: progress,
    });
  };
  const handleOnSliderChangeStart = (value: number) => {};
  const handleOnSliderChangeEnd = (value: number) => {};

  /** Create Draggable for the Gsap Player */

  const updateDrag = React.useCallback(
    (x: number, maxX: number) => {
      console.log("updatgeDrag running", x, maxX);
      const currentTime = (x / maxX) * totalVideoSeconds;
      const prog = x / sliderRef.current!.offsetWidth;
      console.log("drage update", currentTime, prog);
    },
    [totalVideoSeconds],
  );

  return (
    <Flex flexDir={"column"}>
      <Box>
        <Button onClick={handleRestart}>Play</Button>
        <Button onClick={handlePause}>Pause</Button>
        <Button onClick={handlePlay}>Resume</Button>
        <Button onClick={handleSeek}>Seek (4:00)</Button>
      </Box>
      <Flex px={1} mt={2}>
        <Slider
          aria-label="slider-ex-1"
          data-testid="sliderthumb"
          value={playerTimeRef.current || 0}
          min={0}
          max={duration}
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
          {duration}
        </Text>
      </Flex>
    </Flex>
  );
};
