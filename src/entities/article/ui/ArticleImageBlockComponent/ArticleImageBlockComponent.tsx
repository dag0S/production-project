import { FC, memo } from "react";
import { ArticleImageBlockComponentProps } from "./ArticleImageBlockComponentProps";
import { Text } from "shared/ui/text/Text";
import { TextAlign } from "shared/ui/text/TextProps";

import styles from "./ArticleImageBlockComponent.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> =
  memo(({ className, block }) => {
    return (
      <div
        className={classNames(styles["article-image-block-component"], {}, [
          className,
        ])}
      >
        <img
          className={styles["article-image-block-component__img"]}
          src={block.src}
          alt={block.title}
        />
        {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
      </div>
    );
  });
