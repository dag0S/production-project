import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleSortSelectorProps } from "./ArticleSortSelectorProps";
import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/select/Select";
import { SelectOptions } from "shared/ui/select/SelectProps";
import { ArticleSortField } from "../../model/types/article";
import { SortOrder } from "shared/types/SortOrder";

import styles from "./ArticleSortSelector.module.scss";

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = ({
  className,
  onChangeOrder,
  onChangeSort,
  order,
  sort,
}) => {
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
    () => [
      {
        value: "asc",
        content: t("возрастанию"),
      },
      {
        value: "desc",
        content: t("убыванию"),
      },
    ],
    [t]
  );

  const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.VIEWS,
        content: t("популярности"),
      },
      {
        value: ArticleSortField.TITLE,
        content: t("названию"),
      },
      {
        value: ArticleSortField.CREATED,
        content: t("дате создания"),
      },
    ],
    [t]
  );

  return (
    <div
      className={classNames(styles["article-sort-selector"], {}, [className])}
    >
      <Select
        label={t("Сортировка по")}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        label={t("по")}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
};
