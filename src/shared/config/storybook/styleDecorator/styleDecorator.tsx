import type { Decorator } from "@storybook/react";
import { Theme, ThemeProvider } from "../../../../app/providers/ThemeProvider";

import "app/styles/index.scss";

export const StyleDecorator =
  (theme: Theme): Decorator =>
  // eslint-disable-next-line react/display-name
  (Story) => (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
