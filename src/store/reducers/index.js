import { combineReducers } from 'redux';
import albumReducer from './album_reducer';
import userReducer from './user_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  albums: albumReducer,
  form: formReducer,
  user: userReducer
});

export default rootReducer;
