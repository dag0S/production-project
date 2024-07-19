import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ThemeButton {
  CLEAR = 'clear'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  theme?: ThemeButton;
}
