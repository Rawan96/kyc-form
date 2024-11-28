import useFormStore from '../context/formStore';
import Heading from '../components/Heading';
import ThankYou from '../components/ThankYou';

const Summary = () => {
  const { formData, prevStep, showThankYou, showThankYouMessage } =
    useFormStore();

  const handleConfirm = () => {
    showThankYouMessage();
  };

  if (showThankYou) {
    return <ThankYou />;
  }

  return (
    <div className="pt-10 max-w-3xl mx-auto space-y-12">
      <Heading
        title="Review Your Details"
        subtitle="Please review the information you provided before proceeding."
      />

      {/* Summary Section */}
      <div className="bg-white shadow shadow-md rounded p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.keys(formData).map((key) => {
            const value = formData[key];
            return (
              <div key={key} className="flex items-center space-x-2">
                <span className="text-gray-700 font-medium capitalize">
                  {key}:
                </span>
                {key === 'proofOfAddress' ? (
                  <span className="text-gray-500 text-sm ">
                    {value.join(', ')}
                  </span>
                ) : key === 'documents' ? (
                  <ul>
                    {Array.from(value).map((item) => {
                      return (
                        <li className="text-gray-500 text-sm">{item.name}</li>
                      );
                    })}
                  </ul>
                ) : (
                  <span className="text-gray-500 text-sm">{value}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={prevStep}
          className="py-3 px-6 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium shadow-sm transition-all"
        >
          Back
        </button>
        <button
          onClick={handleConfirm}
          type="submit"
          className="py-3 px-6 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium shadow-lg transition-all"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
