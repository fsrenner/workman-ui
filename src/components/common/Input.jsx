import PropTypes from "prop-types";

function Input({
  classes,
  id,
  name,
  title,
  type,
  placeholder,
  value,
  pattern,
  required,
  disabled,
  label,
  error,
  spacing,
  onKeyUp,
  onClick,
  onKeyDown,
  onChange,
}) {
  return (
    <div className={`mb-${spacing}`}>
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        className={`${classes} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        name={name}
        title={title}
        placeholder={placeholder}
        pattern={pattern}
        required={required || false}
        disabled={disabled || false}
        value={value}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = placeholder)}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        onChange={onChange}
        onClick={onClick}
      />
      {error && <p className="pt-1 text-red-500 text-xs italic">{error}</p>}
    </div>
  );
}

Input.propTypes = {
  classes: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  pattern: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  spacing: PropTypes.number,
  label: PropTypes.string,
  error: PropTypes.string,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

export default Input;
