import { SubmitButtonProps } from '../types';

export const SubmitButton = ({ isSubmitting, isValid, children }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting || !isValid}
      className={`w-full px-6 py-4 rounded-lg font-bold text-white transition-all duration-300 transform ${
        isSubmitting
          ? 'bg-gray-400 cursor-not-allowed'
          : isValid
          ? 'bg-blue-500 hover:bg-blue-600 hover:scale-105 active:scale-95'
          : 'bg-gray-400 cursor-not-allowed'
      }`}
    >
      {isSubmitting ? (
        <div className="flex items-center justify-center gap-2">
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
          <span>Envoi en cours...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};