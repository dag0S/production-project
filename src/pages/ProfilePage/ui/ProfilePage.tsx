import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { profileReducer } from "entities/profile";
import { DynamicModuleLoader } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";
import { ReducersList } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoaderProps";

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
  const { t } = useTranslation();
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>{t("PROFILE PAGE")}</div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
