// import { GsapPixieContextProvider } from "../src/providers/GsapPixieContextProvider";
import { App } from "../src/providers/ContextBridge";
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
  (Story) => (
    <App>
      <Story />
    </App>
  ),
];

export default preview;
