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

  /// vignette filter effect
  //   // Create a vignette filter
  const vignetteFilter = new PIXI.Filter(
    // @ts-ignore
    null,
    `
    precision mediump float;
    varying vec2 vTextureCoord;
    uniform sampler2D uSampler;
    uniform vec4 vignetteColor;
    uniform float vignetteSize;
    uniform float vignetteStrength;

    void main(void) {
      vec4 texColor = texture2D(uSampler, vTextureCoord);
      vec2 delta = vTextureCoord - vec2(0.5);
      float vignette = 1.0 - smoothstep(vignetteSize, 0.5, length(delta));
      gl_FragColor = texColor * vignetteColor * vignetteStrength * vignette;
    }
    `
  );

  // Set the vignette parameters
  vignetteFilter.uniforms.vignetteColor = [0.0, 0.0, 0.0, 1.0]; // Black vignette
  vignetteFilter.uniforms.vignetteSize = 0.7; // Adjust the size
  vignetteFilter.uniforms.vignetteStrength = 0.6; // Adjust the strength

  return {
    nightVisionFilter,
    vignetteFilter: vignetteFilter,
  };
};
