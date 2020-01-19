import { LOG_IN,
         LOAD_USER,
         LOG_OUT,
         LOADING,
         AUTH_ERROR } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: false
}

const auth = (state = initialState, action) => {
  switch(action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };

    case LOAD_USER:
    case LOG_IN:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        error: false
      };

    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: true
      };

    case LOG_OUT:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: false
      };

    default:
      return state;
  }
}

export default auth;
