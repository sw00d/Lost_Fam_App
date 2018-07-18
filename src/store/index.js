import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers/index';
import promise from 'redux-promise';
import Logger from 'redux-logger';
import Thunk from 'redux-thunk';


// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   stateReconciler: autoMergeLevel2
// };
//
// const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = applyMiddleware(Thunk, promise)(createStore)(rootReducer);
// export const persistor = persistStore(store);
