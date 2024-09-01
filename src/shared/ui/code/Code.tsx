import { FC, memo, useCallback } from "react";
import { CodeProps } from "./CodeProps";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "../button/Button";
import { ButtonTheme } from "../button/ButtonProps";
import CopyIcon from "shared/assets/icons/copy.svg";

import styles from "./Code.module.scss";

export const Code: FC<CodeProps> = memo(({ className, text }) => {
  const handlerOnCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(styles["code"], {}, [className])}>
      <Button
        onClick={handlerOnCopy}
        className={styles["code__copy-btn"]}
        theme={ButtonTheme.CLEAR}
      >
        <CopyIcon className={styles["code__icon"]} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
