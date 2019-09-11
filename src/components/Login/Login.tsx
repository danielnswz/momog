import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import LoginActions from '../../actions/LoginActions'
// import Loader from '../Loader/Loader';

type loginProps = {
	login: Function,
	loginError: boolean,
	isLogged: boolean,
	loginLoading: boolean,
	loginMessage: any
}

type loginStates = {
	user: string,
	pass: string
}

class Login extends Component<loginProps, loginStates> {
    
    doLogin(){
		let { user, pass } = this.state;
		user = 'dklie@mailinator.com';
		pass = 'Qw123456'
        this.props.login(user, pass);
    }

    render(){
        let { loginError, isLogged, loginLoading, loginMessage } = this.props;
        return (
            <View style={styles.container}>
                {/* <Loader loading={loginLoading} /> */}
                <Text>LOGIN SCREEN</Text>
                <View>
                    <TextInput
                        placeholder={'Username'}
                        placeholderTextColor={'rgba(54, 173, 164, .2)'}
                        returnKeyType={'next'}
                        autoCapitalize={'none'}
                        underlineColorAndroid={'transparent'}
                        style={styles.input}
                        onChangeText={(user) => this.setState({user})}
                    />
                    <TextInput
						placeholder={'Password'}
						secureTextEntry={true}
                        placeholderTextColor={'rgba(54, 173, 164, .2)'}
                        returnKeyType={'next'}
                        autoCapitalize={'none'}
                        underlineColorAndroid={'transparent'}
                        style={styles.input}
                        onChangeText={(pass) => this.setState({pass})}
                    />
                </View>
                <Button
                    title={"LOGIN"}
                    onPress={ () => { this.doLogin() } }
                />
                <Text style={{marginTop: 20}}>{loginError ? "FORM ERROR" : ""}</Text>
				<Text style={{marginTop: 20}}>{loginMessage ? JSON.stringify(loginMessage) : ""}</Text>
                <Text style={{marginTop: 20}}>{isLogged ? "ONLINE" : "OFFLINE"}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state: any) => {
	return {
        isLogged: state.login.isLogged,
        loginError : state.login.loginError,
		loginLoading: state.login.loginLoading,
		loginMessage: state.login.loginMessage
    };
	/* console.log(state);
	const { loginLoading, loginError, isLogged } = state.login;
    return {
		loginLoading,
		loginError,
		isLogged
    }; */
};

const mapDispatchToProps = (dispatch: any ) => {
    return {
        login: (username: string, password: string) => dispatch(LoginActions.authLogin(username, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },

    input: {
        marginBottom: 10,
        borderBottomColor: '#36ada4',
        borderBottomWidth: 1
    },

    button: {
        padding: 10,
        backgroundColor: '#36ada4'
    }
});