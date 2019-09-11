import { call, put, takeLatest } from 'redux-saga/effects';
import * as ActionType from '../constants/ActionTypes';
import Auth from '../services/LoginService';
import NavigationService from '../services/NavigationService';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions, NavigationActions } from 'react-navigation';

function* loginTask(action: any) {
	try {
		yield put({
			type: ActionType.LOGIN_IS_LOADING,
		});
		const { payload } = action;

		const res = yield call(Auth.doLogin, payload.email, payload.password);

		if (res.status === 200) {
			yield call(AsyncStorage.setItem, 'currentSession', JSON.stringify(res.data));
			yield put({
				type: ActionType.AUTH_LOGIN_SUCCESS,
				payload: res.data,
			});
			NavigationService.replace('Home')
		} else {
			yield put({
				type: ActionType.LOGIN_HAS_ERROR,
				payload: res.data,
			});
		}
	} catch (e) {
		console.log(e);
		const payload = typeof e === 'string' ? { message: e } : e.data;
		yield put({
			type: ActionType.LOGIN_HAS_ERROR,
			payload,
		});
	}
}

/* function* registerTask(action: { payload: any; }) {
	try {
		yield put({
			type: 'AUTH_REGISTER_LOADING',
		});

		const { payload } = action;

		const res = yield call(Auth.doRegister, payload.email, payload.password);

		if (res.status === 200) {
			yield put({
				type: 'AUTH_REGISTER_SUCCESS',
				payload: res.data,
			});
		} else {
			yield put({
				type: 'AUTH_REGISTER_ERROR',
				payload: res.data,
			});
		}
	} catch (e) {
		console.log(e);
		const payload = typeof e === 'string' ? { message: e } : e.data;
		yield put({
			type: 'AUTH_REGISTER_ERROR',
			payload,
		});
	}
} */

function* logoutTask() {
	try {
		yield call(AsyncStorage.removeItem, 'currentSession');
		yield put({
			type: ActionType.AUTH_LOGOUT,
		});
		NavigationService.navigate('Login');
	} catch (e) {
		yield put({
			type: ActionType.AUTH_LOGOUT,
		});
	}
}

export default function* authSaga() {
	yield takeLatest(ActionType.AUTH_LOGIN, loginTask);
	yield takeLatest(ActionType.AUTH_LOGOUT, logoutTask);
}