import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import NavigationService from '../../services/NavigationService';
import { connect } from 'react-redux';
import { FriendsDisplayProps } from '../Friends/Friends';
import AsyncStorage from '@react-native-community/async-storage';

class Home extends React.Component<FriendsDisplayProps> {
	
	componentDidMount() {
		AsyncStorage.getItem('currentSession', (err, rs) => {
			alert(rs);
		});
	}
	render() {
		/* { this.props.screenProps.currentFriends.length } */
		console.log(this.props);
		return (
			<View style={styles.container}>
				<Text>We have {this.props.friends.current.length} friends!</Text>
				<Button
					title="Add some friends"
					onPress={() =>
						NavigationService.navigate('Friends')
					}
				/>
				<Button
					title="Go to details"
					onPress={() =>
						NavigationService.navigate('Details')
					}
				/>
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
	button: {
        marginBottom: 10,
    },
});

const mapStateToProps = (state: { friends: any; }) => {
	const { friends } = state
	return { friends }
  };
  
  export default connect(mapStateToProps)(Home);