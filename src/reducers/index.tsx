import { combineReducers } from 'redux';
import friendReducer from './FriendReducer';
import loginReducer from './LoginReducer';

const combinedReducers = combineReducers({
	friends: friendReducer,
	login: loginReducer
});
export default combinedReducers;