import { FC, MutableRefObject, UIEvent, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { PageProps } from "./PageProps";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { scrollSaveActions } from "../model/slices/scrollSaveSlice";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { StateSchema } from "app/providers/storeProvider";
import { getScrollSaveByPath } from "../model/selectors/scrollSaveSelectors";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";

import styles from "./Page.module.scss";

export const Page: FC<PageProps> = ({ className, children, onScrollEnd }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollSaveByPath(state, pathname)
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    console.log("SCROLL");
    dispatch(
      scrollSaveActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      })
    );
  }, 500);

  return (
    <section
      ref={wrapperRef}
      className={classNames(styles["page"], {}, [className])}
      onScroll={onScroll}
    >
      {children}
      {onScrollEnd ? (
        <div className={styles["trigger"]} ref={triggerRef} />
      ) : null}
    </section>
  );
};
