import { FC, memo } from "react";
import { ArticleDetails } from "entities/article";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ArticlesDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article-details');

  if (!id) {
    return <div>{t("Статья не найдена")}</div>;
  }

  return (
    <div>
      <ArticleDetails id={Number(id)} />
    </div>
  );
};

export default memo(ArticlesDetailsPage);
