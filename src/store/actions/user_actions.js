import axios from 'axios';
import { canNavToNext } from '../../utils';
import Expo from 'expo';
import { store } from '../index.js'
import { AsyncStorage } from "react-native"


export const CREATE_USER = 'CREATE_USER';
export const USER_HAS_ERRORED = 'USER_ERROR';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const CHECK_FOR_ERRORS = 'CHECK_FOR_ERRORS';

const { manifest } = Expo.Constants;
const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(`:`).shift().concat(`:8080`)
  : `api.example.com`;
const ROOT_URL = `http://${api}`;

export const createUser = (validate) => {
  return () =>{
    const { dispatch, getState } = store;
    const { values } = getState().form.register;
    values.email = values.email.toLowerCase();
    if (canNavToNext(values, validate)) {
      axios.post(`${ROOT_URL}/api/register`, { values }).then(res => {
        if (!res.data.success) {
          dispatch(userHasErrored(true, "Failed to create user."));
          alert(res.data.message)
        }
        if (res.data.success) {
          dispatch(userHasErrored(false, ""))
          dispatch(authenticateUser(validate, values));
        }
      }).catch(err=>console.log(err));
    }
  }
}

export const authenticateUser = (validate, uAndP) => {
  console.log('fired');
  return () => {
    console.log('pomc')
    const { dispatch, getState } = store;
    const { email, password } = !uAndP ? getState().form.login.values : uAndP;

    if (canNavToNext({ email, password }, validate)) {
      axios.post(`${ROOT_URL}/api/authenticate`, { email, password }).then(res => {
        if (!res.data.success){
          dispatch(userHasErrored(true, "Failed to authenticate."));
          alert('Invalid Login. Try again.');
        }

        if (res.data.success) {
          dispatch(userHasErrored(false, ""))
          dispatch(saveToken(res.data.token));
        }
      }).catch(err=>console.log(err));
    }
  }
}


export const saveToken = token => {
  console.log('Save token fired');
  try {
    AsyncStorage.setItem("id_token", token);
    // console.log('saved token to async');
  } catch (error) {
    console.error('AsyncStorage error: ' + error.message);
  }
  return {
    type: SAVE_TOKEN,
    token
  }
}

export const userHasErrored = (status, message) => {
  const payload = {status, message};
  return {
    type: USER_HAS_ERRORED,
    payload
  }
}
