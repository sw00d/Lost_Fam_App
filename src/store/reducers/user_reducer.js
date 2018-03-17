import { CREATE_USER } from '../actions/user_actions';

export default (state = {}, action) => {
  switch(action.type) {
    case CREATE_USER:
      const { success } = action.req;
      return {
        success,
        ...state
      }
    default:
      return state;
  }
}
