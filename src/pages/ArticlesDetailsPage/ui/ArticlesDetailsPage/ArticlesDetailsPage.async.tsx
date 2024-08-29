import { lazy } from "react";

export const ArticlesDetailsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      setTimeout(() => resolve(import("./ArticlesDetailsPage")), 1500);
    })
);
