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

export const VideoSeekBar: React.FC = () => {
  const rafRef = React.useRef<number>();
  const sliderThumbRef = React.useRef<HTMLDivElement>(null);
  // const seekBarRef = React.useRef<HTMLInputElement>(null);
  const sliderIsMovingRef = React.useRef<boolean>(false);
  const seekBarDraggedDurationRef = React.useRef<number>(0);

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
  // const [seekValue, setSeekValue] = React.useState<number>(0);
  const sliderValueRef = React.useRef<number>(0);

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
    console.log("handle Slider Change", value);
    sliderValueRef.current = value;
    // get total duration
    if (value < playerTimeRef.current) {
      playerTimeRef.current = Math.max(0, value + 0.1);
    } else {
      playerTimeRef.current = value;
    }
    timeline && timeline.current.time(value);
  };

  /** on slider start
   * 1. pause the timeline
   * 2. trigger custom event isDraggingStart
   */
  const handleOnSliderChangeStart = () => {
    console.log("handle Slider Change handleOnSliderChangeStart");
    // trigger custom event and pause the timeline
    emitCustomEvent(Events.SEEK_START);
    timeline && timeline.current.pause();
    // slider is moving
    sliderIsMovingRef.current = true;
    seekBarDraggedDurationRef.current = Date.now(); // Record the start timestamp
  };

  const handleOnSliderChangeEnd = () => {
    console.log("handle Slider Change handleOnSliderChangeEnd");
    // trigger custom event and pause the timeline
    emitCustomEvent(Events.SEEK_END);
    timeline && timeline.current.pause();
    emitCustomEvent(Events.PAUSE);
    // slider is moving
    sliderIsMovingRef.current = false;
    // Record the end timestamp
    const onChangeStartTimestamp = seekBarDraggedDurationRef.current;
    if (onChangeStartTimestamp) {
      const onChangeEndTimestamp = Date.now();
      const duration = (onChangeEndTimestamp - onChangeStartTimestamp) / 1000; // Convert to seconds
      console.log("duration in sigle click", duration);
      if (duration < 0.15) {
        emitCustomEvent(Events.SCRUBBER_CLICKED, playerTimeRef.current);
      }
    }
  };

  const handleOnBackward = () => {
    emitCustomEvent(Events.SCRUBBER_PAUSE);
    emitCustomEvent(Events.SCRUBBER_SEEK, 0);
    /// setSliderValue(0);
    playerTimeRef.current = 0;
    timeline.current && timeline.current.time(0);
    timeline.current && timeline.current.revert();
  };

  /** Create Draggable for the Gsap Player */

  return (
    <Flex flexDir={"column"}>
      <Box display={"flex"} gap={1}>
        <Button onClick={handleRestart}>Play</Button>
        <Button onClick={handlePause}>Pause</Button>
        <Button onClick={handlePlay}>Resume</Button>
        <Button onClick={handleSeekTest}>Seek (4sec)</Button>
        <Button onClick={handleOnBackward}>Reset</Button>
      </Box>
      <Flex px={1} mt={2}>
        <Slider
          aria-label="slider-ex-1"
          data-testid="sliderwrapper"
          value={playerTimeRef.current || 0}
          min={0}
          max={timeline?.current?.totalDuration() || 20}
          step={0.1}
          onChange={handleOnSliderChange}
          onChangeStart={handleOnSliderChangeStart}
          onChangeEnd={handleOnSliderChangeEnd}
        >
          <SliderTrack data-testid="slider-track">
            <SliderFilledTrack
              color="green.400"
              data-testid="slider-filled-track"
            />
          </SliderTrack>
          <SliderThumb data-testid="sliderthumb" ref={sliderThumbRef} />
        </Slider>
      </Flex>
      <Flex flexDir={"row"}>
        <Text px={2}>Time:</Text>
        <Text ml={2} width={10}>
          {Math.round((time + Number.EPSILON) * 100) / 100}
        </Text>
        <Text ml={1}>{"/"}</Text>
        <Text ml={1}>{timeline?.current?.duration() || 20}</Text>
      </Flex>
    </Flex>
  );
};
