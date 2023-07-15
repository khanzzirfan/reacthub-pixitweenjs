import React, { Context } from "react";
import { GsapPixieContext } from "../../providers/GsapPixieContextProvider";
import { Stage, Sprite, Container, useApp, withPixiApp } from "@pixi/react";
import * as PIXI from "pixi.js";

export const PixiImageSprite = withPixiApp((props) => {
  console.log("allProps", props);
  //// Refs
  const imageRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const imgGroupRef = React.useRef(null);

  //// Context
  const { tl } = React.useContext(GsapPixieContext);

  /// 1001
  console.log("contxt Values", tl);
  const { x, y, startAt, endAt, ...restProps } = props;

  const app = useApp();
  const PixiTransformer = React.useRef(null);

  React.useEffect(() => {
    if (containerRef.current && tl.current) {
      console.log("adding to timeline animation");
      tl.current
        .to(containerRef.current, { opacity: 1, duration: 0.1 }, startAt)
        .from(
          containerRef.current,
          { duration: Number(endAt) - Number(startAt) },
          startAt,
        )
        .to(
          containerRef.current,
          { opacity: 0, duration: 0.1 },
          Number(endAt) - Number(0.2),
        );
      console.log("sprite", tl.current.totalDuration());
    }
  }, [startAt, endAt]);

  console.log("PixiTransformer");

  return (
    <Container ref={containerRef}>
      <Container ref={imgGroupRef}>
        <Sprite
          image="https://assets.codepen.io/693612/surya.svg"
          width={150}
          height={150}
          anchor={0.5}
          ref={imageRef}
          x={x}
          y={y}
          interactive={true}
          pointerdown={() => {
            console.log("pointerdown");
          }}
          pointerup={() => {
            console.log("pointer up");
          }}
          mousedown={() => {
            console.log("mousedown");
          }}
        />
      </Container>
    </Container>
  );
});

// function App({ backgroundColor, ...props }) {
//   const backgroundColorx = PIXI.utils.string2hex(backgroundColor || "#2D2E3C");
//   const width = 600;
//   const height = 600;

//   /// color: 0x1099bb,
//   return (
//     <Stage
//       width={width}
//       height={height}
//       // options={{ background: backgroundColor }}
//       options={{ backgroundColor: backgroundColorx, resolution: 2 }}
//     >
//       <ImageSprite {...props} />
//     </Stage>
//   );
// }

// App.displayName = "PixiImageSprite";

// export default App;
