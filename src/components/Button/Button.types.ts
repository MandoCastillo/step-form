export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
  cancel = 'cancel',
}

export interface ButtonProps {
  /** Button Type */
  type?: keyof typeof ButtonType;
  /** Button contents */
  label?: string;
  /** Show a spin inside the button */
  isLoading: boolean;
  /** onClick Function */
  onClick?: () => void;
  /** Show icon aside text, To show only icon don't pass any string */
  icon?: JSX.Element;
}
