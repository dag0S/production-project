import { FC } from "react";
import { useTranslation } from "react-i18next";
import { CommentListProps } from "./CommentListProps";
import { Text } from "shared/ui/text/Text";
import { CommentItem } from "../commentItem/CommentItem";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./CommentList.module.scss";

export const CommentList: FC<CommentListProps> = ({
  className,
  comments,
  isLoading,
}) => {
  const { t } = useTranslation("comments");

  return (
    <div className={classNames(styles["comment-list"], {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentItem
            isLoading={isLoading}
            key={comment.id}
            comment={comment}
          />
        ))
      ) : (
        <Text text={t("Комментария отсутствуют")} />
      )}
    </div>
  );
};
