/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppNavigator from './src/utils/AppNavigator';
import { AppRegistry } from 'react-native';
import NavigationService from './src/services/NavigationService';
import { createStore, applyMiddleware } from 'redux';
import combinedReducers from './src/reducers';
import { Provider } from 'react-redux';
import reduxLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(combinedReducers, applyMiddleware(reduxLogger, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<AppNavigator
					ref={navigatorRef => {
						NavigationService.setTopLevelNavigator(navigatorRef);
					}}
				/>
			</Provider>
		);
	}
}

AppRegistry.registerComponent('momog', () => AppNavigator);