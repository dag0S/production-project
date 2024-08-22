import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcherProps } from "./LangSwitcherProps";
import { Button } from "shared/ui/button/Button";
import { ButtonTheme } from "shared/ui/button/ButtonProps";

import styles from "./LangSwitcher.module.scss";

export const LangSwitcher: FC<LangSwitcherProps> = memo(
  ({ className, short }) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
      i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
      <Button
        className={classNames(styles["lang-switcher"], {}, [className])}
        theme={ButtonTheme.CLEAR}
        onClick={toggle}
      >
        {t(short ? "Короткий язык" : "Язык")}
      </Button>
    );
  }
);
