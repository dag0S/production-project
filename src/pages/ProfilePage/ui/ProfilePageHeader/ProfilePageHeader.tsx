import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/button/Button";
import { ButtonTheme } from "shared/ui/button/ButtonProps";
import { Text } from "shared/ui/text/Text";
import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

import styles from "./ProfilePageHeader.module.scss";

export const ProfilePageHeader: FC = () => {
  const { t } = useTranslation("profile");
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const handlerOnEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handlerOnCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handlerOnSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles["profile-page-header"], {}, [])}>
      <Text title={t("Профиль")} />
      {readonly ? (
        <Button theme={ButtonTheme.OUTLINE} onClick={handlerOnEdit}>
          {t("Редактировать")}
        </Button>
      ) : (
        <div className={styles["btns"]}>
          <Button theme={ButtonTheme.OUTLINE_RED} onClick={handlerOnCancelEdit}>
            {t("Отменить")}
          </Button>
          <Button theme={ButtonTheme.OUTLINE} onClick={handlerOnSave}>
            {t("Схранить")}
          </Button>
        </div>
      )}
    </div>
  );
};
