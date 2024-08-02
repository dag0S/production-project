import { FC } from "react";
import { Loader } from "shared/ui/loader/Loader";

import * as styles from "./PageLoader.module.scss";

export const PageLoader: FC = () => {
  return (
    <div className={styles["page-loader"]}>
      <Loader />
    </div>
  );
};
