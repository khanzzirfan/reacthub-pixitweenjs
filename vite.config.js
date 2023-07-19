import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     external: [
  //       "react",
  //       "react-dom",
  //       "pixi.js",
  //       "gsap",
  //       "pixi.js-legacy",
  //       "pixi-sound",
  //       "pixi-viewport",
  //       "pixi-viewport-extensions",
  //       "@pixi/core",
  //       "@pixi/display",
  //       "@pixi/app"
  //     ],
  //   },
  // },
});
