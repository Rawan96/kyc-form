import { useForm } from 'react-hook-form';

import Heading from '../components/Heading';
import InputField from '../components/InputField';
import RadioGroup from '../components/RadioGroup';
import useFormStore from '../context/formStore';

const Step1 = () => {
  const { formData, updateFormData, nextStep } = useFormStore();
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
      className="pt-6 space-y-8 transition-all duration-500 ease-in-out transform "
    >
      <Heading
        title="Personal Information"
        subtitle="Fill in your personal and family details to begin."
      />

      {/* Name Details */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputField
            id="firstName"
            defaultValue={formData.firstName || ''}
            label="First Name"
            register={register}
            errors={errors}
            validationRules={{ required: 'First Name is required' }}
          />
          <InputField
            id="lastName"
            defaultValue={formData.lastName || ''}
            label="Last Name"
            register={register}
            errors={errors}
            validationRules={{ required: 'Last Name is required' }}
          />
        </div>
      </div>

      {/* Family Details */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputField
            id="fatherFirstName"
            defaultValue={formData.fatherFirstName || ''}
            label="Father's/Spouse's First Name"
            register={register}
            errors={errors}
            validationRules={{ required: 'Father First Name is required' }}
          />
          <InputField
            id="fatherLastName"
            defaultValue={formData.fatherLastName || ''}
            label="Father's/Spouse's Last Name"
            register={register}
            errors={errors}
            validationRules={{ required: 'Father Last Name is required' }}
          />
        </div>
      </div>

      {/* Gender and Marital Status */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <RadioGroup
            name="gender"
            label="Gender"
            defaultValue={formData.gender || ''}
            options={[
              { value: 'Male', label: 'Male' },
              { value: 'Female', label: 'Female' },
            ]}
            register={register}
            errors={errors}
            validationRules={{ required: 'Gender is required' }}
          />
          <RadioGroup
            name="maritalStatus"
            label="Marital Status"
            defaultValue={formData.maritalStatus || ''}
            options={[
              { value: 'Single', label: 'Single' },
              { value: 'Married', label: 'Married' },
            ]}
            register={register}
            errors={errors}
            validationRules={{ required: 'Marital Status is required' }}
          />
        </div>
      </div>

      {/* Date of Birth & Nationality */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputField
          id="dob"
          defaultValue={formData.dob || ''}
          label="Date of Birth"
          type="date"
          register={register}
          errors={errors}
          validationRules={{ required: 'Date of Birth is required' }}
        />

        <InputField
          type="select"
          label="Country"
          defaultValue={formData.country || ''}
          id="country"
          options={['India', 'USA', 'Canada', 'Other']}
          register={register}
          validationRules={{ required: 'Country is required' }}
          errors={errors}
        />
      </div>

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#6366f1] hover:bg-[#6366f1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6366f1] w-40"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step1;
