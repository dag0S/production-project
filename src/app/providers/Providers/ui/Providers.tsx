import { FC } from "react";
import { AppRouter } from "app/providers/router";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { StoreProvider } from "app/providers/storeProvider";

export const Providers: FC = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </StoreProvider>
  );
};
