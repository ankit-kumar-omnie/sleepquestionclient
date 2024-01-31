import React from 'react';

const CustomRadioWidget = (props) => {
  const { options, value, onChange } = props;

  const handleKeyDown = (event, optionValue) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onChange(optionValue);
    }
  };

  return (
    <div className="radio-inline" tabIndex={0} role="radiogroup">
      {options.enumOptions.map((option, index) => (
        <div key={index} className="radio-control">
          <label htmlFor={option.value} tabIndex={-1} onKeyDown={(e) => handleKeyDown(e, option.value)}>
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
