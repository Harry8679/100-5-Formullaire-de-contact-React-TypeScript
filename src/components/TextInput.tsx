import type { TextInputProps } from '../types';

export const TextInput = ({
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  type = 'text',
  error,
  touched,
  required,
}: TextInputProps) => {
  const showError = touched && error;
  const isValid = touched && !error && value.trim() !== '';

  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur(name)}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 outline-none ${
          showError
            ? 'border-red-500 focus:border-red-600 bg-red-50'
            : isValid
            ? 'border-green-500 focus:border-green-600 bg-green-50'
            : 'border-gray-300 focus:border-blue-500 bg-white'
        }`}
      />
      
      {/* Indicateur visuel */}
      {touched && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          {error ? (
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          ) : value.trim() !== '' ? (
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          ) : null}
        </div>
      )}
    </div>
  );
};