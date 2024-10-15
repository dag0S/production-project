import { EntityState } from "@reduxjs/toolkit";
import {
  ArticleSortField,
  ArticleType,
  ArticleView,
  IArticle,
} from "entities/article";
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
  type: ArticleType;

  _inited: boolean;
}
