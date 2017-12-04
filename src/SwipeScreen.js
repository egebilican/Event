import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import LoginPage from './components/LoginPage';
import ActivitiesPage from './components/ActivitiesPage';

export default class SwipeScreen extends Component {
  render() {
    return (
      <Swiper showsButtons={true} loop={false}>
        <ActivitiesPage>Activities</ActivitiesPage>
        <LoginPage>Login</LoginPage>
        
      </Swiper>
    );
  }
}
