import { FC, memo } from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcherProps } from "./ThemeSwitcherProps";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button } from "shared/ui/button/Button";
import { ButtonTheme } from "shared/ui/button/ButtonProps";

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames("", {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
