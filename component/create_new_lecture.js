import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Picker} from '@react-native-picker/picker';

export default function Create_new_lecture({navigation}){
    const [selectedtype, setSelectedLanguage] = useState();
    const [selectedbgm, setSelectedBGM] = useState();
  return (
    <SafeAreaView style={styles.container}>
        <View style = {styles.topHeader}>
            <Image 
            style = {{margin: 15, marginRight:90}}
            source={require("./icon/danshow_logo.png")}></Image>
            <Icon name="funnel-outline" size={30} style={{padding:10}}></Icon>
            <Icon name="search-outline" size={30}style={{padding:10}}></Icon>
            <Icon name="notifications-outline" size={30}style={{padding:10}}></Icon>
        </View>
        {/* <View style={{borderWidth:1, borderColor:'#979EAC', width:200, height:50, justifyContent:'center', alignItems:'center'}}>
            <Picker
            style={{borderColor:'#979EAC', height:100}}
            itemStyle={{height:100, width:200}}
            selectedValue={selectedtype}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="General User" value="user" />
            <Picker.Item label="Dancer" value="dacner" />
          </Picker>
        </View> */}
        <View style={styles.crewImageadd}>
            <Text style={{color:'white', fontWeight:'bold', margin:10}}>New Video</Text>
            <View style={{justifyContent:'center', alignItems:'center', marginTop:25}}>
                <Icon color="white" size={30} name="add-circle-outline"></Icon>
            </View>
        </View>
        <View style={styles.middleStyle}>
            <Text style = {{color: "#979EAC", fontSize:15}}>Title</Text>
            <TextInput style = {styles.textInput}></TextInput>
            <View style={{flexDirection:'row', paddingTop:30}}>
                <View style={{flexDirection:'column', marginRight:50}}>
                    <Text style = {{color: "#979EAC", fontSize:15}}>Genre</Text>
                    <TextInput style = {styles.textInput2}></TextInput>
                </View>
                <View style={{flexDirection:'column'}}>
                    <Text style = {{color: "#979EAC", fontSize:15}}>Difficulty</Text>
                    <TextInput style = {styles.textInput2}></TextInput>
                </View>
            </View>
            <Text style = {{color: "#979EAC", fontSize:15, marginTop:30}}>Select BGM</Text>
            <Picker
            style={{borderColor:'#979EAC', height:100}}
            itemStyle={{height:100}}
            selectedValue={selectedbgm}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedBGM(itemValue)
            }>
            <Picker.Item label="Dynamite" value="dynamite" />
            <Picker.Item label="Rollin" value="rollin" />
          </Picker>
        </View>
        <View style = {styles.buttonStyle}>
        <TouchableOpacity style={styles.touchOpa} onPress={() => navigation.navigate('Mypage')}>
          <Text style={{color:'white', fontWeight: 'bold'}}>Create New Video</Text>
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
  topHeader: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomColor: '#9B9A9A',
    borderBottomWidth: 2,
    height:54,
  },
  crewImageadd: {
      width:390,
      height: 150,
      backgroundColor:'#C4C4C4',
      marginTop:15,
      borderRadius:10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
  },
  middleStyle: {
    marginLeft:40,
    marginRight:40,
    justifyContent: 'center',
    marginTop: 50,
  },
  textInput: {
    justifyContent: "center",
    alignItems: "stretch",
    borderBottomColor: "#979EAC",
    borderBottomWidth: 1,
  },
  textInput2: {
    justifyContent: "center",
    alignItems: "stretch",
    borderBottomColor: "#979EAC",
    borderBottomWidth: 1,
    width:130,
  },
  contentRow: {
    flexDirection: 'row',
    margin:10
  },
  buttonStyle: {
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 50,
    marginRight: 50,
  },
  touchOpa: {
    backgroundColor: "#1058F4",
    alignItems: 'center',
    justifyContent: 'center',
    width:300,
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