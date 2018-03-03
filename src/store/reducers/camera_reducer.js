import { SAVE_PHOTO } from '../actions';

export default (state = {

}, action) => {
  switch(action.type) {
    case SAVE_PHOTO:
    console.log('final');
    alert('success');
      return {
        ...state,
      }
    default:
      return state;
  }
}
