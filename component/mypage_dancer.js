import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Mypage({navigation}) {

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
            <View style = {styles.userInfo}>
              <View style={{flexDirection:'row'}}>
                <View>
                  <Image style={{borderRadius:20, width:60, height:60}} source={require("./icon/person1.png")}></Image>
                  <Text style={{marginTop:5, marginLeft:5, fontSize:20}}>Masa</Text>
                </View>
                <View style={{flexDirection:'row', marginLeft:50, marginTop:-10}}>
                  <View style={{marginTop:15, marginRight:15}}>
                    <Text style={{fontWeight:'bold', fontSize:13, marginBottom:5}}>User type</Text>
                    <TouchableOpacity style={styles.smallInfo}>
                      <Text style={{fontWeight:'bold', color:"white", fontSize:13}}>Dancer</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{marginRight:10}}>
                    <Text style={{fontWeight:'bold', fontSize:13, marginBottom:5}}>{`Number of 
Subscribe`}</Text>
                    <TouchableOpacity style={styles.smallInfo}>
                      <Text style={{fontWeight:'bold', color:"white", fontSize:13}}>10k</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={{fontWeight:'bold', fontSize:13, marginBottom:5, marginTop:15}}>Main genre</Text>
                    <TouchableOpacity style={styles.smallInfo}>
                      <Text style={{fontWeight:'bold', color:"white", fontSize:13}}>K-pop</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{backgroundColor:'#F3F3F3', width:350, height:90, marginTop:20}}>
                <Text style={{fontWeight:'bold', fontSize:16}}>Intro</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non facilisis sapien sagittis est orci mattis. Commodo a eget interdum risus id nibh. Montes, ac nam sem non dolor, l</Text>
              </View>
              <TouchableOpacity style={styles.touchOpa}>
                <Text style={{color:'white', fontWeight: 'bold'}}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'#E9E8E8', height:2}}></View>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20, marginLeft:20, marginRight:20, marginBottom:10}}>
                <Text style={{fontWeight:'bold', fontSize:15}}>Video management</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cnl')} style={styles.middleInfo}>
                    <Text style={{fontWeight:'bold', color:"white", fontSize:10}}>Create New Video</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'#E9E8E8', height:1}}></View>
            <View style={{flexDirection:'row', marginTop:5, marginRight:20, justifyContent:'flex-end'}}>
                <Text style={{fontSize:11}}>Date            </Text>
                <Text style={{fontSize:11}}>View            </Text>
                <Text style={{fontSize:11}}>Like  </Text>
            </View>
            <View style={{margin:10, flexDirection:'row'}}>
                <Image 
                style={{width:60, height:50, borderRadius:8}}
                source={require("./icon/bts_screen.png")}></Image>
                <Text style={{fontSize:10, margin:20}}>BTS-Dynamite Cover</Text>
                <Text style={{fontSize:8, marginTop:20, marginRight:30}}>2021.3.15</Text>
                <Text style={{fontSize:8, marginTop:20, marginRight:30}}>100,000</Text>
                <Text style={{fontSize:8, marginTop:20}}>10,000</Text>
            </View>
            <View style={{margin:10, flexDirection:'row'}}>
                <Image 
                style={{width:60, height:50, borderRadius:8}}
                source={require("./icon/brave_screen.png")}></Image>
                <Text style={{fontSize:10, margin:20, width:100}}>BraveGirls - Rollin Lecture Video</Text>
                <Text style={{fontSize:8, marginTop:20, marginRight:30}}>2021.3.15</Text>
                <Text style={{fontSize:8, marginTop:20, marginRight:30}}>100,000</Text>
                <Text style={{fontSize:8, marginTop:20}}>10,000</Text>
            </View>
            <View style={{backgroundColor:'#E9E8E8', height:2}}></View>
            <View style={{margin:20}}>
              <Text style={{fontWeight:'bold', fontSize:15}}>Uploaded video</Text>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{marginTop:20, width:110}}>
                  <Image 
                  style={{width:90, height:70, borderRadius:8}}
                  source={require("./icon/brave_screen.png")}></Image>
                  <Text style={{fontSize:12}}>BraveGirls - Rollin Lecture Video</Text>
                </View>
                <View style={{marginTop:20, width:110}}>
                  <Image 
                  style={{width:90, height:70, borderRadius:8}}
                  source={require("./icon/bts_screen.png")}></Image>
                  <Text style={{fontSize:12}}>BTS-Dynamite Cover</Text>
                </View>
                <View style={{marginTop:20, width:110}}>
                  <Image 
                  style={{width:90, height:70, borderRadius:8}}
                  source={require("./icon/dancingman.png")}></Image>
                  <Text style={{fontSize:12}}>BTS-Dynamite Cover</Text>
                </View>
              </View>
            </View>
            <View style={{backgroundColor:'#E9E8E8', height:2}}></View>
            <View style={{margin:20}}>
              <Text style={{fontWeight:'bold', fontSize:15}}>Made Crew</Text>
              <View style={styles.crewInforow}>
                <TouchableOpacity style={styles.crewInfo}>
                  <Image style={styles.crewImage} source={require("./icon/lorem.png")}></Image>
                  <Text style={styles.crewName}>Lorem Crew</Text>
                  <Text style={styles.crewIntro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra quam et odio in sit phasellus. Sit phasellus semper condimentum tellus lacus, sit.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.crewInfo}>
                  <Image style={styles.crewImage} source={require("./icon/salsa.png")}></Image>
                  <Text style={styles.crewName}>Salsa Crew</Text>
                  <Text style={styles.crewIntro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra quam et odio in sit phasellus. Sit phasellus semper condimentum tellus lacus, sit.</Text>
                </TouchableOpacity>
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
    userInfo: {
      margin:20
    },
    smallInfo: {
      backgroundColor: "#1058F4",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:10,
      width:60,
      height: 35,
      color: '#FFFFFF',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    middleInfo: {
        backgroundColor: "#1058F4",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
        width:100,
        height: 25,
        color: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    touchOpa: {
      marginTop:20,
      backgroundColor: "#1058F4",
      alignItems: 'center',
      justifyContent: 'center',
      width:350,
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
    },
    crewInforow: {
      flexDirection: 'row',
      paddingTop: 20,
      justifyContent: 'space-between',
    },
    crewImage: {
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      width:158,
    },
    crewName: {
      fontWeight:'bold',
      fontSize: 15,
      margin: 5,
      paddingTop:5,
    },
    crewIntro: {
      margin: 5,
      paddingTop: 5,
      fontSize: 10,
    },
    crewInfo: {
      backgroundColor:'white',
      width: 160,
      height: 200,
      borderRadius: 10,
      borderColor: '#DCDCDC',
      borderWidth: 2,
    }
  });
