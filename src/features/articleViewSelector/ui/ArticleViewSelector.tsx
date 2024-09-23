import { FC } from "react";
import { ArticleViewSelectorProps } from "./ArticleViewSelectorProps";
import { ArticleView } from "entities/article";
import IconBIG from "shared/assets/icons/BIG.svg";
import IconSMALL from "shared/assets/icons/SMALL.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/button/Button";
import { Icon } from "shared/ui/icon/Icon";
import { ButtonTheme } from "shared/ui/button/ButtonProps";

import styles from "./ArticleViewSelector.module.scss";

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: IconSMALL,
  },
  {
    view: ArticleView.BIG,
    icon: IconBIG,
  },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = ({
  className,
  view,
  onViewClick,
}) => {
  const onClick = (newView: ArticleView) => {
    return () => {
      onViewClick?.(newView);
    };
  };

  return (
    <div
      className={classNames(styles["article-view-selector"], {}, [className])}
    >
      {viewTypes.map((viewType, i) => (
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
          key={i}
        >
          <Icon
            className={classNames(
              "",
              {
                [styles["not-selected"]]: view !== viewType.view,
              },
              []
            )}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  );
};
