import { TEST_PERSIST } from '../actions';

export default (state = {}, action) => {
  switch(action.type) {
    case TEST_PERSIST:
      const test = !state.test;
      return {
        ...state,
        test
      }
    default:
      return state;
  }
}
