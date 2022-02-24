import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Show a span for a title  */
  label?: string;
  /** Show Error message */
  error?: string;
}
