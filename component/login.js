import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import axios from "axios";

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  componentDidMount() {
    setTimeout( () => SplashScreen.hide(), 1000);
    GoogleSignin.configure({
      webClientId: '110510251327-vodq8nj5ij2mnhtr9fad6uvogm1n5l33.apps.googleusercontent.com', 
      offlineAccess: true,
      hostedDomain: '', 
      forceConsentPrompt: true, 
    });
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo: userInfo, loggedIn: true });
      const currentUser = GoogleSignin.getTokens().then((res) => {
        var access_token = res.accessToken;
        console.log(access_token);
        
        // axios.post('url', {
        //   access_token }.then(console.log('complete')))
      })
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

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null, loggedIn: false }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
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
        <Text style = {{color: "#979EAC", fontSize:15, marginTop:50}}>Password</Text>
        <TextInput style = {styles.textInput}><Icon name="lock-closed-outline" size={20}></Icon></TextInput>
      </View>
      <View style = {styles.buttonStyle}>
        <TouchableOpacity style={styles.touchOpa} onPress={() => this.props.navigation.navigate('Main')}>
          <Text style={{color:'white', fontWeight: 'bold'}}>Log in</Text>
        </TouchableOpacity>
        <Text style = {{textAlign:"center", paddingTop:15, paddingBottom:15, color: "#979EAC", fontWeight:'bold'}}>OR</Text>
        <GoogleSigninButton
          style={{ width: 300, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={this._signIn}
          disabled={this.state.isSigninInProgress} />
          <View style={styles.buttonContainer}>
            {this.state.loggedIn && <Button onPress={this.signOut}
              title="Signout"
              color="#841584">
            </Button>}
          </View>
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
  },
  bottomStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:10,
  },
  touchOpa: {
    backgroundColor: "#1058F4",
    alignItems: 'center',
    justifyContent: 'center',
    height: 39,
    color: '#FFFFFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default Login;