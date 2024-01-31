import React, { useState, useEffect } from 'react';
import { dataSchema } from './dataSchema';
import { uiSchema } from './uiSchema';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import CustomfieldTemplate from './customfieldTemplate';
import CustomRadioWidget from './CustomRadioWidget';
import { Navbar } from './Navbar';
import CustomDropdownMultiSelectWidget from './CustomDropdownMultiSelectWidget';
import CustomSingleSelectDropdownWidget from './CustomDropDownSingleSelectWidget';

const widgets = {
  customRadio: CustomRadioWidget,
  customDropDownSingleSelect: CustomSingleSelectDropdownWidget,
  customDropDownMultiSelect: CustomDropdownMultiSelectWidget,
};

const DynamicForm = () => {
  const [formData, setFormData] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch('https://formbackend-production.up.railway.app/sleepquestion/c8026dae-7b8d-49ff-9433-80dbd1ae5097', {
        method: 'GET',
        dataType: 'json',
        headers: {
          'Content-Type': 'application/json',
          clientId: '65b8c055d5da316d4d8d1f08',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFormData(data?.formData);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onSubmit = async ({ formData }) => {
    try {
      const response = await fetch('https://formbackend-production.up.railway.app/sleepquestion/e3698fb4-ad1b-4ca1-9d4f-1f5982b9e354', {
        method: 'PUT',
        dataType: 'json',
        headers: {
          'Content-Type': 'application/json',
          clientId: 'gjh',
        },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        getData(); 
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main">
      <div className="full-width nav-padding">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <div className="full-width with-bg padding">
        <div className="container">
          {formData !== null && (
            <Form
              schema={dataSchema} 
              validator={validator}
              uiSchema={uiSchema} 
              FieldTemplate={(props) => <CustomfieldTemplate {...props} />}
              widgets={widgets}
              formData={formData}
              onSubmit={onSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicForm;
