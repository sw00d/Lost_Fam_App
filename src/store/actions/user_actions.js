import axios from 'axios';
import { canNavToNext } from '../../utils';

export const CREATE_USER = 'CREATE_USER';
export const USER_HAS_ERRORED = 'USER_ERROR';
export const SAVE_TOKEN = 'SAVE_TOKEN';

const ROOT_URL = 'http://192.168.1.2:8080';

export const createUser = (validate) => {
  return (dispatch, getState) => {
    const { values } = getState().form.register;
    if (canNavToNext(values, validate)) {
      axios.post(`${ROOT_URL}/api/register`, { values }).then(res => {
        if (!res.data.success) dispatch(userHasErrored(true, "Failed to create user."));
        if (res.data.success) {
          dispatch(userHasErrored(false, ""))
          dispatch(authenticateUser(values));
        }
      });
    }
  }
}

export const authenticateUser = uAndP => {
  return (dispatch) => {
    const { username, password } = uAndP;
    axios.post(`${ROOT_URL}/api/authenticate`, { username, password }).then(res => {
      if (!res.data.success) dispatch(userHasErrored(true, "Failed to authenticate."));
      if (res.data.success) {
        dispatch(userHasErrored(false, ""))
        dispatch(saveToken(res.data.token));
      }
    });
  }
}

export const saveToken = token => {
  console.log(token);
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
