import axios from 'axios';
import { canNavToNext } from '../../utils';

export const CREATE_USER = 'CREATE_USER';
export const USER_HAS_ERRORED = 'USER_ERROR';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const CHECK_FOR_ERRORS = 'CHECK_FOR_ERRORS';


const ROOT_URL = 'http://127.0.0.1:8080';

export const createUser = (validate) => {
  return (dispatch, getState) => {
    const { values } = getState().form.register;
    values.email = values.email.toLowerCase();
    if (canNavToNext(values, validate)) {
      axios.post(`${ROOT_URL}/api/register`, { values }).then(res => {
        if (!res.data.success) dispatch(userHasErrored(true, "Failed to create user."));
        if (res.data.success) {
          dispatch(userHasErrored(false, ""))
          dispatch(authenticateUser(validate, values));
        }
      });
    }
  }
}

export const authenticateUser = (validate, uAndP) => {
  return (dispatch, getState) => {
    // console.log(dispatch);
    const { username, password } = !uAndP ? getState().form.login.values : uAndP;
    // console.log(canNavToNext({ username, password }, validate))
    if (canNavToNext({ username, password }, validate)) {
      console.log('pomcer');
      axios.post(`${ROOT_URL}/api/authenticate`, { username, password }).then(res => {
        console.log(res.data,'This iS res.data');
        if (!res.data.success) dispatch(userHasErrored(true, "Failed to authenticate."));
        if (res.data.success) {
          dispatch(userHasErrored(false, ""))
          dispatch(saveToken(res.data.token));
        }
      }).catch(err=>console.log(err));
    }
  }
}

export const saveToken = token => {
  console.log('token', token);
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
