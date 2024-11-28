const CheckboxGroup = ({
  options,
  register,
  name,
  errors,
  defaultValues = [],
}) => {
  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {options.map((option) => (
        <div key={option} className="flex items-center">
          <input
            type="checkbox"
            {...register(name)}
            value={option}
            defaultChecked={defaultValues.includes(option)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label className="ml-2 text-sm">{option}</label>
        </div>
      ))}
      {errors?.[name] && (
        <p className="text-red-500 text-sm">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default CheckboxGroup;
