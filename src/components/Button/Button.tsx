import React, { FC } from 'react';
import { ButtonProps, ButtonType } from './Button.types';

const Button: FC<ButtonProps> = ({
  label = '',
  type = 'primary',
  isLoading = false,
  icon,
  onClick = () => {},
}) => {
  const bgColors: { [key in ButtonType]: string } = {
    primary: isLoading ? 'bg-sky-400' : 'bg-sky-500',
    secondary: isLoading ? 'bg-indigo-400' : 'bg-indigo-500',
    cancel: isLoading ? 'bg-red-400' : 'bg-red-500',
  };

  const isOnlyIcon = icon && label === '';

  return (
    <button
      type="button"
      className={`${bgColors[type]} inline-flex min-h-[2.5rem] items-center rounded-md px-4 py-2 
        text-sm font-semibold leading-6 text-white shadow`}
      disabled={isLoading}
      onClick={onClick}
    >
      <span className="relative">
        {isLoading && <SvgLoading />}
        <div
          className={`flex items-center ${
            isLoading ? 'opacity-30' : 'opacity-100'
          }`}
        >
          <span>{label}</span>
          {icon &&
            React.cloneElement(icon, {
              className: `${!isOnlyIcon && 'ml-3'} text-white h-5 w-5`,
            })}
        </div>
      </span>
    </button>
  );
};

const SvgLoading = () => (
  <div className="absolute top-[50%] left-[50%] h-5 w-5 -translate-y-2/4 -translate-x-2/4">
    <svg
      className="h-full w-full animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  </div>
);

export default Button;
