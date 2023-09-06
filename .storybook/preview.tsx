import React from "react";
import { AppWrapper } from "../src/utils/AppWrapper";
import whyDidYouRender from "@welldone-software/why-did-you-render";

whyDidYouRender(React, {
  trackAllPureComponents: true,
});

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

export default preview;
