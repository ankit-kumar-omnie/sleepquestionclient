import React from 'react';
import Select from 'react-select';

const CustomSingleSelectDropdownWidget = (props) => {
  const { value, onChange, options } = props;

  const handleChange = (selectedOption) => {
    onChange(selectedOption.value);
  };

  const formatOptions = () => {
    return options.enumOptions.map((option) => ({
      value: option.value,
      label: option.label,
    }));
  };

  return (
    <Select
      value={formatOptions().find((option) => option.value === value)}
      onChange={handleChange}
      options={formatOptions()}
      isSearchable={true}
      placeholder="Select..."
    />
  );
};

export default CustomSingleSelectDropdownWidget;
