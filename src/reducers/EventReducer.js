import {
  EVENTS_FETCH_SUCCESS,
  EVENTS_COMMON_FETCH_SUCCESS,
  EVENTS_CLEAR
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EVENTS_FETCH_SUCCESS:
      console.log('events fetch successful');
      console.log(state);
      console.log(action.payload);
      return { ...state, ...action.payload };
    case EVENTS_COMMON_FETCH_SUCCESS:
      console.log('events fetch successful');
      console.log(state);
      console.log(action.payload);
      return { ...state, ...action.payload };
    case EVENTS_CLEAR:
      return INITIAL_STATE;
    default:
      return state;
  }
};
