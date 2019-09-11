import { NavigationActions, StackActions } from 'react-navigation';

let _navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
	_navigator = navigatorRef;
}

function navigate(routeName: any, params: any = null) {
	_navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params,
		})
	);
}

function replace(routeName: any, params: any = null) {
	_navigator.dispatch(
		StackActions.reset({
			index: 0,
			actions: [
				NavigationActions.navigate({
					routeName,
					params,
				})
			]
		})
	)
}

// add other navigation functions that you need and export them
export function goBack() {
	_navigator.dispatch(
		NavigationActions.back({})
	);
}
export default {
	navigate,
	replace,
	goBack,
	setTopLevelNavigator,
};