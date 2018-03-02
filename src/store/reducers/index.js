import { combineReducers } from 'redux';
import albumReducer from './album_reducer';

const rootReducer = combineReducers({
  albums: albumReducer
});

export default rootReducer;
