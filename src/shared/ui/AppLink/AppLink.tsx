import { FC } from "react";
import { Link } from "react-router-dom";
import { AppLinkProps, AppLinkTheme } from "./AppLinkProps";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./AppLink.module.scss";

export const AppLink: FC<AppLinkProps> = ({
  children,
  className,
  to,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}) => {
  return (
    <Link
      to={to}
      className={classNames(styles["link"], {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
