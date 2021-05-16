import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView ,TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Detail_crew({navigation}){
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
            <View>
                <Image 
                style={{marginTop:5, width:390,height:180}}
                source={require("./icon/illinairebig.png")}></Image>
                <View style={{margin:15}}>
                    <Text style={{fontWeight:'bold'}}>CEO of Illionaire Records, Dokki's</Text>
                    <Text style={{fontWeight:'bold', fontSize:20}}>ILLIONAIRE</Text>
                    <Text style={{color:'#7B7B7B', marginTop:10}}>HongDae | Every Friday</Text>
                    <Text style={{color:'#7B7B7B', marginTop:5}}>First meet 4.2 (Fri)</Text>
                    <Text style={{margin:10, paddingTop:10, textAlign:'right', color: "#7B7B7B", fontWeight:'bold', fontSize:20, justifyContent:'flex-end'}}>Monthly $80</Text>
                </View>
            </View>
            <View style={{backgroundColor: '#E9E8E8', width:390, height:8}}></View>
            <View style={styles.crewIntro}>
                <Text style={{fontWeight:'bold', fontSize:18, marginBottom:20}}>Crew Intro</Text>
                <Text style={{marginBottom:20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non facilisis sapien sagittis est orci mattis. Commodo a eget interdum risus id nibh. Montes, ac nam sem non dolor, laoreet odio. Bibendum in nunc, odio enim, sed. Mauris erat auctor nisi vitae mi sapien non. Malesuada nunc ultricies nullam nec lobortis natoque. </Text>
                <Text>Laoreet purus duis ut non pharetra id odio cras. Pharetra, mauris nunc, eu etiam. Enim amet, urna quam magna erat nisl aenean. Vel amet augue posuere nisl, senectus. Sed odio imperdiet leo faucibus arcu lobortis. Sagittis gravida vel faucibus nibh enim. Dolor, ac purus arcu mi nisl eros. Diam nunc lorem vestibulum, in pharetra accumsan. Phasellus habitant suspendisse purus vestibulum ut. Et cursus nibh id parturient. </Text>
            </View>
            <View style={{backgroundColor: '#E9E8E8', width:390, height:4}}></View>
            <View style={styles.crewHead}>
                <Text style={{fontWeight:'bold', fontSize:18, marginBottom:20}}>Dokki is...</Text>
                <View style={{alignItems:'flex-end', marginRight:30, marginBottom:20}}>
                    <Image style={{borderRadius:10, alignItems:'flex-end'}} source={require("./icon/dokki.png")}></Image>
                </View>
                <Text>{`- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non facilisis sapien sagittis est orci mattis. 
- Commodo a eget interdum risus id nibh. Montes, ac nam sem non dolor, laoreet odio. 
- Bibendum in nunc, odio enim, sed. Mauris erat auctor nisi vitae mi sapien non. Malesuada nunc ultricies nullam nec lobortis natoque. 
- Laoreet purus duis ut non pharetra id odio cras. 
`}</Text>
            </View>
            <View style={{backgroundColor: '#E9E8E8', width:390, height:4}}></View>
            <View style = {styles.buttonStyle}>
                <TouchableOpacity style={styles.touchOpa} onPress={() => navigation.navigate('Main')}>
                    <Text style={{color:'white', fontWeight: 'bold'}}>Join Crew</Text>
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
  crewIntro: {
      margin:15,
  },
  crewHead: {
      margin:15,
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