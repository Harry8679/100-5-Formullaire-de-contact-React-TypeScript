import { useState, useCallback } from 'react';
import type { FormErrors, FormTouched, FormData } from '../types';

interface ValidationRules {
  [key: string]: (value: string | boolean) => string | undefined;
}

export const useValidation = (rules: ValidationRules) => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});

  const validateField = useCallback(
    (name: string, value: string | boolean): string | undefined => {
      const validator = rules[name];
      if (validator) {
        return validator(value);
      }
      return undefined;
    },
    [rules]
  );

  const validateForm = useCallback(
    (formData: FormData): FormErrors => {
      const newErrors: FormErrors = {};

      Object.keys(rules).forEach((fieldName) => {
        const fieldValue = formData[fieldName as keyof FormData];
        const error = validateField(fieldName, fieldValue);
        if (error) {
          newErrors[fieldName as keyof FormErrors] = error;
        }
      });

      setErrors(newErrors);
      return newErrors;
    },
    [rules, validateField]
  );

  const validateFieldOnChange = useCallback(
    (name: string, value: string | boolean) => {
      if (touched[name as keyof FormTouched]) {
        const error = validateField(name, value);
        setErrors((prev) => ({
          ...prev,
          [name]: error,
        }));
      }
    },
    [touched, validateField]
  );

  const handleBlur = useCallback((name: string) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  }, []);

  const resetValidation = useCallback(() => {
    setErrors({});
    setTouched({});
  }, []);

  const isValid = useCallback((formData: FormData): boolean => {
    const formErrors = validateForm(formData);
    return Object.keys(formErrors).length === 0;
  }, [validateForm]);

  return {
    errors,
    touched,
    validateField,
    validateForm,
    validateFieldOnChange,
    handleBlur,
    resetValidation,
    isValid,
  };
};