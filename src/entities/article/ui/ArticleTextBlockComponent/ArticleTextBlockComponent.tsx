import { FC, memo } from "react";
import { ArticleTextBlockComponentProps } from "./ArticleTextBlockComponentProps";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/text/Text";

import styles from "./ArticleTextBlockComponent.module.scss";

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> =
  memo(({ className, block }) => {
    return (
      <div
        className={classNames(styles["article-text-block-component"], {}, [
          className,
        ])}
      >
        {block.title && (
          <Text
            title={block.title}
            className={styles["article-text-block-component__title"]}
          />
        )}
        {block.paragraphs.map((paragraph, i) => (
          <Text
            className={styles["article-text-block-component__paragraph"]}
            text={paragraph}
            key={i}
          />
        ))}
      </div>
    );
  });
