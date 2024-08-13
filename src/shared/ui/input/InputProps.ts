import { InputHTMLAttributes } from "react";

type HTMLInput = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

export interface InputProps extends HTMLInput {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}
