import request from './RequestService';
import { LOGIN_URL, REGISTER_URL } from './api_constants';

function doLogin(email: any, password: any) {
	const data = {
		email,
		password,
	};
	return request({ url: LOGIN_URL, method: 'POST', data });
}

function doRegister(email: any, password: any) {
	const data = {
		email,
		password,
	};
	return request({ url: REGISTER_URL, method: 'POST', data });
}

export default {
	doLogin,
	doRegister,
};