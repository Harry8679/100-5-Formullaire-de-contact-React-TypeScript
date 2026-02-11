import { TextAreaProps } from '../types';

export const TextArea = ({
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  rows = 5,
  maxLength = 1000,
  error,
  touched,
  required,
}: TextAreaProps) => {
  const showError = touched && error;
  const isValid = touched && !error && value.trim() !== '';
  const remaining = maxLength - value.length;

  return (
    <div className="space-y-2">
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur(name)}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        required={required}
        className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 outline-none resize-none ${
          showError
            ? 'border-red-500 focus:border-red-600 bg-red-50'
            : isValid
            ? 'border-green-500 focus:border-green-600 bg-green-50'
            : 'border-gray-300 focus:border-blue-500 bg-white'
        }`}
      />
      
      <div className="flex justify-between items-center text-xs">
        <span className={remaining < 50 ? 'text-orange-500 font-semibold' : 'text-gray-500'}>
          {remaining} caractères restants
        </span>
        {isValid && (
          <span className="text-green-500 font-semibold flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Valide
          </span>
        )}
      </div>
    </div>
  );
};