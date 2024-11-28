import { useForm } from 'react-hook-form';
import useFormStore from '../context/formStore';

const ThankYou = () => {
  const { resetForm } = useFormStore();
  const { reset } = useForm();

  const handleStartAgain = () => {
    window.location.reload();
    reset();
    resetForm();
  };

  return (
    <div className="pt-8">
      <h1 className="text-2xl font-bold text-gray-700">Thank You!</h1>
      <p className="text-gray-700 mt-3 text-md">
        Your submission has been received. We appreciate your time!
      </p>
      <button
        onClick={handleStartAgain}
        className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#6366f1] hover:bg-[#6366f1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6366f1] w-40"
      >
        Start Again
      </button>
    </div>
  );
};

export default ThankYou;
