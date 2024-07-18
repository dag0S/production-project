import { FC } from "react";
import { AppRouter } from "app/providers/router";
import { ThemeProvider } from "app/providers/ThemeProvider";

export const Providers: FC = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
};
