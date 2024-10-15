import { ArticleType } from "../../model/types/article";

export interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}
