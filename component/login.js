import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen';
// import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
// import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

function Login({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1000);
  }, [])

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const signwitheamil = async () => {
    navigation.navigate("Main")
    await fetch("http://3.37.74.8:8080/user/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": email,
        "password": pass
      }),
    })
      .then(res => res.text())
      .then(res => {
        console.log(res)
        navigation.navigate('Main');
        AsyncStorage.setItem('authToken', res, () => { 
        });
        
      })
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topStyle}>
        <Text style={{ fontFamily: "LibreFranklin-ExtraBold", color: "black", fontSize: 25 }}>Welcome</Text>
        <Text style={{ fontFamily: "LibreFranklin-ExtraBold", color: "#1058F4", fontSize: 35 }}>DANSHOW</Text>
      </View>
      <View style={styles.middleStyle}>
        <Text style={{ color: "#979EAC", fontSize: 15 }}>Email</Text>
        <TextInput value={email} onChangeText={text => setEmail(text)} style={styles.textInput} />
        <Text style={{ color: "#979EAC", fontSize: 15, marginTop: 50 }}>Password</Text>
        <TextInput secureTextEntry={true} value={pass} onChangeText={text => setPass(text)} style={styles.textInput} />
      </View>
      <View style={styles.buttonStyle}>
        <TouchableOpacity style={styles.touchOpa} onPress={signwitheamil}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Log in</Text>
        </TouchableOpacity>
        {/* <Text style={{ textAlign: "center", paddingTop: 15, paddingBottom: 15, color: "#979EAC", fontWeight: 'bold' }}>OR</Text> */}
        {/* <GoogleSigninButton
          style={{ width: 270, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light} /> */}
        <View style={styles.buttonContainer}>
        </View>
      </View>
      <View style={styles.bottomStyle}>
        <TouchableOpacity>
          <Text style={{ color: "#979EAC" }}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={{ padding: 20 }}></View>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{ color: "#1058F4" }}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
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
    fontFamily: "LibreFranklin-ExtraBold",
  },
  middleStyle: {
    marginLeft: 40,
    marginRight: 40,
    justifyContent: 'center',
    marginTop: 100,
  },
  textInput: {
    justifyContent: "center",
    alignItems: "stretch",
    borderBottomColor: "#979EAC",
    borderBottomWidth: 1,
    color: "#000000"
  },
  buttonStyle: {
    margin: 50,
    paddingTop: 20,
  },
  bottomStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
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