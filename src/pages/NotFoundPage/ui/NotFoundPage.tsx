import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/page";

import styles from "./NotFoundPage.module.scss";

export const NotFoundPage: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <Page className={styles["not-found-page"]}>{t("Страница не найдена")}</Page>
  );
});
