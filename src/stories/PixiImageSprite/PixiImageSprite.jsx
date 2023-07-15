import React, { Context } from "react";
import { GsapPixieContext } from "../../providers/GsapPixieContextProvider";
import { Stage, Sprite, Container, useApp, withPixiApp } from "@pixi/react";
import * as PIXI from "pixi.js";

export const PixiImageSprite = withPixiApp((props) => {
  console.log("allProps", props);
  //// Refs
  const imageRef = React.useRef(null);
  const groupRef = React.useRef(null);
  const imgGroupRef = React.useRef(null);

  //// Context
  const gsapContext = React.useContext(GsapPixieContext);

  /// 1001
  console.log("contxt Values", gsapContext);
  const { x, y, ...restProps } = props;

  const app = useApp();
  const PixiTransformer = React.useRef(null);

  console.log("PixiTransformer");

  return (
    <Container ref={groupRef}>
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
