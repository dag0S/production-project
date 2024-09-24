import { MutableRefObject, useEffect } from "react";

export interface UseInfiniteScrollOption {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
  callback,
  triggerRef,
  wrapperRef,
}: UseInfiniteScrollOption) {
  let observer: IntersectionObserver | null = null;

  useEffect(() => {
    const wrapperElement = wrapperRef.current
    const triggerElement = triggerRef.current

    if (callback) {
      const option = {
        root: wrapperElement,
        rootMargin: "0px",
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          console.log("intersected");
          callback();
        }
      }, option);

      observer.observe(triggerElement);
    }
    return () => {
      if (observer && triggerElement) {
        observer.unobserve(triggerElement);
      }
    };
  }, [triggerRef, wrapperRef, callback]);
}
