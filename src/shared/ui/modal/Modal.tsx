import {
  FC,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ModalProps } from "./ModalProps";
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "../portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";

import styles from "./Modal.module.scss";

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = ({
  children,
  className,
  isOpen,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  const mods: Record<string, boolean> = {
    [styles["opened"]]: isOpen,
    [styles["is-closing"]]: isClosing,
    [styles[theme]]: true,
  };

  const handelClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handelClose();
      }
    },
    [handelClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <Portal>
      <div className={classNames(styles["modal"], mods, [className])}>
        <div className={styles["overlay"]} onClick={handelClose}>
          <div className={styles["content"]} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
