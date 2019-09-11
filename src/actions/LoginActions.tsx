import * as ActionType from '../constants/ActionTypes';

const authLogin = (email: any, password: any) => ({
	type: ActionType.AUTH_LOGIN,
	payload: {
		email,
		password,
	},
});

const authRegister = (email: any, password: any) => ({
	type: ActionType.AUTH_REGISTER,
	payload: {
		email,
		password,
	},
});
const authLogout = () => ({
	type: ActionType.AUTH_LOGOUT,
});

export default {
	authLogin,
	authRegister,
	authLogout
}