/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import { AppWrapper } from './src/App'
import './src/i18n'

AppRegistry.registerComponent(appName, () => AppWrapper)
