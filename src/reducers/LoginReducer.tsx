import * as ActionType from '../constants/ActionTypes';

const initialState = {
	loginError: null,
	loginLoading: false,
	loginMessage: null,
	isLogged: false,
	registerLoading: false,
	registerError: null,
	registerMessage: null,
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case ActionType.LOGIN_IS_LOADING:
			return {
				...state,
				loginLoading: true,
			};
		case ActionType.AUTH_HYDRATE_TOKEN:
			return {
				...state,
				loginLoading: false,
				loginError: null,
				isLogged: false,
				loginMessage: action.payload,
			};
		case ActionType.AUTH_LOGIN_SUCCESS:
			return {
				...state,
				loginLoading: false,
				loginError: null,
				isLogged: true,
				loginMessage: action.payload,
			};
		case ActionType.LOGIN_HAS_ERROR:
			return {
				...state,
				loginLoading: false,
				loginError: action.payload,
				isLogged: false,
				loginMessage: null,
			};
		/* case 'AUTH_REGISTER_LOADING':
			return {
				...state,
				registerLoading: true,
			};
		case 'AUTH_REGISTER_SUCCESS':
			return {
				...state,
				registerLoading: false,
				registerError: null,
				registerMessage: action.payload,
			};
		case 'AUTH_REGISTER_ERROR':
			return {
				...state,
				registerError: action.payload,
				registerLoading: false,
				registerMessage: null,
			}; */
		case ActionType.AUTH_LOGOUT:
			return initialState;
		default:
			return state;
	}
};