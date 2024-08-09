import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "background-inverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}
