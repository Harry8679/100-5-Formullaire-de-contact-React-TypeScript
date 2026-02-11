import type { SelectProps } from '../types';

export const Select = ({
  name,
  value,
  onChange,
  onBlur,
  options,
  error,
  touched,
  required,
}: SelectProps) => {
  const showError = touched && error;

  return (
    <select
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      onBlur={() => onBlur(name)}
      required={required}
      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 outline-none cursor-pointer ${
        showError
          ? 'border-red-500 focus:border-red-600 bg-red-50'
          : 'border-gray-300 focus:border-blue-500 bg-white'
      }`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};