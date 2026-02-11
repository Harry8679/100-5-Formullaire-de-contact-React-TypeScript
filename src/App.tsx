import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">📝 Formulaire de Contact</h1>
          <p className="text-gray-600 text-lg mb-2">
            Projet 5/100 • React + TypeScript + Controlled Inputs
          </p>
          <p className="text-gray-500 text-sm">
            Maîtrise les formulaires contrôlés et la validation
          </p>
        </div>

        {/* Form */}
        <ContactForm />

        {/* Section explicative */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">📚 Concepts React abordés</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Controlled Inputs */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                <span>📝</span>
                Controlled Inputs
              </h3>
              <div className="text-sm text-gray-700 space-y-2">
                <div>• Inputs contrôlés par React</div>
                <div>• value et onChange</div>
                <div>• Single source of truth</div>
                <div>• Synchronisation état/UI</div>
              </div>
              <div className="mt-3 bg-white rounded p-2 font-mono text-xs">
                {'<input value={val} onChange={set} />'}
              </div>
            </div>

            {/* Form Validation */}
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <span>✅</span>
                Form Validation
              </h3>
              <div className="text-sm text-gray-700 space-y-2">
                <div>• Validation en temps réel</div>
                <div>• Messages d'erreur personnalisés</div>
                <div>• Validation on blur</div>
                <div>• Custom validators</div>
              </div>
              <div className="mt-3 bg-white rounded p-2 font-mono text-xs">
                validator(value) =&gt; error | undefined
              </div>
            </div>

            {/* Custom Hooks */}
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-700 mb-3 flex items-center gap-2">
                <span>🎣</span>
                Custom Form Hooks
              </h3>
              <div className="text-sm text-gray-700 space-y-2">
                <div>• useForm hook</div>
                <div>• useValidation hook</div>
                <div>• Logique réutilisable</div>
                <div>• Séparation des préoccupations</div>
              </div>
              <div className="mt-3 bg-white rounded p-2 font-mono text-xs">
                const &#123;formData, errors&#125; = useForm()
              </div>
            </div>

            {/* Error Handling */}
            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="font-semibold text-orange-700 mb-3 flex items-center gap-2">
                <span>⚠️</span>
                Error Handling
              </h3>
              <div className="text-sm text-gray-700 space-y-2">
                <div>• Gestion des erreurs</div>
                <div>• États touched</div>
                <div>• Feedback visuel</div>
                <div>• Indicateurs valide/invalide</div>
              </div>
              <div className="mt-3 bg-white rounded p-2 font-mono text-xs">
                touched && error && &lt;Error /&gt;
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mt-8 bg-gray-900 rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-4">💻 Exemples de code</h3>

          <div className="space-y-4">
            {/* Example 1 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">1. Controlled Input basique</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`const [name, setName] = useState('');

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Votre nom"
/>`}</code>
              </pre>
            </div>

            {/* Example 2 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">2. Validation en temps réel</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`const validateEmail = (email: string) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i;
  if (!email) return 'Email requis';
  if (!regex.test(email)) return 'Email invalide';
  return undefined;
};

const handleChange = (value: string) => {
  setEmail(value);
  const error = validateEmail(value);
  setError(error);
};`}</code>
              </pre>
            </div>

            {/* Example 3 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">3. Gestion du touched state</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`const [touched, setTouched] = useState(false);

const handleBlur = () => {
  setTouched(true);
};

// Afficher l'erreur seulement si touched
const showError = touched && error;

<input 
  onBlur={handleBlur}
  className={showError ? 'border-red-500' : 'border-gray-300'}
/>
{showError && <span>{error}</span>}`}</code>
              </pre>
            </div>

            {/* Example 4 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">4. Custom useForm hook</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`const useForm = (initialData) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  
  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      await submitForm(formData);
    }
  };
  
  return { formData, errors, handleChange, handleSubmit };
};`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Next Project */}
        <div className="mt-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-2">🚀 Prochaine étape</h3>
          <p className="mb-4">Projet 6 : Calculatrice Simple (Event handlers, state management)</p>
          <button className="px-6 py-2 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Voir le projet suivant →
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;