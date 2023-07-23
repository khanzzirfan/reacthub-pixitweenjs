import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import react from "@vitejs/plugin-react-swc";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin("all")],
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
