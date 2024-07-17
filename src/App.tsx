import { Link, Outlet } from "react-router-dom";
import { Counter } from "./components/Counter";
import { useTheme } from "./theme/useTheme";

import "./styles/index.scss";
import { classNames } from "./helpers/classNames/classNames";

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
      <Counter />
      <Outlet />
    </div>
  );
};
