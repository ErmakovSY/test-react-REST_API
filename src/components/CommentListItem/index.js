/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { 
  CommentListBlock, 
  CommentListRate, 
  CommentListText, 
  CommentListAuthor 
} from './../styledComponents';

const CommentListItem = (props) => {
  const { rate, text, author } = props;
  return (
    <li>
      <CommentListBlock>
        <CommentListRate>
          Rating: <span>{rate}</span>
        </CommentListRate>
        <CommentListText>{text}</CommentListText>
        <CommentListAuthor>
          Created by: <span>{author}</span>
        </CommentListAuthor>
      </CommentListBlock>
    </li>
  )
}

CommentListItem.propTypes = {
  rate: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default CommentListItem;