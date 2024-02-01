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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const widgets = {
  customRadio: CustomRadioWidget,
  customDropDownSingleSelect: CustomSingleSelectDropdownWidget,
  customDropDownMultiSelect: CustomDropdownMultiSelectWidget,
};

const DynamicForm = () => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    const id = 'c8026dae-7b8d-49ff-9433-80dbd1ae5097';
    try {
      setLoading(true);
      const response = await fetch(`https://formbackend-production.up.railway.app/sleepquestion/${id}`, {
        method: 'GET',
        dataType: 'json',
        headers: {
          'Content-Type': 'application/json',
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
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async ({ formData }) => {
    const id = 'e3698fb4-ad1b-4ca1-9d4f-1f5982b9e354';
    try {
      setLoading(true);
      const response = await fetch(`https://formbackend-production.up.railway.app/sleepquestion/${id}`, {
        method: 'PUT',
        dataType: 'json',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        setSuccess(true);
        getData();
      } else {
        console.error('Failed to submit data');
        setError(true);
      }
    } catch (error) {
      console.error('Error sending form data:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccess(false);
    setError(false);
  };

  return (
    <div className="main">
      <div className="full-width nav-padding">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <div className="full-width with-bg padding">
        <div className="container">
          {loading && (
            <div className="loading-message">
              <span className="loading-text"></span>
            </div>
          )}
          {!loading && formData !== null && (
            <>
              <Form
                schema={dataSchema}
                validator={validator}
                uiSchema={uiSchema}
                FieldTemplate={(props) => <CustomfieldTemplate {...props} />}
                widgets={widgets}
                formData={formData}
                onSubmit={onSubmit}
              />
              <Snackbar
                open={success}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity="success">
                  Form submitted successfully!
                </MuiAlert>
              </Snackbar>

              <Snackbar
                open={error}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity="error">
                  Failed to submit form. Please try again.
                </MuiAlert>
              </Snackbar>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicForm;
