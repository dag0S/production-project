import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/button/Button";
import { ButtonTheme } from "shared/ui/button/ButtonProps";
import { Text } from "shared/ui/text/Text";
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

import styles from "./ProfilePageHeader.module.scss";
import { getUserAuthData } from "entities/user";

export const ProfilePageHeader: FC = () => {
  const { t } = useTranslation("profile");
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

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
      {canEdit && (
        <div>
          {readonly ? (
            <Button theme={ButtonTheme.OUTLINE} onClick={handlerOnEdit}>
              {t("Редактировать")}
            </Button>
          ) : (
            <div className={styles["btns"]}>
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                onClick={handlerOnCancelEdit}
              >
                {t("Отменить")}
              </Button>
              <Button theme={ButtonTheme.OUTLINE} onClick={handlerOnSave}>
                {t("Схранить")}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
