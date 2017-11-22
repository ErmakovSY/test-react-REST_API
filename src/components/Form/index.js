/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { FormWrapper, FormTitle } from './../styledComponents';
import Input from './../Input';
import SubmitButton from './../ButtonSubmit';
import CloseButton from './../ButtonClose';

const validation = (type, value) => {
  switch(type) {
    case "text": return value.length > 0;
    case "password": return value.length > 5;
    default: return true;
  }
}

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      emailValue: '',
      emailValid: '',
      passwordValue: '',
      passwordValid: ''
    }
  }

  componentWillReceiveProps = () => {
    if(this.props.formToShow == '') {
      this.setState({
        emailValue: '',
        passwordValue: ''
      })
    }
  }

  inputChangeHandler = (e) => {
    switch(e.target.type) {
      case "text": 
        this.setState({
          emailValue: e.target.value,
          emailValid: validation(e.target.type, e.target.value)
        });
      break;
      case "password": 
        this.setState({
          passwordValue: e.target.value,
          passwordValid: validation(e.target.type, e.target.value)
        });
      break;
      default:
        this.setState({
          defaultValue: e.target.value,
          defaultValid: validation(e.target.type, e.target.value)
        });
    }
  }

  defaultHandler = (e) => {
    e.preventDefault();
    alert("Email and password must be valid");
  }

  render() {
    const { formToShow, submitRegisterFormHandler, submitLoginFormHandler, closeModalHandler } = this.props;
    const { emailValue, emailValid, passwordValue, passwordValid } = this.state;
    return (
      <FormWrapper visible={formToShow !== ""}> 
        <CloseButton
          onClick={closeModalHandler}
        />
        <FormTitle>
          {formToShow === "register" ? "Register form" : "Login form"}
        </FormTitle>
        <Input
          type="text"
          placeholder={formToShow === "register" ? "New user email..." : "Enter your email..."}
          value={emailValue}
          onChange={this.inputChangeHandler}
          isValid={emailValid}
          errorText="Email must be correct..."
        />
        <Input
          type="password"
          placeholder="Enter your password..."
          value={passwordValue}
          onChange={this.inputChangeHandler}
          isValid={passwordValid}
          errorText="Password must be at least 6 characters length..."
        />
        <SubmitButton 
          onClick={
            emailValid === true && passwordValid === true ? submitRegisterFormHandler.bind(this, emailValue, passwordValue) : this.defaultHandler
          }
          visible={formToShow === "register"}
          text="Register"
        />
        <SubmitButton 
          onClick={
            emailValid === true && passwordValid === true ? submitLoginFormHandler.bind(this, emailValue, passwordValue) : this.defaultHandler
          }
          visible={formToShow === "login"} 
          text="Login"
        />
      </FormWrapper>
    )
  }
}

Form.propTypes = {
  submitRegisterFormHandler: PropTypes.func.isRequired,
  submitLoginFormHandler: PropTypes.func.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
  formToShow: PropTypes.string.isRequired
}
