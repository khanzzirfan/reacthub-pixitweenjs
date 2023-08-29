import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import EnvironmentPlugin from "vite-plugin-environment";
// import terser from "@rollup/plugin-terser";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin("all"),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "reacthub-pixitweenjs",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      /// plugins: [terser()],
      external: [
        "react",
        "react-dom",
        "pixi.js",
        "gsap",
        "@pixi/sound",
        "@pixi/react",
        "@pixi/assets",
        "reacthub-react-bindings",
        // "pixi.js-legacy",
        // "pixi-sound",
        // "pixi-viewport",
        // "pixi-viewport-extensions",
        // "@pixi/core",
        // "@pixi/display",
        // "@pixi/app",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "pixi.js": "PIXI",
          gsap: "gsap",
          "@pixi/sound": "PIXI.sound",
          "@pixi/react": "PIXIReact",
          "@pixi/assets": "PIXIAssets",
        },
      },
    },
  },
});
