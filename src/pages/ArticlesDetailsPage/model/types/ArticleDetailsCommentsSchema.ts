import { EntityState } from "@reduxjs/toolkit";
import { IComment } from "entities/comment";

export interface ArticleDetailsCommentsSchema extends EntityState<IComment, number> {
  isLoading?: boolean;
  error?: string;
}
