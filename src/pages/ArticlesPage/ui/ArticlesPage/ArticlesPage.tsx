import { FC, memo } from "react";

import styles from "./ArticlesPage.module.scss";

const ArticlesPage: FC = () => {
  return <div className={styles["article-page"]}>Articles Page</div>;
};

export default memo(ArticlesPage);
