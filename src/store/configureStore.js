/** 
* This file is a store which consists of all state values.
* @version 1.0
* @Author [Jeevitha (jeevitha.ba@impelsys.com)]
* @Date 7-12-2019
* @modified  [swamy (marulasiddaswamy.bp@impelsys.com)]
* @LastModified 27-01-2020
*/

import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducers from '@reducers';
import sagas from '@sagas';
const config = {
  key: 'root',
  storage,
  debug: true
};
const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);



const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {});
const configureStore = () => {
  return { persistor, store };
};

sagaMiddleware.run(sagas);

export default configureStore;
