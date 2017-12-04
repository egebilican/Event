import firebase from 'firebase';
import {
  EVENTS_FETCH_SUCCESS,
  EVENTS_FETCH_FAILED,
  EVENTS_COMMON_FETCH_SUCCESS,
  EVENT_NAME_CHANGED,
  EVENT_DATE_CHANGED,
  EVENT_PLACE_CHANGED,
  EVENT_UPDATE,
  EVENT_CREATE
} from './types';
import { Actions } from 'react-native-router-flux';

const adminUid = 'mnY44Mqm4uTBDeZ21AWNzRMVnCS2';

export const fetchEvents = () => {
  const { currentUser } = firebase.auth();
  if (currentUser) {
    return dispatch => {
      firebase
        .database()
        .ref(`/users//${currentUser.uid}/Events/`)
        .on('value', snapshot => {
          dispatch({
            type: EVENTS_FETCH_SUCCESS,
            payload: snapshot.val()
          });
        });
    };
  }
  return dispatch => {
     dispatch({type : EVENTS_FETCH_FAILED});
  }
};

export const fetchCommonEvents = () => {
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${adminUid}/Events/`)
      .on('value', snapshot => {
        dispatch({
          type: EVENTS_COMMON_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};

export const eventUpdate = ({ prop, value }) => {
  return dispatch => {
    dispatch({
      type: EVENT_UPDATE,
      payload: { prop, value }
    });
  };
};

export const eventCreate = ({ name, date, place }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/Events/`)
      .push({ name, date, place })
      .then(() => {
        dispatch({ type: EVENT_CREATE });
        Actions.activitiesPage();
      });
  };
};

export const eventSave = ({ name, date, place, uid }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/Events/${uid}`)
      .set({ name, date, place })
      .then(() => {
        Actions.activitiesPage();
      });
  };
};
