import { store } from '../index.js'


export const CONNECTION_UPDATE = 'CONNECTION_UPDATE';


export const updateConnection = (bool) => {
  console.log('fired update! ', bool);
  return {
    type: CONNECTION_UPDATE,
    bool
  }
}
