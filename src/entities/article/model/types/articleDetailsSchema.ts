import { IArticle } from "./article";

export interface ArticleDetailsSchema {
  data?: IArticle;
  isLoading: boolean;
  error?: string;
}