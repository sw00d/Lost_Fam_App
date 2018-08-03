import { CONNECTION_UPDATE } from '../actions/general_actions';
import { SAVE_PHOTO } from '../actions/pics_actions';

export default (state = {}, action) => {
  switch(action.type) {
    case SAVE_PHOTO:
      return {
        ...state,
      }
    default:
      return state;
  }
}
