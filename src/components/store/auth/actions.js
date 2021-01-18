import {
  CHANGE_AUTH_FIELD,
  SET_USER,
  CLEAR_AUTH_FIELDS,
  SET_SIGN_ERRORS,
  CLEAR_SIGN_ERRORS
} from './types';
import fire from '../../../auth/fire';

export const clearAuthFields = () => ({ type: CLEAR_AUTH_FIELDS });
export const clearSignErrors = () => ({ type: CLEAR_SIGN_ERRORS });

export const changeAuthField = (key, value) => ({
  type: CHANGE_AUTH_FIELD,
  key,
  value
});

export const setUser = (user) => ({
  type: SET_USER,
  user
});

export const setSignErrors = (key, value) => ({
  type: SET_SIGN_ERRORS,
  key,
  value
});

export const identificateUser = () => {
  return (dispatch) => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser({}));
      }
    });
  };
};

export const logInHandler = (email, password, history, event) => {
  return (dispatch) => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(clearAuthFields());
      })
      .then(() => history.push('/'))
      .catch((err) => {
        dispatch(clearSignErrors());
        if (
          err.code === 'auth/invalid-email'
          || err.code === 'auth/user-disabled'
          || err.code === 'auth/user-not-found'
        ) {
          dispatch(setSignErrors('email', err.message));
        } else {
          dispatch(setSignErrors('password', err.message));
        }
      });
  };
};

export const signUpHandler = (email, password, history, event) => {
  return (dispatch) => {
    event.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(clearAuthFields());
      })
      .then(() => history.push('/'))
      .catch((err) => {
        dispatch(clearSignErrors());
        if (
          err.code === 'auth/email-already-in-use'
          || err.code === 'auth/invalid-email'
          || err.code === 'auth/operation-not-allowed'
        ) {
          dispatch(setSignErrors('email', err.message));
        } else {
          dispatch(setSignErrors('password', err.message));
        }
      });
  };
};
