/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import Entrypoint from './src/Entrypoint'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Entrypoint);
