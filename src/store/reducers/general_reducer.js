import { CONNECTION_UPDATE } from '../actions/general_actions';

export default (state = {}, action) => {
  switch(action.type) {
    case CONNECTION_UPDATE:
    const { bool } = action;
      return {
        ...state,
        isConnected: bool
      }
    default:
      return state;
  }
}
