import { useForm } from 'react-hook-form';

import InputField from '../components/InputField';
import useFormStore from '../context/formStore';
import Heading from '../components/Heading';

const Step2 = () => {
  const { updateFormData, nextStep, prevStep } = useFormStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="pt-6 space-y-8 max-w-4xl mx-auto"
    >
      <Heading
        title="Address Details"
        subtitle="Provide your correspondence address details."
      />

      {/* Address for Correspondence */}
      <div className="space-y-6">
        <InputField
          id="streetAddress1"
          label="Street Address"
          register={register}
          errors={errors}
          validationRules={{ required: 'Street Address is required' }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputField
            id="city"
            label="City"
            register={register}
            errors={errors}
            validationRules={{ required: 'City is required' }}
          />
          <InputField
            id="state"
            label="State / Province"
            register={register}
            errors={errors}
            validationRules={{ required: 'State is required' }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputField
            id="postalCode"
            label="Postal / Zip Code"
            register={register}
            errors={errors}
            validationRules={{ required: 'Postal Code is required' }}
          />
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={prevStep}
          className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step2;
