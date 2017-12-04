import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILED,
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../actions/types';
const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      console.log('login started');
      return { ...state, loading: true };

    case LOGIN_USER_SUCCESS:
      console.log('login successful');
      console.log(action.payload);
      return { ...INITIAL_STATE, user: action.payload };

    case LOGIN_USER_FAILED:
      return { ...state, error: action.payload, loading: false };

    case LOGOUT_USER:
      console.log('logout started');
      return { ...state, loading: true  };

    case LOGOUT_USER_SUCCESS:
      console.log('logout successful');
      return { ...INITIAL_STATE };

    case LOGOUT_USER_FAILED:
      return { ...state, error: action.payload, loading: false };

    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    default:
      return state;
  }
};
