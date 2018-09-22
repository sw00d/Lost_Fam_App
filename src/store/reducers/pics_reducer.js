import { CONNECTION_UPDATE } from '../actions/general_actions';
import { SAVE_PHOTO, PIC_SAVED } from '../actions/pics_actions';

export default (state = {}, action) => {
  switch(action.type) {
    case SAVE_PHOTO:
      return {
        ...state,
      }
    case PIC_SAVED:
      const { bool } = action;
      return {
        ...state,
        picSaved: bool
      }
    default:
      return state;
  }
}
