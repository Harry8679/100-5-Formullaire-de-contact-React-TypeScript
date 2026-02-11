// Types pour le formulaire de contact

export interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  priority: 'low' | 'medium' | 'high';
  newsletter: boolean;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  priority?: string;
}

export interface FormTouched {
  name?: boolean;
  email?: boolean;
  phone?: boolean;
  subject?: boolean;
  message?: boolean;
  priority?: boolean;
}

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | undefined;
}

export interface FormFieldProps {
  label: string;
  name: string;
  error?: string;
  touched?: boolean;
  required?: boolean;
  children: React.ReactNode;
}

export interface TextInputProps {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  onBlur: (name: string) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel';
  error?: string;
  touched?: boolean;
  required?: boolean;
}

export interface TextAreaProps {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  onBlur: (name: string) => void;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  error?: string;
  touched?: boolean;
  required?: boolean;
}

export interface SelectProps {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  onBlur: (name: string) => void;
  options: Array<{ value: string; label: string }>;
  error?: string;
  touched?: boolean;
  required?: boolean;
}

export interface CheckboxProps {
  name: string;
  checked: boolean;
  onChange: (name: string, checked: boolean) => void;
  label: string;
}

export interface SubmitButtonProps {
  isSubmitting: boolean;
  isValid: boolean;
  children: React.ReactNode;
}