import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import YouTube from 'react-native-youtube';

export default function Cover({navigation}) {

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
        <View style = {styles.contents}>
          <YouTube
            videoId="gdZLi9oWNZg"
            apiKey="AIzaSyAq6s_Ni-NBSb6xtYN3Oup5ndKaXoeSSsg" 
            origin="http://www.youtube.com"
            play={false}
            fullscreen={false}
            loop={false}
            onReady={(e) => console.log('onReady')}
            onChangeState={(e) => console.log('onChangeState:', e.state)}
            onChangeQuality={(e) => console.log('onChangeQuality: ', e.quality)}
            onError={(e) => console.log('onError: ', e.error)}
            style={{width: '100%', height: 300}}
            />
            <View style = {styles.contentInfo}>
                <View>
                    <Text style={{fontWeight:'normal', fontSize:15}}>BTS-Dynamite Cover</Text>
                    <Text style={{fontSize:14, color:'#C4C4C4', marginTop:5}}>Views: 14k  Difficulty: 5  Genre: k-pop</Text>
                </View>
                <View style ={{marginLeft:30}}>
                  <Icon name="thumbs-up-outline" size={25}></Icon>
                  <Text>Like</Text>
                </View>
                <View style ={{marginLeft:15}}>
                  <Icon name="thumbs-down-outline" size={25}></Icon>
                  <Text>Dislike</Text>
                </View>
            </View>
        </View>
        <View style = {styles.contents}>
          <View style={styles.contentInfo}>
            <Image style={{borderRadius:10}} source={require("./icon/person1.png")}></Image>
            <Text style={{marginTop:10, marginLeft:10, fontSize:18}}>Masa</Text>
          </View>
        </View>
        <View style={{flexDirection:'row', margin:20}}>
          <Icon name="chatbox-ellipses-outline" size={35}></Icon>
          <Text style={{fontSize:20, marginTop:5, marginLeft:10}}>Comments</Text>
        </View>
        <View style={styles.comment}>
          <View style={styles.commentInfo}>
            <Image style={{borderRadius:10}} source={require("./icon/person2.png")}></Image>
            <Text style={{marginTop:10, marginLeft:20, fontSize:18}}>Goods</Text>
          </View>
        </View>
        <View style={styles.comment}>
          <View style={styles.commentInfo}>
            <Image style={{borderRadius:10}} source={require("./icon/person2.png")}></Image>
            <Text style={{marginTop:10, marginLeft:20, fontSize:18}}>Perfect</Text>
          </View>
        </View>
        <View style = {styles.buttonStyle}>
            <TouchableOpacity style={styles.touchOpa} onPress={() => navigation.navigate('test_page')}>
                <Text style={{color:'white', fontWeight: 'bold'}}>Go to test with your videos</Text>
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
  contents: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1.5,
  },
  comment: {
    margin:15,
    paddingLeft:10,
  },
  commentInfo: {
    flexDirection: 'row',
  },
  contentInfo: {
      flexDirection: 'row',
      marginLeft: 20,
      marginBottom: 15,
      marginTop:10,
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
