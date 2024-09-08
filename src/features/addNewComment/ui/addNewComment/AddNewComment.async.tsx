import { FC, lazy } from "react";
import { AddNewCommentProps } from "./AddNewCommentProps";

export const AddNewCommentAsync = lazy<FC<AddNewCommentProps>>(
  () =>
    new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      setTimeout(() => resolve(import("./AddNewComment")), 1500);
    })
);
