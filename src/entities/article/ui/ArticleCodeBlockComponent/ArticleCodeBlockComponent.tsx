import { FC, memo } from "react";
import { ArticleCodeBlockComponentProps } from "./ArticleCodeBlockComponentProps";
import { Code } from "shared/ui/code/Code";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./ArticleCodeBlockComponent.module.scss";

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> =
  memo(({ className, block }) => {
    return (
      <div
        className={classNames(styles["article-code-block-component"], {}, [
          className,
        ])}
      >
        <Code text={block.code} />
      </div>
    );
  });
