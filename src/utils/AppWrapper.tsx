import * as React from "react";
import { Flex, Box } from "@chakra-ui/react";
import * as PIXI from "pixi.js";
import { ChakraProvider } from "@chakra-ui/react";
import { GsapPixieContextProvider } from "../providers/GsapPixieContextProvider";
import { VideoSeekBar } from "./VideoSeekBar";
import Stage from "./PixiStage";

interface AppProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export const AppWrapper: React.FC<AppProps> = ({
  children,
  backgroundColor,
}) => {
  const backgroundColorx = PIXI.utils.string2hex(backgroundColor || "#2D2E3C");
  const width = 600;
  const height = 500;
  /// color: 0x1099bb,
  return (
    <div className="App">
      <GsapPixieContextProvider>
        <ChakraProvider>
          <Flex flexDir={"column"}>
            <Stage
              width={width}
              height={height}
              // options={{ background: backgroundColor }}
              options={{ backgroundColor: backgroundColorx, resolution: 2 }}
            >
              {children}
            </Stage>
            <Box mt={5} w={600}>
              <VideoSeekBar />
            </Box>
          </Flex>
        </ChakraProvider>
      </GsapPixieContextProvider>
    </div>
  );
};
