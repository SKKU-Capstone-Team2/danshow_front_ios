import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount() {
    setTimeout( () => SplashScreen.hide(), 1000);
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo: userInfo, loggedIn: true });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <View style = {styles.topStyle}>
        <Text style = {{fontFamily:"LibreFranklin-ExtraBold", color:"black", fontSize:25}}>Welcome</Text>
        <Text style = {{fontFamily:"LibreFranklin-ExtraBold", color: "#1058F4", fontSize:35}}>DANSHOW</Text>
      </View>
      <View style = {styles.middleStyle}>
        <Text style = {{color: "#979EAC", fontSize:15}}>Email</Text>
        <TextInput style = {styles.textInput}><Icon name="mail-outline" size={20}></Icon></TextInput>
        <Text style = {{color: "#979EAC", fontSize:15, paddingTop:20}}>Password</Text>
        <TextInput style = {styles.textInput}><Icon name="lock-closed-outline" size={20}></Icon></TextInput>
      </View>
      <View style = {styles.buttonStyle}>
        <Button
          title="Log in"
          color = "#1058F4"
          onPress={() => this.props.navigation.navigate('Main')}
        />
        <Text style = {{textAlign:"center", paddingTop:15, paddingBottom:15}}>OR</Text>
        <GoogleSigninButton
          style={{ width: 300, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={this._signIn}
          disabled={this.state.isSigninInProgress} />
      </View>
      <View style = {styles.bottomStyle}>
        <Button
          title="Forgot Password?"
          color= "#979EAC"
        />
        <View style = {{padding:20}}></View>
        <Button
          title="Create Account"
          color= "#1058F4"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
      </View>
    </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    fontFamily:"LibreFranklin-ExtraBold",
  },
  middleStyle: {
    marginLeft:40,
    marginRight:40,
    justifyContent: 'center',
    marginTop: 100,
  },
  textInput: {
    justifyContent: "center",
    alignItems: "stretch",
    borderBottomColor: "#979EAC",
    borderBottomWidth: 1,
  },
  buttonStyle: {
    margin: 50,
    paddingTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  bottomStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Button: {
    backgroundColor: "black"
  }
});

export default Login;