import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Create_crew({navigation}){
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style = {styles.topHeader}>
              <Image
              style = {{margin: 15, marginRight:90}}
              source={require("./icon/danshow_logo.png")}></Image>
              <Icon name="funnel-outline" size={30} style={{padding:10}}></Icon>
              <Icon name="search-outline" size={30}style={{padding:10}}></Icon>
              <Icon name="notifications-outline" size={30}style={{padding:10}}></Icon>
          </View>
          <View style={styles.crewImageadd}>
              <Text style={{color:'white', fontWeight:'bold', margin:10}}>Crew Image</Text>
              <View style={{justifyContent:'center', alignItems:'center', marginTop:25}}>
                  <Icon color="white" size={30} name="add-circle-outline"></Icon>
              </View>
          </View>
          <View style={styles.middleStyle}>
              <Text style = {{color: "#979EAC", fontSize:15}}>Crew_name</Text>
              <TextInput style = {styles.textInput}></TextInput>
              <View style={{flexDirection:'row', paddingTop:30}}>
                  <View style={{flexDirection:'column', marginRight:50}}>
                      <Text style = {{color: "#979EAC", fontSize:15}}>Crew_title</Text>
                      <TextInput style = {styles.textInput2}></TextInput>
                  </View>
                  <View style={{flexDirection:'column'}}>
                      <Text style = {{color: "#979EAC", fontSize:15}}>Crew_date</Text>
                      <TextInput style = {styles.textInput2}></TextInput>
                  </View>
              </View>
              <View style={{flexDirection:'row', paddingTop:30}}>
                  <View style={{flexDirection:'column', marginRight:50}}>
                      <Text style = {{color: "#979EAC", fontSize:15}}>Crew_organizer</Text>
                      <TextInput style = {styles.textInput2}></TextInput>
                  </View>
                  <View style={{flexDirection:'column'}}>
                      <Text style = {{color: "#979EAC", fontSize:15}}>Crew_fee</Text>
                      <TextInput style = {styles.textInput2}></TextInput>
                  </View>
              </View>
              <Text style = {{color: "#979EAC", fontSize:15, paddingTop:30}}>Crew_organizer_introduction</Text>
              <TextInput style = {styles.textInput}></TextInput>
              <Text style = {{color: "#979EAC", fontSize:15, paddingTop:30}}>Crew_introduction</Text>
              <TextInput style = {styles.textInput}></TextInput>
          </View>
          <View style = {styles.buttonStyle}>
          <TouchableOpacity style={styles.touchOpa} onPress={() => navigation.navigate('Main')}>
            <Text style={{color:'white', fontWeight: 'bold'}}>Create Crew</Text>
          </TouchableOpacity>
                </View>
        </ScrollView>
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