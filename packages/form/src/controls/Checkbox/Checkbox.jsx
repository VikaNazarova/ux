import React from 'react';
import { Global } from '@emotion/core';
import PropTypes from 'prop-types';
import AntCheckbox from 'antd/lib/checkbox';
import Label, { globalStyles } from './Checkbox.styles';
import Bool from './Bool';


export const BaseCheckbox = ({ onChange, validationState, ...props }) => (
  <>
    <Global styles={globalStyles} />
    <AntCheckbox
      {...props}
      onChange={({ target: { checked } }) => onChange(checked)}
      // onChange={value => onChange(value.target.checked)}
    >
      <Label validationState={validationState}>
        {props.label}
      </Label>
    </AntCheckbox>
  </>
);

BaseCheckbox.propTypes = {
  name: PropTypes.string,
};

BaseCheckbox.defaultProps = {
  name: 'checkbox',
};

export default props => <Bool {...props} componentClass={BaseCheckbox} />;
