import { Link, Outlet } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";

import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <div>
        <Link to="/">Главная</Link>
        <br />
        <Link to="/about">О сайте</Link>
      </div>
      <div>dfasdfasdfsafe</div>
      <Outlet />
    </div>
  );
};
