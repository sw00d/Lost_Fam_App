import { combineReducers } from 'redux';
import albumReducer from './album_reducer';
import cameraReducer from './camera_reducer';

const rootReducer = combineReducers({
  albums: albumReducer,
  camera: cameraReducer
});

export default rootReducer;
