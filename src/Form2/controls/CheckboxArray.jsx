import React from 'react';
import get from 'lodash/get';
import CheckboxesListBase from '../../UI/molecules/CheckboxesList';
import FormGroup from '../FormGroup';

const CheckboxesList = ({
  field,
  form,
  ...props
}) => {
  return (
    <FormGroup
      field={field}
      form={form}
      {...props}
    >
      <CheckboxesListBase
        {...field}
        {...props}
        data={props.options || []}
        onChange={(val) => {
          field.onChange({
            target: {
              name: field.name,
              value: val,
            },
          });
        }}
        selected={get(form.values, field.name) || []}
      />
      {console.log(props, field)}
    </FormGroup>
  );
};

export default CheckboxesList;

