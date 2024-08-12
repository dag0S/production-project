import { Counter } from "entities/counter";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const MainPage: FC = () => {
  const { t } = useTranslation("main");

  return (
    <div>
      {t("Главная страница")}
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default MainPage;
