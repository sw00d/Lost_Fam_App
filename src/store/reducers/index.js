import { combineReducers } from 'redux';
import albumReducer from './album_reducer';
import userReducer from './user_reducer';
import picsReducer from './pics_reducer';
import generalReducer from './general_reducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  albums: albumReducer,
  form: formReducer,
  user: userReducer,
  app: generalReducer
});

export default rootReducer;
