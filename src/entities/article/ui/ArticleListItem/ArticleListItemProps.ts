import { HTMLAttributeAnchorTarget } from "react";
import { ArticleView, IArticle } from "../../model/types/article";

export interface ArticleListItemProps {
  className?: string;
  article: IArticle;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}
