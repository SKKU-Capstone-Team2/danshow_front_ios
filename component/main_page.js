import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView ,Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export default function Mainpage({navigation, pToken}) {
  let paramData = '';
  const authToken = pToken;
  console.log(authToken);

  useEffect(() => {
    axios.get("http://3.37.74.8:8080/api/v1/videos/main", {
      headers: {
        "X-AUTH-TOKEN": `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJHa2RsQG5hdmVyLmNvbSIsInJvbGUiOiJST0xFX01FTUJFUiIsImlhdCI6MTYyMzE3MjQ0MSwiZXhwIjoxNjIzMTkwNDQxfQ.ngSPaDUkb5SL6p7qD05dsW4AW_NcT69_ZEKEMXLiiys`,
      },
    })
    .then(function (res) {
      paramData = res.data.videoThumbnailList[0];
      // console.log(paramData.id);
      // console.log(paramData.image_url)
    })
  })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <Text>{paramData.id}</Text>
        <Text>{paramData.</Text> */}
        <View style = {styles.topHeader}>
            <Image 
            style = {{margin: 15, marginRight:90}}
            source={require("./icon/danshow_logo.png")}></Image>
            <Icon name="funnel-outline" size={30} style={{padding:10}}></Icon>
            <Icon name="search-outline" size={30}style={{padding:10}}></Icon>
            <Icon name="notifications-outline" size={30}style={{padding:10}}></Icon>
        </View>
        <View style = {styles.contents}>
            <Text style = {{padding:15, fontSize:15, fontWeight:'bold'}}>Cover Channel</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Cover')}>
              <Image source={require("./icon/bts_screen.png")} style={{resizeMode:'cover', width:400, height:180, marginBottom:10}}></Image>
            </TouchableOpacity>
            <View style = {styles.contentInfo}>
                <Image source={require("./icon/person1.png")}></Image>
                <View style={{marginLeft:10}}>
                    <Text style={{fontWeight:'bold', fontSize:15}}>BTS-Dynamite cover</Text>
                    <Text style={{fontSize:12, color:'#C4C4C4', marginTop:5}}>Views: 14k  Difficulty: 5  Genre: k-pop</Text>
                </View>
            </View>
        </View>
        <View style = {styles.contents}>
            <Text style = {{padding:15, paddingLeft:10, fontSize:15, fontWeight:'bold'}}>Lecture Channel</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Lecture')}>
              <Image source={require("./icon/brave_screen.png")} style={{resizeMode:'cover', width:400, height:180, marginBottom:10}}></Image>
            </TouchableOpacity>
            <View style = {styles.contentInfo}>
                <Image source={require("./icon/person2.png")}></Image>
                <View style={{marginLeft:10}}>
                    <Text style={{fontWeight:'bold', fontSize:15}}>BraveGirls-Rollin Lecture Video</Text>
                    <Text style={{fontSize:12, color:'#C4C4C4', marginTop:5}}>Views: 20k  Difficulty: 4  Genre: k-pop</Text>
                </View>
            </View>
            <TouchableOpacity>
              <Image source={require("./icon/twice.jpeg")} style={{resizeMode:'cover', width:400, height:180, marginBottom:10}}></Image>
            </TouchableOpacity>
            <View style = {styles.contentInfo}>
                <Image source={require("./icon/person2.png")}></Image>
                <View style={{marginLeft:10}}>
                    <Text style={{fontWeight:'bold', fontSize:15}}>Twice-CHEER UP Lecture Video</Text>
                    <Text style={{fontSize:12, color:'#C4C4C4', marginTop:5}}>Views: 20k  Difficulty: 4  Genre: k-pop</Text>
                </View>
            </View>
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
  contents: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1.5,
    marginBottom: 10,
  },
  contentInfo: {
      flexDirection: 'row',
      marginLeft: 20,
      marginBottom: 20,
      marginTop:10,
  }
});
