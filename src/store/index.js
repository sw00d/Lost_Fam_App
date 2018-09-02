import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers/index';
import promise from 'redux-promise';
import Logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store = applyMiddleware(thunk, promise)(createStore)(rootReducer);

// This is for redux persist...
// const persistConfig = {
//   key: 'root',
//   storage,
//   blackList: ['form']
// };


// const persistedReducer = persistCombineReducers(persistConfig, rootReducer);
//
//
// export default function configureStore() {
//   let store = applyMiddleware(thunk, promise)(createStore)(persistedReducer);
//   let persistor = persistStore(store);


// uncomment this line to purge all state.
  // persistor.purge();

  // return { persistor, store }

// }
// export const persistor = persistStore(store);
