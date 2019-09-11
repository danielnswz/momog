import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from '../components/Home/Home';
import Friends from '../components/Friends/Friends';
import Login from '../components/Login/Login';
import { Icon } from 'react-native-elements'
import Details from '../components/Details/Details';

const HomeStack = createStackNavigator({
	Home: { screen: Home },
	Details: { screen: Details },
});

const FriendsStack = createStackNavigator({
	Friends: { screen: Friends },
	Details: { screen: Details },
});

export const SignedInStack = createBottomTabNavigator({
	Home: { screen: HomeStack },
	Friends: { screen: FriendsStack },
},{
	tabBarOptions: {
		activeTintColor: 'red',
		inactiveTintColor: 'gray',
	},
});
const StackNavigator = createStackNavigator({
	Login: {
		screen: Login,
		navigationOptions: {
			title: "Login Screen"
		}
	},
	Home: {
		screen: SignedInStack,
		navigationOptions: {
			header: null
		}
	}
}, {
		initialRouteName: 'Login',
	});



const AppNavigator = createAppContainer(StackNavigator);

export default AppNavigator;