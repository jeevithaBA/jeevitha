
/** 
* This file is the Entry point to the project.   
*
* @version 1.0
* @Author [Jeevitha (jeevitha.ba@impelsys.com)]
* @Date 10-12-2019
* @modified [swamy (marulasiddaswamy.bp@impelsys.com)]
* @LastModified 19-12-2019
*/
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import App from '../App';

import configureStore from '@store/configureStore';
const { persistor, store } = configureStore();

const EntryPoint = () => (
  <Provider store={store}>
    <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>
);

export default EntryPoint;
