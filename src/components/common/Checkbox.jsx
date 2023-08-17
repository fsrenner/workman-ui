import PropTypes from "prop-types";

function Checkbox({
  id,
  name,
  title,
  value,
  checked,
  required,
  disabled,
  label,
  error,
  spacing,
  onClick,
  onChange,
}) {
  return (
    <div className={`mb-${spacing} mt-4`}>
      <div className="flex items-center ">
        <input
          type="checkbox"
          className="mr-2 w-4 h-4 border-gray-300 rounded"
          name={name}
          title={title}
          required={required || false}
          disabled={disabled || false}
          value={value}
          onChange={onChange}
          onClick={onClick}
          checked={checked}
        />
        <label
          htmlFor={id}
          className="inline-block text-gray-700 text-sm font-bold"
        >
          {label}
        </label>
      </div>
      {error && <p className="pt-1 text-red-500 text-xs italic">{error}</p>}
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  spacing: PropTypes.number,
  label: PropTypes.string,
  error: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

export default Checkbox;