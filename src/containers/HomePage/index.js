/* eslint-disable */
import React from 'react';
import axios from 'axios';
import Header from './../../components/Header';
import MainSection from './../MainSection';

export default class HomePage extends React.Component {
  
  constructor() {
    super();
    this.state = {
      formToShow: '',
      userName: '',
      token: '',
      productList: [],
      activeProduct: {}
    }
  }

  componentDidMount = () => {
    this.getProductsList();
  }

  submitRegisterFormHandler = (email, password) => {
    axios.post('http://smktesting.herokuapp.com/api/register/', {
      username: email,
      password: password
    })
    .then(response => {
      if(response.data.token) {
        this.setState({
          formToShow: '',
          userName: email,
          token: response.data.token
        })
      } else if(response.data.message) {
        alert(response.data.message);
        this.setState({
          formToShow: ''
        })
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  submitLoginFormHandler = (email, password) => {
    axios.post('http://smktesting.herokuapp.com/api/login/', {
      username: email,
      password: password
    })
    .then(response => {
      if(response.data.token) {
        this.setState({
          formToShow: '',
          userName: email,
          token: response.data.token
        })
      } else if(response.data.message) {
        alert(response.data.message);
        this.setState({
          formToShow: ''
        })
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  getProductsList = () => {
    axios.get('http://smktesting.herokuapp.com/api/products/')
    .then((response) => {
      this.setState({
        productList: response.data,
        activeProduct: response.data[0]
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  getActiveProduct = (id) => {
    const ACTIVE_PRODUCT = this.state.productList.filter(item => item.id === id);
    this.setState({
      activeProduct: ACTIVE_PRODUCT[0]
    })
  }

  signInHandler = () => {
    this.setState({
      formToShow: 'login',
    })
  }

  signUpHandler = () => {
    this.setState({
      formToShow: 'register',
    })
  }

  signOutHandler = () => {
    this.setState({
      userName: '',
      token: '',
    })
  }

  closeModalHandler = (e) => {
    e.preventDefault();
    this.setState({
      formToShow: ''
    });
  }
  
  render() {
    return (
      <main>
        <Header 
          userName={this.state.userName}
          signInHandler={this.signInHandler}
          signUpHandler={this.signUpHandler}
          signOutHandler={this.signOutHandler}
        />
        <MainSection 
          submitRegisterFormHandler={this.submitRegisterFormHandler}
          submitLoginFormHandler={this.submitLoginFormHandler}
          closeModalHandler={this.closeModalHandler}
          getActiveProduct={this.getActiveProduct}
          formToShow={this.state.formToShow}
          productList={this.state.productList}
          activeProduct={this.state.activeProduct}
          token={this.state.token}
        />
      </main>
    )
  }
}