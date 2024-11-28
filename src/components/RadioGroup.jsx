const RadioGroup = ({
  name,
  label,
  options,
  register,
  errors,
  validationRules,
  defaultValue,
}) => {
  const isError = errors && errors[name];

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-2 space-y-1">
        {options.map((option) => (
          <label key={option.value} className="inline-flex items-center mr-4">
            <input
              type="radio"
              {...register(name, validationRules)}
              value={option.value}
              defaultChecked={defaultValue === option.value}
              className="h-4 w-4 text-blue-600 border-gray-300"
            />
            <span className="ml-2">{option.label}</span>
          </label>
        ))}
      </div>
      {isError && (
        <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default RadioGroup;
