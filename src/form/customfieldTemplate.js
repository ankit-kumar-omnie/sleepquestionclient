import React from 'react';
import { Tooltip } from '@mui/material';
import CustomRadioWidget from './CustomRadioWidget';
import CustomMultiSelectWidget from './CustomDropDownSingleSelectWidget';
const CustomfieldTemplate = (props) => {
  const { classNames, uiSchema, schema, children, rawHelp, label, id, required, errors } = props;
  // const questionDescription = schema.description;

  return (
    <>
      <React.Fragment>
        {uiSchema['ui:widget'] === 'hidden' ? (
          ''
        ) : (
          <div className={classNames}>
            {label && label.length > 0 && uiSchema['ui:widget'] !== 'label' ? (
              <div className={'rxCometGormLabel'}>
                <label htmlFor={id}>
                  {label}
                  {required ? '*' : null}
                </label>
                {uiSchema && uiSchema.hoverText ? (
                  <Tooltip disableFocusListener disableTouchListener title={uiSchema.hoverText} placement="right">
                    <span className="oi-info-tooltips"></span>
                  </Tooltip>
                ) : (
                  ''
                )}
              </div>
            ) : null}

            {label && label.trim().length > 0 && uiSchema['ui:widget'] === 'label' && uiSchema['ui:title'] ? (
              <h4 htmlFor={id}>{label}</h4>
            ) : null}
            {uiSchema && uiSchema.questionDescription ? <p>{uiSchema.questionDescription}</p> : ''}

            {uiSchema && uiSchema['ui:widget'] === 'customRadio' ? (
              <CustomRadioWidget options={uiSchema['ui:enumOptions']} value={props.value} onChange={props.onChange} />
            ) : null}

            {uiSchema && uiSchema['ui:widget'] === 'customMultiSelect' ? (
              <CustomMultiSelectWidget
                options={uiSchema['ui:enumOptions']}
                value={props.value}
                onChange={props.onChange}
              />
            ) : null}

            {uiSchema['customDataTypes'] === 'PRETEXT' && <p className="pretextField">{schema['default']}</p>}
            {uiSchema['ui:widget'] === 'label' ? null : children}
            {errors ? errors : null}
            {rawHelp ? <p className="body-text-small">{rawHelp}</p> : ' '}
          </div>
        )}
      </React.Fragment>
    </>
  );
};

export default CustomfieldTemplate;
