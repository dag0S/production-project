import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/button/Button";
import { Input } from "shared/ui/input/Input";
import { ButtonTheme } from "shared/ui/button/ButtonProps";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUserName/loginByUserName";
import { TextTheme } from "shared/ui/text/TextProps";
import { Text } from "shared/ui/text/Text";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { DynamicModuleLoader } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";
import { ReducersList } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoaderProps";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { LoginFormProps } from "./LoginFormProps";

import styles from "./LoginForm.module.scss";

const initialReducers: ReducersList = {
  loginFrom: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo(({ className, onSuccess }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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

  const handleLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === "rejected" && onSuccess) {
      onSuccess();
    }
  }, [onSuccess, dispatch, username, password]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(styles["login-form"], {}, [className])}>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
