import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Test_page({navigation}){
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
      <View 
      style={{backgroundColor: '#C4C4C4', height:500, borderRadius:20, shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,}}>
        <Text style={{margin:20, color:'white', fontWeight:'bold', fontSize:20}}>Record Video</Text>
      </View>
      <View style = {styles.buttonStyle}>
        <TouchableOpacity style={styles.touchOpa} onPress={() => navigation.navigate('tp_detail')}>
            <Text style={{color:'white', fontWeight: 'bold'}}>Compare</Text>
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
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});