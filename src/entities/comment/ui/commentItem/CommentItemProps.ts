import { IComment } from "entities/comment/model/types/comment";

export interface CommentItemProps {
  className?: string;
  comment?: IComment;
  isLoading?: boolean;
}
