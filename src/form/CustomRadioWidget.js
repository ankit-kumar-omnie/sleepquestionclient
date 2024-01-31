import React from 'react';

const CustomRadioWidget = (props) => {
  const { options, value, onChange } = props;

  return (
    <div className="radio-inline">
      {options.enumOptions.map((option, index) => (
        <div key={index} className="radio-control">
          <label htmlFor={option.value}>
            <input
              type="radio"
              id={option.value}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
            />
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CustomRadioWidget;
