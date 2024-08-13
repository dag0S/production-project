import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/button/Button";
import { Input } from "shared/ui/input/Input";

import styles from "./LoginForm.module.scss";

export const LoginForm: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles["login-form"])}>
      <Input placeholder={t("Введите имя")} type="text" autoFocus={true} />
      <Input placeholder={t("Введите пароль")} type="password" />
      <Button className={styles["login-btn"]}>{t("Войти")}</Button>
    </div>
  );
};
