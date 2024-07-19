import { FC } from "react";
import { Outlet } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { Navbar } from "widgets/navbar";

import "./styles/index.scss";

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <Outlet />
    </div>
  );
};
