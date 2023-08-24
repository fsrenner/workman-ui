import PropTypes from "prop-types";

function TextArea({
  classes,
  id,
  name,
  title,
  cols,
  rows,
  value,
  required,
  disabled,
  maxLength,
  placeholder,
  wrap,
  label,
  error,
  spacing,
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
      <textarea
        name={name}
        id={id}
        title={title}
        className={`${classes} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        cols={cols || 30}
        rows={rows || 10}
        placeholder={placeholder}
        maxLength={maxLength || 500}
        wrap={wrap || "soft"}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      ></textarea>
      {error && <p className="pt-1 text-red-500 text-xs italic">{error}</p>}
    </div>
  );
}

TextArea.propTypes = {
  classes: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  wrap: PropTypes.oneOf(["hard", "soft", "off"]),
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cols: PropTypes.number,
  rows: PropTypes.number,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  spacing: PropTypes.number,
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;
