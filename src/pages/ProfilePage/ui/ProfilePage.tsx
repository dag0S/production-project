import { FC, memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from "entities/profile";
import { DynamicModuleLoader } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";
import { ReducersList } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoaderProps";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Currency } from "entities/currency";
import { Country } from "entities/country";
import { Text } from "shared/ui/text/Text";
import { TextTheme } from "shared/ui/text/TextProps";
import { useTranslation } from "react-i18next";

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const { t } = useTranslation("profile");

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t("Серверная ошибка"),
    [ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
    [ValidateProfileError.INCORRECT_COUNTRY]: t("Некорректная страна"),
    [ValidateProfileError.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
    [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
  };

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const handlerOnChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstName: value || "" }));
    },
    [dispatch]
  );

  const handlerOnChangeLastName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastName: value || "" }));
    },
    [dispatch]
  );

  const handlerOnChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: +(value || "") }));
    },
    [dispatch]
  );

  const handlerOnChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch]
  );

  const handlerOnChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch]
  );

  const handlerOnChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch]
  );

  const handlerOnChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const handlerOnChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProfilePageHeader />
      {validateErrors?.length &&
        validateErrors.map((err) => (
          <Text
            theme={TextTheme.ERROR}
            text={validateErrorTranslates[err]}
            key={err}
          />
        ))}
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstName={handlerOnChangeFirstName}
        onChangeLastName={handlerOnChangeLastName}
        onChangeAge={handlerOnChangeAge}
        onChangeCity={handlerOnChangeCity}
        onChangeUsername={handlerOnChangeUsername}
        onChangeAvatar={handlerOnChangeAvatar}
        onChangeCurrency={handlerOnChangeCurrency}
        onChangeCountry={handlerOnChangeCountry}
      />
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
