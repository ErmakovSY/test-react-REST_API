/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { CloseFormButton } from './../styledComponents.js';

const CloseButton = (props) => (
  <CloseFormButton
    onClick={props.onClick}
  >
    <FontAwesome name='times' />
  </CloseFormButton> 
);

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default CloseButton;