import { FC, memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from "entities/profile";
import { DynamicModuleLoader } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";
import { ReducersList } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoaderProps";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProfileCard />
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
