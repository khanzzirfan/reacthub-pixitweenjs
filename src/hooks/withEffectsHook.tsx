import * as PIXI from "pixi.js";
/// import * as PixiFilters from "pixi-filters";

export const withEffectsHooks = () => {
  // Create a custom night vision filter
  const nightVisionFilter = new PIXI.Filter(
    // @ts-ignore
    null,
    `
  precision mediump float;
  uniform mat3 uNightVisionMatrix;
  varying vec2 vTextureCoord;
  uniform sampler2D uSampler;
  
  void main(void) {
      vec4 texColor = texture2D(uSampler, vTextureCoord);
      vec3 color = texColor.rgb;
      gl_FragColor = vec4(uNightVisionMatrix * vec3(color), texColor.a);
  }
`
  );

  // Define the night vision matrix
  const nightVisionMatrix = [
    0.393, 0.769, 0.189, 0.349, 0.686, 0.168, 0.272, 0.534, 0.131,
  ];

  // Set the matrix as a uniform for the filter
  nightVisionFilter.uniforms.uNightVisionMatrix = nightVisionMatrix;

  return {
    nightVisionFilter,
  };
};
