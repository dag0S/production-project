import { Counter } from "entities/counter";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const AboutPage: FC = () => {
  const { t } = useTranslation("about");

  return (
    <div>
      {t("О сайте")}
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default AboutPage;
