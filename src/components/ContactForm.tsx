import { useForm } from '../hooks/useForm';
import { FormField } from './FormField';
import { TextInput } from './TextInput';
import { TextArea } from './TextArea';
import { Select } from './Select';
import { Checkbox } from './Checkbox';
import { SubmitButton } from './SubmitButton';

export const ContactForm = () => {
  const {
    formData,
    errors,
    touched,
    isSubmitting,
    submitSuccess,
    submitError,
    isFormValid,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = useForm();

  const priorityOptions = [
    { value: 'low', label: '🟢 Basse - Question générale' },
    { value: 'medium', label: '🟡 Moyenne - Besoin d\'aide' },
    { value: 'high', label: '🔴 Haute - Problème urgent' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Success Message */}
      {submitSuccess && (
        <div className="mb-6 p-6 bg-green-50 border-2 border-green-500 rounded-xl animate-slide-in">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-green-800 mb-1">Message envoyé avec succès !</h3>
              <p className="text-sm text-green-700">
                Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.
              </p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="flex-shrink-0 text-green-600 hover:text-green-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitError && (
        <div className="mb-6 p-6 bg-red-50 border-2 border-red-500 rounded-xl animate-shake">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-red-800 mb-1">Erreur</h3>
              <p className="text-sm text-red-700">{submitError}</p>
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Contactez-nous</h2>
          <p className="text-gray-600">Remplissez le formulaire et nous vous répondrons rapidement</p>
        </div>

        {/* Nom */}
        <FormField
          label="Nom complet"
          name="name"
          error={errors.name}
          touched={touched.name}
          required
        >
          <TextInput
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Jean Dupont"
            error={errors.name}
            touched={touched.name}
            required
          />
        </FormField>

        {/* Email */}
        <FormField
          label="Adresse email"
          name="email"
          error={errors.email}
          touched={touched.email}
          required
        >
          <TextInput
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="jean.dupont@exemple.fr"
            error={errors.email}
            touched={touched.email}
            required
          />
        </FormField>

        {/* Téléphone */}
        <FormField
          label="Numéro de téléphone"
          name="phone"
          error={errors.phone}
          touched={touched.phone}
        >
          <TextInput
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="06 12 34 56 78"
            error={errors.phone}
            touched={touched.phone}
          />
        </FormField>

        {/* Sujet */}
        <FormField
          label="Sujet"
          name="subject"
          error={errors.subject}
          touched={touched.subject}
          required
        >
          <TextInput
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Demande d'information"
            error={errors.subject}
            touched={touched.subject}
            required
          />
        </FormField>

        {/* Priorité */}
        <FormField label="Priorité" name="priority" required>
          <Select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            onBlur={handleBlur}
            options={priorityOptions}
            required
          />
        </FormField>

        {/* Message */}
        <FormField
          label="Message"
          name="message"
          error={errors.message}
          touched={touched.message}
          required
        >
          <TextArea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Décrivez votre demande en détail..."
            rows={6}
            maxLength={1000}
            error={errors.message}
            touched={touched.message}
            required
          />
        </FormField>

        {/* Newsletter */}
        <div className="pt-4 border-t border-gray-200">
          <Checkbox
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
            label="Je souhaite recevoir la newsletter et les actualités par email"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-6">
          <button
            type="button"
            onClick={handleReset}
            disabled={isSubmitting}
            className="flex-1 px-6 py-4 rounded-lg font-bold text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Réinitialiser
          </button>
          <div className="flex-1">
            <SubmitButton isSubmitting={isSubmitting} isValid={isFormValid}>
              Envoyer le message
            </SubmitButton>
          </div>
        </div>

        {/* Validation Info */}
        {!isFormValid && Object.keys(touched).length > 0 && (
          <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-sm text-orange-700 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Veuillez remplir tous les champs obligatoires correctement
            </p>
          </div>
        )}
      </form>
    </div>
  );
};