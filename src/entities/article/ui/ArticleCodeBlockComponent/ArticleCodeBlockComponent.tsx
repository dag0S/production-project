import { FC, memo } from "react";
import { ArticleCodeBlockComponentProps } from "./ArticleCodeBlockComponentProps";
import { Code } from "shared/ui/code/Code";
import { classNames } from "shared/lib/classNames/classNames";

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> =
  memo(({ className, block }) => {
    return (
      <div className={classNames("", {}, [className])}>
        <Code text={block.code} />
      </div>
    );
  });
