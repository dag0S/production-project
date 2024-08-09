import { FC } from "react";
import { PortalProps } from "./PortalProps";
import { createPortal } from "react-dom";

export const Portal: FC<PortalProps> = ({
  children,
  element = document.body,
}) => {
  return createPortal(children, element);
};
