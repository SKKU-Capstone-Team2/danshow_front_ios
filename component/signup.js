import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';

export default function Signup({ navigation }) {
  const [selectedtype, setSelectedLanguage] = useState();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [nick, setNick] = useState("")

  async function signUp() {
    await fetch("http://3.37.74.8:8080/user/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": email,
        "membership": true,
        "name": "danshow",
        "nickname": nick,
        "password": pass,
        "profile_description": "good",
        "profile_picture": "good"
      }),
    })
    .then(response => response.text())
    .then(res => {
      console.log(res)
      navigation.navigate("Login")
    })
    .catch(err =>  console.log(err))
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topStyle}>
        <Text style={{ fontFamily: "LibreFranklin-ExtraBold", color: "black", fontSize: 25 }}>Sign up</Text>
        <Text style={{ fontFamily: "LibreFranklin-ExtraBold", color: "#1058F4", fontSize: 35 }}>DANSHOW</Text>
      </View>
      <View style={styles.middleStyle}>
        <Text style={{ color: "#979EAC", fontSize: 15 }}>Email</Text>
        <TextInput value={email} onChangeText={text => setEmail(text)} style={styles.textInput} />
        <Text style={{ color: "#979EAC", fontSize: 15, paddingTop: 20 }}>Password</Text>
        <TextInput secureTextEntry={true} value={pass} onChangeText={text => setPass(text)} style={styles.textInput} />
        <Text style={{ color: "#979EAC", fontSize: 15, paddingTop: 20 }}>Nickname</Text>
        <TextInput value={nick} onChangeText={text => setNick(text)} style={styles.textInput} />
        <Text style={{ color: "#979EAC", fontSize: 15, paddingTop: 20 }}>MemberType</Text>
        <View style={{ borderWidth: 1, borderColor: '#979EAC', marginTop: 10 }}>
          <Picker
            style={{ borderColor: '#979EAC', height: 100 }}
            itemStyle={{ height: 100 }}
            selectedValue={selectedtype}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="General User" value="user" />
            <Picker.Item label="Dancer" value="dancer" />
          </Picker>
        </View>
        <View style={{ flexDirection: 'row', paddingTop: 20 }}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            boxType='square'
            style={{ width: 20, height: 20, marginTop: 10, marginRight: 5 }}
            onValueChange={setToggleCheckBox}
          />
          <Text style={{ color: "#979EAC", fontSize: 13, paddingTop: 10 }}>Do you agree to join the membership?</Text>
        </View>
      </View>
      <View style={styles.buttonStyle}>
        <TouchableOpacity style={styles.touchOpa} onPress={signUp}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

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
    marginTop: 70,
  },
  textInput: {
    justifyContent: "center",
    alignItems: "stretch",
    borderBottomColor: "#979EAC",
    borderBottomWidth: 1,
    color: "#000000"
  },
  buttonStyle: {
    marginTop: 30,
    marginBottom: 50,
    marginLeft: 50,
    marginRight: 50,
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