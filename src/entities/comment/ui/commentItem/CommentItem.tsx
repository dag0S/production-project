import { FC } from "react";
import { CommentItemProps } from "./CommentItemProps";
import { Avatar } from "shared/ui/avatar/Avatar";
import { Text } from "shared/ui/text/Text";
import { classNames } from "shared/lib/classNames/classNames";
import { Skeleton } from "shared/ui/skeleton/Skeleton";

import styles from "./CommentItem.module.scss";

export const CommentItem: FC<CommentItemProps> = ({
  className,
  comment,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className={classNames(styles["comment-item"], {}, [className])}>
        <div className={styles["comment-item__header"]}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton className={styles["comment-item__text"]} height={50} />
      </div>
    );
  }

  return (
    <div className={classNames(styles["comment-item"], {}, [className])}>
      <div className={styles["comment-item__header"]}>
        {comment.user.avatar ? (
          <Avatar src={comment.user.avatar} size={30} />
        ) : null}
        <Text title={comment.user.username} />
      </div>
      <Text className={styles["comment-item__text"]} text={comment.text} />
    </div>
  );
};
