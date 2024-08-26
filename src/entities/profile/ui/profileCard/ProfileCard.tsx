import { FC } from "react";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/text/Text";
import { getProfileData } from "entities/profile/model/selectors/getProfileData/getProfileData";
import { getProfileError } from "entities/profile/model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "entities/profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { ProfileCardProps } from "./ProfileCardProps";

import styles from "./ProfileCard.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/button/Button";
import { ButtonTheme } from "shared/ui/button/ButtonProps";
import { Input } from "shared/ui/input/Input";

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation("profile");
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(styles["profile-card"], {}, [className])}>
      <div className={styles["header"]}>
        <Text title={t("Профиль")} />
        <Button theme={ButtonTheme.OUTLINE}>{t("Редактировать")}</Button>
      </div>
      <div className={styles["data"]}>
        <Input value={data?.firstName} placeholder={t("Ваше имя")} />
        <Input value={data?.lastName} placeholder={t("Ваше фамилия")} />
      </div>
    </div>
  );
};
