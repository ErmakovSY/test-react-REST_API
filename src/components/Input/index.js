import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, InputField, ErrorText } from './../styledComponents';

const Input = (props) => {
  const { isValid, type, placeholder, value, onChange, errorText } = props;

  return (
    <InputWrapper> 
      <InputField
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        borderColor={isValid === false ? '#A60000' : '#87B4FD'}
      />
      <ErrorText visible={isValid === false ? 1 : 0}>
        {errorText}
      </ErrorText> 
    </InputWrapper>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errorText: PropTypes.string.isRequired,
  isValid: PropTypes.any.isRequired
}

export default Input;