import type { CheckboxProps } from '../types';

export const Checkbox = ({ name, checked, onChange, label }: CheckboxProps) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={(e) => onChange(name, e.target.checked)}
          className="sr-only"
        />
        <div
          className={`w-6 h-6 rounded border-2 transition-all duration-300 flex items-center justify-center ${
            checked
              ? 'bg-blue-500 border-blue-500'
              : 'bg-white border-gray-300 group-hover:border-blue-400'
          }`}
        >
          {checked && (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
        {label}
      </span>
    </label>
  );
};