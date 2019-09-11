import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class Details extends React.Component {
	
	render() {
		return (
			<View style={styles.container}>
				<Text>Hola Mundo</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const mapStateToProps = (state: { friends: any; }) => {
	const { friends } = state
	return { friends }
  };
  
  export default connect(mapStateToProps)(Details);