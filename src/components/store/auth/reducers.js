import {
  CHANGE_AUTH_FIELD,
  SET_USER,
  CLEAR_AUTH_FIELDS,
  SET_SIGN_ERRORS,
  CLEAR_SIGN_ERRORS
} from './types';

const initialState = {
  authentication: {
    email: '',
    password: '',
  },
  user: {},
  signErrors: {
    email: '',
    password: ''
  }
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case CHANGE_AUTH_FIELD:
      return {
        ...state,
        authentication: {
          ...state.authentication,
          [action.key]: action.value
        }
      };
    case SET_USER:
      return {
        ...state,
        user: action.user
      };
    case CLEAR_AUTH_FIELDS:
      return {
        ...state,
        authentication: {
          ...state.authentication,
          email: '',
          password: ''
        }
      };
    case SET_SIGN_ERRORS:
      return {
        ...state,
        signErrors: {
          ...state.signErrors,
          [action.key]: action.value
        }
      };
    case CLEAR_SIGN_ERRORS:
      return {
        ...state,
        signErrors: {
          ...state.signErrors,
          email: '',
          password: ''
        }
      };
    default:
      return state;
  }
}
