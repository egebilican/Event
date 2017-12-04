import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './Router';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { Text, View, StyleSheet } from 'react-native';
import firebase from 'firebase';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCGprABKARF3hsG0oWTcpYkp_egacvmwL4',
      authDomain: 'swingistanbul-261c7.firebaseapp.com',
      databaseURL: 'https://swingistanbul-261c7.firebaseio.com',
      projectId: 'swingistanbul-261c7',
      storageBucket: 'swingistanbul-261c7.appspot.com',
      messagingSenderId: '586708988497'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
