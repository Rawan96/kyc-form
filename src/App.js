import Stepper from './components/Stepper';
import useFormStore from './context/formStore';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';

const App = () => {
  const { step, prevStep, resetFormData } = useFormStore();

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
        <Stepper currentStep={step} />
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}

        {step > 1 && (
          <button onClick={prevStep} className="btn-secondary">
            Back
          </button>
        )}
        {step === 3 && (
          <button onClick={resetFormData} className="btn-danger">
            Reset Form
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
