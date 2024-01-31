import React from 'react';
import Select from 'react-select';

const CustomDropdownMultiSelectWidget = (props) => {
  const { value, onChange, options } = props;

  const handleChange = (selectedOptions) => {
    onChange(selectedOptions.map((option) => option.value));
  };

  const formatOptions = () => {
    return options.enumOptions.map((option) => ({
      value: option.value,
      label: option.label,
    }));
  };

  return (
    <Select
      isMulti
      value={value ? formatOptions().filter((option) => value.includes(option.value)) : null}
      onChange={handleChange}
      options={formatOptions()}
    />
  );
};

export default CustomDropdownMultiSelectWidget;
