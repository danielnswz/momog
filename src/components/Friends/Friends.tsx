import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import NavigationService from '../../services/NavigationService';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFriend } from '../../actions/FriendActions';


export interface FriendsDisplayProps {
	friends: { current: any; possible: any; },
	addFriend: Function
}
class Friends extends React.Component<FriendsDisplayProps> {

	render() {
		const allFriends = this.props.friends.possible.map((friend: any, index: any) => {
			return (
				<Button
					key={friend}
					title={`Add ${friend}`}
					onPress={() =>
						this.props.addFriend(index)
					}
				/>
			);
		});
		return (
			<View style={styles.container}>
				<Text>Add friends here!</Text>
				{allFriends}
				<Button
					title="Back to home"
					onPress={() =>
						NavigationService.navigate('Home')
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

const mapToStateProps = (state: { friends: any; }) => {
	const { friends } = state;
	return { friends };
}

const mapDispatchToProps = (dispatch: any) => (
	bindActionCreators({
	  addFriend,
	}, dispatch)
  );

export default connect(mapToStateProps, mapDispatchToProps)(Friends);