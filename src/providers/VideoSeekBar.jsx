import React from "react";
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
import { GsapPixieContext } from "./GsapPixieContextProvider";

import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export const VideoSeekBar = () => {
  const rafRef = React.useRef();
  const sliderRef = React.useRef();
  const sliderThumbRef = React.useRef(null);
  const sliderProgressRef = React.useRef(null);
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
  const [time, setTime] = React.useState(0);

  const totalVideoSeconds = 20;

  const animate = (time) => {
    if (playerTimeRef && playerTimeRef.current) {
      setTime(playerTimeRef.current);
    }
    rafRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []); // Make sure the effect runs only once

  const handleOnSliderChange = (value) => {
    const nTotSeconds =
      totalVideoSeconds && totalVideoSeconds > 0 ? totalVideoSeconds : 1;
    const progress = value / nTotSeconds;
    console.log("progressbar", value, progress);
    playerTimeRef.current = value;
    timeline && timeline.progress(progress);
    gsap.set(sliderProgressRef.current, {
      scaleX: progress,
    });
  };
  const handleOnSliderChangeStart = (value) => {};
  const handleOnSliderChangeEnd = (value) => {};

  /** Create Draggable for the Gsap Player */

  const updateDrag = React.useCallback(
    (x, maxX) => {
      console.log("updatgeDrag running", x, maxX);
      const currentTime = (x / maxX) * totalVideoSeconds;
      const prog = x / sliderRef.current.offsetWidth;
      console.log("drage update", currentTime, prog);
    },
    [totalVideoSeconds],
  );

  /**
  React.useEffect(() => {
    console.log(sliderRef.current.clientWidth, sliderRef.current.innerWidth);
    console.log(
      sliderThumbRef.current.clientWidth,
      sliderThumbRef.current.innerWidth,
    );
    Draggable.create(sliderThumbRef.current, {
      type: "x",
      trigger: sliderRef.current,
      bounds: sliderRef.current,
      onPress: function () {
        console.log("Draggable clicked");
      },
      onDrag: function () {
        const currentTime = (this.x / this.maxX) * totalVideoSeconds;
        /// console.log("onDragggg currenttime", currentTime);
        playerTimeRef.current = currentTime;
        const progress = this.x / sliderRef.current.offsetWidth;
        timeline && timeline.progress(progress);
        gsap.set(sliderProgressRef.current, {
          scaleX: progress,
        });
      },
      onRelease: function (e) {
        e.preventDefault();
        timeline && timeline.pause();
        handlePause();
      },
    });
  }, []);
 */
  return (
    <Flex flexDir={"column"}>
      <Box>
        <Button onClick={handleRestart}>Play</Button>
        <Button onClick={handlePause}>Pause</Button>
        <Button onClick={handlePlay}>Resume</Button>
        <Button onClick={handleSeek}>Seek (2:00)</Button>
      </Box>
      <Flex px={1} mt={2}>
        <Slider
          aria-label="slider-ex-1"
          data-testid="sliderthumb"
          value={playerTimeRef.current || 0}
          min={0}
          max={20}
          step={0.1}
          onChange={handleOnSliderChange}
          onChangeStart={handleOnSliderChangeStart}
          onChangeEnd={handleOnSliderChangeEnd}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb data-testid="sliderthumb" />
        </Slider>
      </Flex>
    </Flex>
  );
};

/**
 * 
 <Box mt={5}>
          <Box
            ref={sliderRef}
            bgColor={"black"}
            width={"100%"}
            height={5}
            cursor={"pointer"}
            position={"relative"}
          >
            <Box
              ref={sliderThumbRef}
              data-id="draggable"
              bgColor={"yellow"}
              h={5}
              width={"5px"}
              top={0}
              position={"absolute"}
              zIndex={2}
              transformOrigin={"0 0"}
            />
            <Box
              ref={sliderProgressRef}
              data-id="draggable"
              width={"100%"}
              height={"100%"}
              bgColor={"green.100"}
              transform={"scaleX(0)"}
              transformOrigin={"0 0"}
              position={"relative"}
              zIndex={1}
            />
          </Box>
        </Box>
 */
