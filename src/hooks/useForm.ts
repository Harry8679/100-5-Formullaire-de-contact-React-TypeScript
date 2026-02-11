import { useState, useCallback } from 'react';
import { FormData } from '../types';
import { useValidation } from './useValidation';
import { validators } from '../utils/validators';

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  priority: 'medium',
  newsletter: false,
};

const validationRules = {
  name: validators.name,
  email: validators.email,
  phone: validators.phone,
  subject: validators.subject,
  message: validators.message,
};

export const useForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    errors,
    touched,
    validateForm,
    validateFieldOnChange,
    handleBlur,
    resetValidation,
    isValid,
  } = useValidation(validationRules);

  const handleChange = useCallback(
    (name: string, value: string | boolean) => {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (typeof value === 'string') {
        validateFieldOnChange(name, value);
      }
    },
    [validateFieldOnChange]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      
      setSubmitSuccess(false);
      setSubmitError(null);

      // Valider tous les champs
      const formErrors = validateForm(formData);

      // Marquer tous les champs comme touched
      Object.keys(formData).forEach((key) => {
        handleBlur(key);
      });

      // Si des erreurs existent, arrêter
      if (Object.keys(formErrors).length > 0) {
        setSubmitError('Veuillez corriger les erreurs avant de soumettre');
        return;
      }

      // Simuler l'envoi
      setIsSubmitting(true);

      try {
        // Simuler un appel API
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log('Formulaire soumis:', formData);
        
        setSubmitSuccess(true);
        setFormData(initialFormData);
        resetValidation();
      } catch (error) {
        setSubmitError('Une erreur est survenue. Veuillez réessayer.');
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validateForm, handleBlur, resetValidation]
  );

  const handleReset = useCallback(() => {
    setFormData(initialFormData);
    resetValidation();
    setSubmitSuccess(false);
    setSubmitError(null);
  }, [resetValidation]);

  return {
    formData,
    errors,
    touched,
    isSubmitting,
    submitSuccess,
    submitError,
    isFormValid: isValid(formData),
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  };
};