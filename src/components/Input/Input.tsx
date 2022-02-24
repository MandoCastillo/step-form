import { FC } from 'react';
import { InputProps } from './Input.types';

const Input: FC<InputProps> = ({ label, name, error, type, ...props }) => {
  const hasError: boolean = !!error && error !== '';

  return (
    <div
      className={`${hasError && 'text-red-500'} relative flex flex-col pb-4`}
    >
      <label htmlFor={name} className="px-3">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className={`h-10 w-full rounded-md border border-slate-300 ring-0 file:h-10 
          file:rounded-l-md file:border-none file:bg-sky-500 file:py-1.5 file:px-3 
          file:font-semibold file:text-stone-100 focus:border-sky-500 focus:outline 
          focus:outline-2 focus:outline-sky-500 ${
            hasError &&
            'border-red-500 outline outline-2 outline-red-500 file:bg-red-500'
          }`}
        {...props}
      />
      {hasError && (
        <span className="absolute -bottom-0.5 px-3 text-sm">{error}</span>
      )}
    </div>
  );
};

export default Input;
