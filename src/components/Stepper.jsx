const Stepper = ({ currentStep }) => {
  const steps = [
    { label: 'Step 1', description: 'Identity Details' },
    { label: 'Step 2', description: 'Address Details' },
    { label: 'Step 3', description: 'File Upload' },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-start text-left"
          >
            <div
              className={`h-1 w-full ${
                index < currentStep ? 'bg-indigo-500' : 'bg-gray-300'
              }`}
            />
            <div className="mt-2">
              <span
                className={`text-sm font-medium ${
                  index === currentStep ? 'text-indigo-500' : 'text-gray-500'
                }`}
              >
                {step.label}
              </span>
              <p
                className={`text-xs ${
                  index === currentStep ? 'text-black' : 'text-gray-500'
                }`}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
