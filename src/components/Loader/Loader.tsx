import React, { Component } from 'react';
import { Modal, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
type loaderProps = {
	loading: boolean
}
export default class Loader extends Component<loaderProps> {
	render() {
		const {
			loading,
			...attributes
		} = this.props;
		return (
			
						<ActivityIndicator
							animating={loading} />
					
		)
	}
}

const styles = StyleSheet.create({
	modalBackground: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-around',
		backgroundColor: '#00000040'
	},
	activityIndicatorWrapper: {
		backgroundColor: '#FFFFFF',
		height: 100,
		width: 100,
		borderRadius: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around'
	}
});