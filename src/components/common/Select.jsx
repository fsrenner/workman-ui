import PropTypes from "prop-types";
// import { useState } from 'react';

function Select({
  classes,
  id,
  name,
  title,
  options,
  onChange,
  label,
  error,
  spacing,
  required,
  disabled,
  selected,
}) {

  const optionsArr = options
    ? options.map((option, key) => (
        <option key={key} value={option.value} selected={selected && option.value === selected ? 'selected' : ''}>
          {option.label}
        </option>
      ))
    : null;

  return (
    <div className={`mb-${spacing}`}>
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <select
        name={name}
        id={id}
        onChange={onChange}
        title={title}
        className={`${classes} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        required={required}
        disabled={disabled}
        selected={selected}
      >
        {optionsArr}
      </select>
      {error && <p className="pt-1 text-red-500 text-xs italic">{error}</p>}
    </div>
  );
}

Select.propTypes = {
  classes: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  spacing: PropTypes.number,
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  })),
  selected: PropTypes.string,
};

export default Select;