import { ChangeEvent, FC, memo, useEffect, useRef, useState } from "react";
import { InputProps } from "./InputProps";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Input.module.scss";

export const Input: FC<InputProps> = memo(
  ({
    className,
    onChange,
    value,
    type = "text",
    placeholder,
    autoFocus,
    ...otherProps
  }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>();

    useEffect(() => {
      if (autoFocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autoFocus]);

    const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
      setCaretPosition(e.target.value.length);
    };

    const handlerBlur = () => {
      setIsFocused(false);
    };

    const handlerFocus = () => {
      setIsFocused(true);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handlerSelect = (e: any) => {
      setCaretPosition(e?.target?.selectionStart || 0);
    };

    return (
      <div className={classNames(styles["input-wrapper"], {}, [className])}>
        {placeholder && <div>{`${placeholder}>`}</div>}
        <div className={styles["caret-wrapper"]}>
          <input
            className={styles["input"]}
            ref={ref}
            type={type}
            value={value}
            onChange={handlerOnChange}
            onFocus={handlerFocus}
            onBlur={handlerBlur}
            onSelect={handlerSelect}
            {...otherProps}
          />
          {isFocused && (
            <span
              className={styles["caret"]}
              style={{
                left: `${caretPosition * 9.64}px`,
              }}
            />
          )}
        </div>
      </div>
    );
  }
);
