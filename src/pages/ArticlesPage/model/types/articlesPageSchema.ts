import { EntityState } from "@reduxjs/toolkit";
import { ArticleView, IArticle } from "entities/article";
import { ArticleSortField } from "entities/article/model/types/article";
import { SortOrder } from "shared/types/SortOrder";

export interface articlesPageSchema extends EntityState<IArticle, number> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;

  _inited: boolean;
}
