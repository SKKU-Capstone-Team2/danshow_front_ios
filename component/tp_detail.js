import React, {useRef, useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default function Tp_detail({navigation}) {

  const [paramvideoData, setparamvideoData] = useState({filePath:'', score:0, title:''});
  const videoRef = useRef(null);

  const getvideoInfo = () => {
    AsyncStorage.getItem('authToken', (err, result) => {
      const authToken = result;
      axios.get("http://3.37.74.8:8080/api/v1/videos/test", {
        headers: {
          "X-AUTH-TOKEN": `${authToken}`,
        },
      })
      .then(function (res) {
        setparamvideoData(res.data[0]);
      })          
   });
  }

  useEffect(() => {
    getvideoInfo();
  }, [])

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
        
        <Text>{paramvideoData.filePath}</Text>
        <Video
        source={{ uri: paramvideoData.filePath }}
        style={{ width: 400, height: 300 }}
        // https://elasticbeanstalk-ap-northeast-2-600826168989.s3.ap-northeast-2.amazonaws.com/video/78375756-ac3e-4184-9423-34673890a4ed-%5BCHOREOGRAPHY%5D%20BTS%20%28FIRE%29%27%20Dance%20Practice.mp4
        controls={true}
        ref={videoRef} />
        <View style={{backgroundColor: '#E9E8E8', width:390, height:4, marginTop:20}}></View>
        <View style={{marginLeft:20, marginRight:20, marginTop:20}}>
          <Text style={{fontWeight:'bold', fontSize:15}}>Test Result</Text>
          <View style={{flexDirection:'row', marginTop:20}}>
            <Image 
            style={{width:130, height:130}}
            source={require("./icon/circle.png")}></Image>
            <View style={{margin:20}}>
              <Text style={{fontWeight:'bold', fontSize:30, marginBottom:10}}>Score: {paramvideoData.score}</Text>
              <Text style={{fontWeight:'bold', fontSize:20, marginBottom:10}}>It looks like a dancer!</Text>
              <Text style={{fontWeight:'bold', fontSize:25, marginBottom:10, color:'#1058F4', textAlign:'center'}}>135th place</Text>
              <TouchableOpacity style={styles.touchOpa}>
                <Text style={{color:'white', fontWeight: 'bold', fontSize:12}}>Rechallenge?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: '#E9E8E8', width:390, height:4, marginTop:20}}></View>
        {/* <View style={{margin:20}}>
          <Text style={{fontWeight:'bold', fontSize:15}}>Wrong Result</Text>
          <View style={{marginTop:30, backgroundColor: '#C4C4C4', width:350, height:150}}></View>
        </View> */}
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
  resultImageadd: {
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
  touchOpa: {
    backgroundColor: "#1058F4",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5,
    width:200,
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
  }
});