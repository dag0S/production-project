import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/text/Text";
import { TextAlign, TextTheme } from "shared/ui/text/TextProps";
import { ProfileCardProps } from "./ProfileCardProps";
import { Input } from "shared/ui/input/Input";
import { Loader } from "shared/ui/loader/Loader";
import { Avatar } from "shared/ui/avatar/Avatar";
import { CurrencySelect } from "entities/currency";
import { CountrySelect } from "entities/country";

import styles from "./ProfileCard.module.scss";

export const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  error,
  isLoading,
  readonly,
  onChangeFirstName,
  onChangeLastName,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}) => {
  const { t } = useTranslation("profile");

  if (isLoading) {
    return (
      <div
        className={classNames(styles["profile-card"], {}, [
          className,
          styles["loading"],
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(styles["profile-card"], {}, [
          className,
          styles["error"],
        ])}
      >
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t("Произошла ошибка при загрузки данных")}
          text={t("Попробуйте обновить страницу")}
        />
      </div>
    );
  }

  return (
    <div
      className={classNames(
        styles["profile-card"],
        { [styles["editing"]]: !readonly },
        [className]
      )}
    >
      <div className={styles["data"]}>
        {data?.avatar && (
          <div className={styles["avatar-wrapper"]}>
            <Avatar src={data?.avatar} alt="avatar" size={150} />{" "}
          </div>
        )}
        <Input
          value={data?.firstName}
          placeholder={t("Ваше имя")}
          onChange={onChangeFirstName}
          readonly={readonly}
        />
        <Input
          value={data?.lastName}
          placeholder={t("Ваше фамилия")}
          onChange={onChangeLastName}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          placeholder={t("Ваше возраст")}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t("Город")}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t("Имя пользователя")}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t("Введите ссылку на аватар")}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
