import { ArticleSortField } from "../../model/types/article";
import { SortOrder } from "shared/types/SortOrder";

export interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}
