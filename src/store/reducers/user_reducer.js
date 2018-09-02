import { USER_HAS_ERRORED, SAVE_TOKEN } from '../actions/user_actions';

export default (state = {}, action) => {

  // console.log(action.type);
  switch(action.type) {
    case USER_HAS_ERRORED:
      const { message, status } = action.payload;
      return {
        status,
        message,
        ...state
      }
    case SAVE_TOKEN:
      const { token } = action;
      return {
        token,
        ...state
      }
    default:
      return state;
  }
}
