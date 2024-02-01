import React, { useState, useEffect, useCallback, useRef } from 'react';
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
import { useParams } from 'react-router-dom';

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
  const { id } = useParams();
  const id1 = 'eb8f05e4-fe76-4910-af84-dd91e164ee0d';
  const defaultTestId = 'test';

  const checkUserAndFetchForm = useCallback(async () => {
    try {
      setLoading(true);

      const fetchId = id || defaultTestId;

      const userResponse = await fetch(
        `https://formbackend-production.up.railway.app/sleepquestion/formdata/${fetchId}`,
        {
          method: 'GET',
          dataType: 'json',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((resp) => resp?.json())
        .then((i) => {
          setFormData(i?.data?.formData);
        });

      if (userResponse.ok) {
        const formDataResponse = await fetch(`https://formbackend-production.up.railway.app/sleepquestion/${id1}`, {
          method: 'GET',
          dataType: 'json',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (formDataResponse.ok) {
          const data = await formDataResponse.json();
          setFormData(data?.formData);
        } else {
          console.error('Failed to fetch form data');
        }
      } else {
        setFormData(null);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }, [id, defaultTestId]);

  const isFetchedRef = useRef(false);
  useEffect(() => {
    if (!isFetchedRef.current) {
      isFetchedRef.current = true;
      checkUserAndFetchForm();
    }
  }, [isFetchedRef, checkUserAndFetchForm]);

  const onSubmit = async ({ formData }) => {
    try {
      setLoading(true);
      await fetch(`https://formbackend-production.up.railway.app/sleepquestion/${id}`, {
        method: 'PUT',
        dataType: 'json',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      })
        .then((resp) => resp?.json())
        .then((i) => {
          setSuccess(true);
          setLoading(false);
          setFormData(i?.data?.formData);
        })
        .catch((e) => {
          console.error('Error sending form data:', e);
          setError(true);
        });
    } catch (error) {
      console.error('Error sending form data:', error);
      setError(true);
    }
  };

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
