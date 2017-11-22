import React from 'react';
import PropTypes from 'prop-types';
import { SubmitFormButton } from './../styledComponents';

const SubmitButton = (props) => (
  <SubmitFormButton 
    visible={props.visible}
    onClick={props.onClick}
  >
    <span>{props.text}</span>
  </SubmitFormButton> 
);

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default SubmitButton;