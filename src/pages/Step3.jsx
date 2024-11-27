import { useForm } from 'react-hook-form';

import CheckboxGroup from '../components/CheckboxGroup';
import UploadFile from '../components/UploadFile';
import useFormStore from '../context/formStore';
import Heading from '../components/Heading';

const Step3 = () => {
  const { formData, updateFormData, nextStep, prevStep } = useFormStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const onSubmit = (data) => {
    updateFormData(data);
    nextStep();
  };

  const options = [
    'Passport',
    'Driving License',
    'Registered Lease/Sale Agreement of Residence',
    'Latest Telephone Bill',
    'Latest Gas Bill',
    'Ration Card',
    'Voter Identity Card',
    'Latest Bank Account Statement/Passbook',
    'Latest Electricity Bill',
    'Other',
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="pt-6 min-h-[400px] lg:min-h-[600px]"
    >
      <div className="mt-6">
        <Heading
          title="File Verification"
          subtitle="Please upload related photographs and documents for verification."
        />

        {/* Proof of Address */}
        <div className="text-sm text-gray-600 mb-6">
          <CheckboxGroup
            options={options}
            register={register}
            name="proofOfAddress"
            errors={errors}
            defaultValues={formData.proofOfAddress || []}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          />
        </div>

        <p className="text-sm text-gray-600 mb-3 mt-16">
          Please upload related photographs and documents for verification
        </p>
        <UploadFile
          validationRules={{ required: 'Please upload at least one document' }}
          register={register}
          name="documents"
          defaultValue={formData.documents || ''}
          errors={errors}
        />

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={prevStep}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md w-40"
          >
            Back
          </button>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[rgb(99,102,241)] hover:bg-[rgb(80,85,207)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(99,102,241)] w-40"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Step3;
