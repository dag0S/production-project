import { IComment } from "entities/comment/model/types/comment";

export interface CommentListProps {
  className?: string;
  comments?: IComment[];
  isLoading?: boolean;
}