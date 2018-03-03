import { SEND_PHOTO } from '../actions';
import { Camera } from 'expo';

export default (state = {

}, action) => {
  switch(action.type) {
    case SEND_PHOTO:
      return {
        ...state,
        
      }
    default:
      return state;
  }
}
