import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/button/Button";
import { Input } from "shared/ui/input/Input";
import { ButtonTheme } from "shared/ui/button/ButtonProps";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUserName/loginByUserName";
import { AppDispatch } from "app/providers/storeProvider/config/store";

import styles from "./LoginForm.module.scss";
import { TextTheme } from "shared/ui/Text/TextProps";
import { Text } from "shared/ui/Text/Text";

export const LoginForm: FC = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const handlerChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const handlerChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const handleLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(styles["login-form"])}>
      <Text title={t("Форма авторизации")} />
      {error && (
        <Text
          theme={TextTheme.ERROR}
          text={t("Вы ввели неверный логин или пароль")}
        />
      )}
      <Input
        placeholder={t("Введите имя")}
        type="text"
        autoFocus={true}
        onChange={handlerChangeUsername}
        value={username}
      />
      <Input
        placeholder={t("Введите пароль")}
        type="password"
        onChange={handlerChangePassword}
        value={password}
      />
      <Button
        className={styles["login-btn"]}
        theme={ButtonTheme.OUTLINE}
        onClick={handleLoginClick}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
  );
});
