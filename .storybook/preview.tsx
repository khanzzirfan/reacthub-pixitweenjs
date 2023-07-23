import React from "react";
import { AppWrapper } from "../src/utils/AppWrapper";
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => <AppWrapper>{Story({ appState: "x" })}</AppWrapper>,
];

export default preview;