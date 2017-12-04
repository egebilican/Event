import {EVENT_UPDATE} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  date: '',
  place: ''
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case EVENT_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value}
    default:
      return state;
  }
}