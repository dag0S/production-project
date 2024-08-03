import { FC } from "react";
import { useTranslation } from "react-i18next";

import styles from "./NotFoundPage.module.scss";

export const NotFoundPage: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles["not-found-page"]}>{t("Страница не найдена")}</div>
  );
};
