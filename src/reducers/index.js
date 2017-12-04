import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EventReducer from './EventReducer';
import EventFormReducer from './EventFormReducer';


export default combineReducers({
  auth: AuthReducer,
  events: EventReducer,
  eventForm: EventFormReducer,
})