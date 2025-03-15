import { MouseEventHandler} from "react";

export interface ButtonProps {
  text?: string;
  className?: string;
  id?: string;
  hoverBackgroundColor?: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}