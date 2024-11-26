import useFormStore from '../context/formStore';

const Step2 = () => {
  const { formData } = useFormStore();
  console.log('I am from step 2 ;)', { formData });

  return (
    <div>
      <h1>Hi I am step 2</h1>
    </div>
  );
};

export default Step2;
