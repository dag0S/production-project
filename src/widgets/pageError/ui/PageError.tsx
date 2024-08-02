import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/button/Button";

import * as styles from "./PageError.module.scss";

export const PageError: FC = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={styles["page-error"]}>
      <p>{t("Произошла непредвиденная ошибка")}</p>
      <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
    </div>
  );
};
