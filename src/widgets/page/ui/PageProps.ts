import { ReactNode } from "react";

export interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}
