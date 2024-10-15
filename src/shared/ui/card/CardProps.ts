import { HTMLAttributes, ReactNode } from "react";

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINE = 'outline'
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
}
