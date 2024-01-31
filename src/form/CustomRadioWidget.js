import React from 'react';

const CustomRadioWidget = (props) => {
  const { options, value, onChange } = props;

  const handleKeyDown = (event, optionValue) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      // If you have other logic to handle Tab key, you can add it here
    }

    if (event.key === 'Enter' || event.key === ' ') {
      onChange(optionValue);
    }
  };

  return (
    <div className="radio-inline">
      {options.enumOptions.map((option, index) => (
        <div key={index} className="radio-control">
          <label
            htmlFor={option.value}
            onKeyDown={(e) => handleKeyDown(e, option.value)}
            tabIndex={0} // Set tabIndex to make label focusable
            role="button" // Set role to indicate an interactive element
          >
            <input
              type="radio"
              id={option.value}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              tabIndex={-1} // Set tabIndex to -1 to make radio button not focusable
            />
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CustomRadioWidget;
