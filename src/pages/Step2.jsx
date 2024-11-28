import { useForm } from 'react-hook-form';
import useFormStore from '../context/formStore';
import InputField from '../components/InputField';
import Heading from '../components/Heading';

const Step2 = () => {
  const { formData, updateFormData, nextStep, prevStep } = useFormStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="pt-6 space-y-8 transition-all duration-500"
    >
      <Heading
        title="Address Details"
        subtitle="Provide your correspondence address details."
      />

      {/* Address for Correspondence */}
      <div className="space-y-6">
        <InputField
          id="streetAddress1"
          defaultValue={formData.streetAddress1 || ''}
          label="Street Address"
          register={register}
          errors={errors}
          validationRules={{ required: 'Street Address is required' }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputField
            id="city"
            defaultValue={formData.city || ''}
            label="City"
            register={register}
            errors={errors}
            validationRules={{ required: 'City is required' }}
          />
          <InputField
            id="state"
            defaultValue={formData.state || ''}
            label="State / Province"
            register={register}
            errors={errors}
            validationRules={{ required: 'State is required' }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputField
            id="postalCode"
            defaultValue={formData.postalCode || ''}
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
          className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 w-40"
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[rgb(99,102,241)] hover:bg-[rgb(80,85,207)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(99,102,241)] w-40"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step2;
