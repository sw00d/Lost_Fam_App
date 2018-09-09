import { combineReducers } from 'redux';
import albumReducer from './album_reducer';
import userReducer from './user_reducer';
import picsReducer from './pics_reducer';
import generalReducer from './general_reducer';
import { reducer as formReducer } from 'redux-form'
import { USER_LOGOUT } from '../actions/general_actions';

const appReducer = combineReducers({
  albums: albumReducer,
  form: formReducer,
  user: userReducer,
  app: generalReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;
