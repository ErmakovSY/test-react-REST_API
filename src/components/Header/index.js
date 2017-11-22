/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper, LogoWrapper, UserWrapper, UserName, SignInButton, SignUpButton, SignOutButton } from './../styledComponents.js';

const Header = (props) => {
  const { userName, signInHandler, signUpHandler, signOutHandler } = props;
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img src="./favicon.ico" alt="Logo" />
      </LogoWrapper>
      <UserWrapper>
        <UserName>
          {userName != '' ? `Logged In, as ${userName}` : ''}
        </UserName>
        <SignInButton 
          onClick={signInHandler}
          visible={userName.length === 0}
        >
          <span>Sign In</span>
        </SignInButton>
        <SignUpButton 
          onClick={signUpHandler}
          visible={userName.length === 0}
        >  
          <span>Sign Up</span>
        </SignUpButton>
        <SignOutButton 
          onClick={signOutHandler}
          visible={userName.length > 0}
        >  
          <span>Log Out</span>
        </SignOutButton>
      </UserWrapper>
    </HeaderWrapper>
  );
}

export default Header;

Header.propTypes = {
  userName: PropTypes.string,
  signInHandler: PropTypes.func.isRequired,
  signUpHandler: PropTypes.func.isRequired,
  signOutHandler: PropTypes.func.isRequired
}
