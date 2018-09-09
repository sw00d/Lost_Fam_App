import { store } from '../index.js'


export const CONNECTION_UPDATE = 'CONNECTION_UPDATE';
export const USER_LOGOUT = 'USER_LOGOUT';


export const updateConnection = (bool) => {
  return {
    type: CONNECTION_UPDATE,
    bool
  }
}

export const logout = () => {
  return {
    type: USER_LOGOUT,
    bool: true
  }
}
