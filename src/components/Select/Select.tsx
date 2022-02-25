import { Combobox } from '@headlessui/react';
import { InputHTMLAttributes, useMemo, useState } from 'react';

export interface SelectProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: () => void;
  displayValue: keyof T;
  options: T[];
  /** Show Error message */
  error?: string;
  /** Show a span for a title  */
  label?: string;
}

const Select = <T extends {}>({
  value,
  onChange,
  displayValue,
  options,
  error,
  name,
  label,
  ...props
}: SelectProps<T>) => {
  const hasError: boolean = !!error && error !== '';

  const defaultVal = options[0]?.[displayValue] || undefined;
  const [onInputFocus, setOnInputFocus] = useState(false);
  const [query, setQuery] = useState('');

  const filteredOptions = useMemo(
    () =>
      query
        ? options.filter((project) =>
            `${project[displayValue]}`
              .toLowerCase()
              .includes(query.toLowerCase()),
          )
        : options,
    [displayValue, options, query],
  );

  return (
    <div className={`${hasError && 'text-red-500'} relative`}>
      {label && (
        <label htmlFor={name} className="px-3">
          {label}
        </label>
      )}
      <Combobox
        as="div"
        onChange={onChange}
        defaultValue={defaultVal}
        value={value}
        className="w-full overflow-hidden rounded-md bg-white"
      >
        <Combobox.Input
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          onFocus={() => setOnInputFocus(true)}
          onBlur={() => setOnInputFocus(false)}
          displayValue={(item: T) => `${item[displayValue]}`}
          className={`h-full w-full rounded-md border border-slate-300 focus:border-[3px] 
          focus:border-sky-500 focus:ring-0 ${
            hasError && 'border-[3px] border-red-500'
          }`}
          {...props}
        />
        <Combobox.Options
          static={onInputFocus}
          className="max-h-48 overflow-y-auto py-4 text-sm"
        >
          {filteredOptions.length > 0 && (
            <>
              {filteredOptions.map((option) => (
                <Combobox.Option value={undefined}>
                  {({ active }) => (
                    <div
                      className={`px-4 py-2 font-medium ${
                        active
                          ? 'bg-sky-500 text-white'
                          : 'bg-white text-gray-900'
                      }`}
                    >
                      {option[displayValue]}
                    </div>
                  )}
                </Combobox.Option>
              ))}
            </>
          )}
          {query && filteredOptions.length === 0 && (
            <Combobox.Option
              value={undefined}
              disabled
              className="px-4 py-2 font-medium"
            >
              There are no option
            </Combobox.Option>
          )}
        </Combobox.Options>
      </Combobox>
      {hasError && (
        <span className={`absolute ${label ? 'top-16' : 'top-10'} text-s px-3`}>
          {error}
        </span>
      )}
    </div>
  );
};

export default Select;
