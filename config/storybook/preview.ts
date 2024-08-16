import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/styleDecorator/styleDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from "shared/config/storybook/routerDecorator/routerDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator(Theme.LIGHT),
    RouterDecorator,
  ],
};

export default preview;
