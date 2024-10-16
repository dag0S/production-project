import { HTMLAttributeAnchorTarget } from "react";
import { ArticleView, IArticle } from "../../model/types/article";

export interface ArticleListProps {
  className?: string;
  articles: IArticle[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}
