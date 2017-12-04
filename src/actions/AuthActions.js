import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILED,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  EVENTS_CLEAR 
} from './types';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  console.log('login start');
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        Actions.activitiesPage();
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      })
      .catch(error =>
        dispatch({ type: LOGIN_USER_FAILED, payload: error.message })
      );
  };
};

export const logoutUser = () => {
  return dispatch => {
    dispatch({ type: LOGOUT_USER });
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: EVENTS_CLEAR  });
        dispatch({ type: LOGOUT_USER_SUCCESS });
      })
      .catch(error =>
        dispatch({ type: LOGOUT_USER_FAILED, payload: error.message })
      );
  };
};
