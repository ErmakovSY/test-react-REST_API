/* eslint-disable */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import { 
  CardWrapper, 
  ImageWrapper, 
  Title, 
  Description, 
  AddCommentWrapper,
  CommentField, 
  CommentList 
} from './../styledComponents';
import CommentButton from './../ButtonComment';
import CommentListItem from './../CommentListItem';

export default class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      image: '',
      rate: '',
      commentValue: '',
      commentList: []
    }
  }

  componentWillReceiveProps = () => {
    setTimeout(() => {
      this.getProductComments(this.props.data.id);
      this.setState({
        id: this.props.data.id,
        image: this.props.data.img
      })
    }, 200)
  }

  ratingChangeHandler = (newRating) => {
    this.setState({
      rate: newRating
    });
  }

  commentChangeHandler = (e) => {
    this.setState({
      commentValue: e.target.value
    });
  }

  addCommentHandler = (id) => {
    if (this.state.rate == '') {
      alert('Rating can not be empty');
      return;
    } else if (this.state.commentValue == '') {
      alert('Comment can not be empty');
      return;
    }
    axios({
      method: 'post',
      url: 'http://smktesting.herokuapp.com/api/reviews/' + id,
      data: {
        rate: this.state.rate,
        text: this.state.commentValue
      },
      headers: {Authorization: 'Token '+this.props.token},
    })
    .then(response => {
      this.getProductComments(id);
    })
    .catch(error => {
      console.log(error);
    });
  }

  getProductComments = (id) => {
    axios.get('http://smktesting.herokuapp.com/api/reviews/' + id)
    .then(response => {
      this.setState({
        commentList: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const { id, image, rate, commentList } = this.state;
    const { data, token } = this.props;
    return (
      <CardWrapper>
        <Title>
          <span>{data.title}</span>
        </Title>
        <ImageWrapper>
          <img src={(image) ? `http://smktesting.herokuapp.com/static/${image}` : ''} alt={data.title} />
        </ImageWrapper>
        <Description>
          <span>{data.text}</span>
        </Description>
        <AddCommentWrapper visible={token ? 1 : 0}>
          <StarRatings
            rating={Number(rate)}
            isSelectable={true}
            isAggregateRating={false}
            starWidthAndHeight={"15px"}
            changeRating={this.ratingChangeHandler}
            numOfStars={5}
          />  
          <CommentField 
            onChange={this.commentChangeHandler}
          />
          <CommentButton 
            onClick={this.addCommentHandler.bind(this, id)}
            visible={true} 
            text="Add comment"
          />
        </AddCommentWrapper>
        <CommentList>
          {
            commentList.map((item, index) => (
              <CommentListItem
                key={index}
                rate={item.rate}
                text={item.text}
                author={item.created_by.username}
              />
            ))
          }
        </CommentList>
      </CardWrapper>
    );
  }
}

ProductCard.propTypes = {
  data: PropTypes.object.isRequired,
  token: PropTypes.string
}