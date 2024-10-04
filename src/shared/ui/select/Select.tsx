import { ChangeEvent, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { SelectProps } from "./SelectProps";

import styles from "./Select.module.scss";

export const Select = <T extends string>({
  className,
  label,
  options,
  value,
  onChange,
  readonly,
}: SelectProps<T>) => {
  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option className={styles["option"]} key={opt.value} value={opt.value}>
          {opt.content}
        </option>
      )),
    [options]
  );

  const handlerOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T);
    }
  };

  return (
    <div className={classNames(styles["wrapper"], {}, [className])}>
      {label && (
        <span
          className={classNames(
            styles["label"],
            { [styles["readonly"]]: readonly },
            []
          )}
        >{`${label}>`}</span>
      )}
      <select
        className={styles["select"]}
        value={value}
        onChange={handlerOnChange}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
};
