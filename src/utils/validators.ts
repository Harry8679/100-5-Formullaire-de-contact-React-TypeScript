// Fonctions de validation

export const validators = {
  required: (value: string): string | undefined => {
    return value.trim() === '' ? 'Ce champ est obligatoire' : undefined;
  },

  email: (value: string): string | undefined => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!value) return 'L\'email est obligatoire';
    if (!emailRegex.test(value)) return 'Email invalide';
    return undefined;
  },

  phone: (value: string): string | undefined => {
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    if (!value) return undefined; // Téléphone optionnel
    if (!phoneRegex.test(value.replace(/\s/g, ''))) {
      return 'Numéro de téléphone invalide (format FR)';
    }
    return undefined;
  },

  minLength: (min: number) => (value: string): string | undefined => {
    if (value.trim().length < min) {
      return `Minimum ${min} caractères requis`;
    }
    return undefined;
  },

  maxLength: (max: number) => (value: string): string | undefined => {
    if (value.length > max) {
      return `Maximum ${max} caractères`;
    }
    return undefined;
  },

  name: (value: string): string | undefined => {
    if (!value.trim()) return 'Le nom est obligatoire';
    if (value.trim().length < 2) return 'Le nom doit contenir au moins 2 caractères';
    if (value.trim().length > 50) return 'Le nom est trop long (max 50 caractères)';
    if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(value)) {
      return 'Le nom ne peut contenir que des lettres';
    }
    return undefined;
  },

  subject: (value: string): string | undefined => {
    if (!value.trim()) return 'Le sujet est obligatoire';
    if (value.trim().length < 5) return 'Le sujet doit contenir au moins 5 caractères';
    if (value.trim().length > 100) return 'Le sujet est trop long (max 100 caractères)';
    return undefined;
  },

  message: (value: string): string | undefined => {
    if (!value.trim()) return 'Le message est obligatoire';
    if (value.trim().length < 10) return 'Le message doit contenir au moins 10 caractères';
    if (value.trim().length > 1000) return 'Le message est trop long (max 1000 caractères)';
    return undefined;
  },
};