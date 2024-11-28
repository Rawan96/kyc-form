import useFormStore from './context/formStore';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Stepper from './components/Stepper';
import Summary from './pages/Summary';

const App = () => {
  const { step } = useFormStore();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl px-8 sm:px-12 lg:px-16 py-6 bg-white rounded-lg shadow-md">
        <div className="py-4 sm:py-6">
          <h1 className="text-2xl font-bold text-gray-900">
            KYC Verification Form
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Complete the multi-step process to submit your details for
            verification.
          </p>
        </div>
        {step && <Stepper currentStep={step} />}
        <div className="relative overflow-hidden h-auto">
          <div
            className={`transition-all duration-700 ease-in-out transform ${
              step === 1
                ? 'opacity-100 translate-y-0 relative'
                : 'opacity-0 translate-y-4 absolute pointer-events-none'
            }`}
          >
            <Step1 />
          </div>
          <div
            className={`transition-all duration-700 ease-in-out transform ${
              step === 2
                ? 'opacity-100 translate-y-0 relative'
                : 'opacity-0 translate-y-4 absolute pointer-events-none'
            }`}
          >
            <Step2 />
          </div>
          <div
            className={`transition-all duration-700 ease-in-out transform ${
              step === 3
                ? 'opacity-100 translate-y-0 relative'
                : 'opacity-0 translate-y-4 absolute pointer-events-none'
            }`}
          >
            <Step3 />
          </div>
          <div
            className={`transition-all duration-700 ease-in-out transform ${
              step === 4
                ? 'opacity-100 translate-y-0 relative'
                : 'opacity-0 translate-y-4 absolute pointer-events-none'
            }`}
          >
            <Summary />
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
