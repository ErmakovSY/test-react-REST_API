import React from 'react';
import PropTypes from 'prop-types';
import { AddCommentButton } from './../styledComponents';

const CommentButton = (props) => (
  <AddCommentButton 
    visible={props.visible}
    onClick={props.onClick}
  >
    <span>{props.text}</span>
  </AddCommentButton> 
);

CommentButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default CommentButton;