export interface ButtonProps {
  text: string;
  className?: string;
  id?: string;
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}