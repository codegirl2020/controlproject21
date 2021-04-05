import * as actionTypes from './actionTypes';
import firebase from '../../config/fbConfig';

const requestAuth = () => {
  return { type: actionTypes.AUTH_REQUEST };
}

const resultAuth = (user) => {
  return { type: actionTypes.AUTH_SUCCESS, user };
}

const errorAuth = (error) => {
  return { type: actionTypes.AUTH_ERROR, error };
}

export const logOut = () => {
  return { type: actionTypes.AUTH_LOGOUT };
}

export const sendAuth = (userData, history) => dispatch => {
  dispatch(requestAuth())
  firebase.auth()
    .signInWithEmailAndPassword(userData.email, userData.password)
    .then(result => {
      dispatch(resultAuth(result.user))
      history.push('/news')
    })
    .catch(err => {
      if (err.code === 'auth/wrong-password') {
        dispatch(errorAuth('Wrong Password'));
      }
    })
}


export const onLogOut = () => dispatch => {
  dispatch(requestAuth())
  firebase.auth().signOut()
    .then(() => {
      dispatch(logOut())
    })
};