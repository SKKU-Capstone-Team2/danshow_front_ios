import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';

class Signup extends React.Component{
  constructor(props) {
    // const [selectedLanguage, setSelectedLanguage] = useState();
    // const [toggleCheckBox, setToggleCheckBox] = useState(false);
    super(props);
    this.state = {
      member:'',
      toggleCheckBox: false
    };
  }

  updateMemberType = (user) => {
    this.setState({user:user})
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style = {styles.topStyle}>
          <Text style = {{fontFamily:"LibreFranklin-ExtraBold", color:"black", fontSize:25}}>Sign up</Text>
          <Text style = {{fontFamily:"LibreFranklin-ExtraBold", color: "#1058F4", fontSize:35}}>DANSHOW</Text>
        </View>
        <View style = {styles.middleStyle}>
          <Text style = {{color: "#979EAC", fontSize:15}}>Email</Text>
          <TextInput style = {styles.textInput}><Icon name="mail-outline" size={20}></Icon></TextInput>
          <Text style = {{color: "#979EAC", fontSize:15, paddingTop:10}}>Password</Text>
          <TextInput style = {styles.textInput}><Icon name="lock-closed-outline" size={20}></Icon></TextInput>
          <Text style = {{color: "#979EAC", fontSize:15, paddingTop:10}}>Nickname</Text>
          <TextInput style = {styles.textInput}><Icon name="person-outline" size={20}></Icon></TextInput>
          <Text style = {{color: "#979EAC", fontSize:15, paddingTop:10}}>MemberType</Text>
          <View style={{borderWidth: 1, borderColor: '#979EAC'}}>
            <Picker
              selectedValue={this.state.member}
              style={{borderColor:'#979EAC'}}
              onValueChange = {this.updateMemberType}>
              <Picker.Item label="General User" value="user" />
              <Picker.Item label="Dancer" value="dancer" />
            </Picker>
          </View>
          <View style={{flexDirection:'row', paddingTop:10}}>
          <CheckBox
            disabled={false}
            value={this.toggleCheckBox}
            // onValueChange={(newValue) => this.setState(newValue)}
          />
          <Text style = {{color: "#979EAC", fontSize:13, paddingTop:10}}>Do you agree to join the membership?</Text>
          </View>
        </View>
        <View style = {styles.buttonStyle}>
          <Button
            title="Sign up"
            color = "#1058F4"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
      </SafeAreaView>
    );
  };
}

// const Signup = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState();
//   const [toggleCheckBox, setToggleCheckBox] = useState(false);
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style = {styles.topStyle}>
//         <Text style = {{fontFamily:"LibreFranklin-ExtraBold", color:"black", fontSize:25}}>Sign up</Text>
//         <Text style = {{fontFamily:"LibreFranklin-ExtraBold", color: "#1058F4", fontSize:35}}>DANSHOW</Text>
//       </View>
//       <View style = {styles.middleStyle}>
//         <Text style = {{color: "#979EAC", fontSize:15}}>Email</Text>
//         <TextInput style = {styles.textInput}><Icon name="mail-outline" size={20}></Icon></TextInput>
//         <Text style = {{color: "#979EAC", fontSize:15, paddingTop:10}}>Password</Text>
//         <TextInput style = {styles.textInput}><Icon name="lock-closed-outline" size={20}></Icon></TextInput>
//         <Text style = {{color: "#979EAC", fontSize:15, paddingTop:10}}>Nickname</Text>
//         <TextInput style = {styles.textInput}><Icon name="person-outline" size={20}></Icon></TextInput>
//         <Text style = {{color: "#979EAC", fontSize:15, paddingTop:10}}>MemberType</Text>
//         <View style={{borderWidth: 1, borderColor: '#979EAC'}}>
//           <Picker
//             selectedValue={selectedLanguage}
//             style={{borderColor:'#979EAC'}}
//             onValueChange={(itemValue, itemIndex) =>
//               setSelectedLanguage(itemValue)
//             }>
//             <Picker.Item label="General User" value="user" />
//             <Picker.Item label="Dancer" value="dancer" />
//           </Picker>
//         </View>
//         <View style={{flexDirection:'row', paddingTop:10}}>
//         <CheckBox
//           disabled={false}
//           value={toggleCheckBox}
//           onValueChange={(newValue) => setToggleCheckBox(newValue)}
//         />
//         <Text style = {{color: "#979EAC", fontSize:13, paddingTop:10}}>Do you agree to join the membership?</Text>
//         </View>
//       </View>
//       <View style = {styles.buttonStyle}>
//         <Button
//           title="Sign up"
//           color = "#1058F4"
//           onPress={() => this.props.navigation.navigate('Login')}
//         />
//       </View>
//     </SafeAreaView>

//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  topStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    fontFamily:"LibreFranklin-ExtraBold",
  },
  middleStyle: {
    // alignItems: 'center',
    marginLeft:40,
    marginRight:40,
    justifyContent: 'center',
    marginTop: 70,
  },
  textInput: {
    justifyContent: "center",
    alignItems: "stretch",
    borderBottomColor: "#979EAC",
    borderBottomWidth: 1,
  },
  buttonStyle: {
    marginTop: 20,
    marginBottom: 50,
    marginLeft: 50,
    marginRight: 50,
  }
});

export default Signup;