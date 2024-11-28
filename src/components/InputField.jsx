const InputField = ({
  id,
  label,
  type = 'text',
  register,
  validationRules,
  errors,
  defaultValue = '',
  options = [],
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      {type === 'select' ? (
        <select
          id={id}
          defaultValue=""
          {...register(id, validationRules)}
          className="block w-full border border-gray-300 rounded-md bg-white py-3 px-4 text-sm text-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            -- Select an option --
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          defaultValue={defaultValue}
          type={type}
          {...register(id, validationRules)}
          className="block w-full border border-gray-300 rounded-md bg-white py-3 px-4 text-sm text-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      )}
      {errors && errors[id] && (
        <p className="text-sm text-red-600">{errors[id]?.message}</p>
      )}
    </div>
  );
};

export default InputField;
