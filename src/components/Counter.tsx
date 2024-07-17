import { useState } from "react";
import * as styles from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <span className={styles["count"]}>{count}</span>
      <button className={styles.button} onClick={increment}>
        +
      </button>
    </div>
  );
};
