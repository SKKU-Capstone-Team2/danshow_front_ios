import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Crew({navigation}){
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
      <View style={styles.searchBox}>
        <Icon name="search-outline" size={20}style={{padding:10, color:'#C4C4C4'}}></Icon>
        <Text style={{marginTop:14, color:'#C4C4C4'}}>Crew Name, Crew Captain Search</Text>
      </View>
      <View style = {styles.contentRow}>
          <Text style = {{padding:10, fontSize:18, fontWeight:'bold', marginRight:100}}>All Crew Views</Text>
          <TouchableOpacity
          onPress={() => navigation.navigate('Create_Crew')}
          style={styles.button}><Text style={{color:'white', fontWeight:'bold'}}>Create Crew</Text></TouchableOpacity>
      </View>
      <View style={styles.crewInforow}>
        <TouchableOpacity style={styles.crewInfo}>
          <Image style={styles.crewImage} source={require("./icon/dickies.png")}></Image>
          <Text style={styles.crewName}>Dickids Crew</Text>
          <Text style={styles.crewIntro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra quam et odio in sit phasellus. Sit phasellus semper condimentum tellus lacus, sit.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.crewInfo}>
          <Image style={styles.crewImage} source={require("./icon/lorem.png")}></Image>
          <Text style={styles.crewName}>Lorem Crew</Text>
          <Text style={styles.crewIntro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra quam et odio in sit phasellus. Sit phasellus semper condimentum tellus lacus, sit.</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.crewInforow}>
      <TouchableOpacity style={styles.crewInfo}
      onPress={() => navigation.navigate('Detail_Crew')}>
          <Image style={styles.crewImage} source={require("./icon/illinaire.png")}></Image>
          <Text style={styles.crewName}>ILLIONAIRE</Text>
          <Text style={styles.crewIntro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra quam et odio in sit phasellus. Sit phasellus semper condimentum tellus lacus, sit.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.crewInfo}>
          <Image style={styles.crewImage} source={require("./icon/salsa.png")}></Image>
          <Text style={styles.crewName}>Salsa Crew</Text>
          <Text style={styles.crewIntro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra quam et odio in sit phasellus. Sit phasellus semper condimentum tellus lacus, sit.</Text>
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
  searchBox: {
    backgroundColor:'#F9F8F8', 
    borderRadius:20, 
    flexDirection:'row',
    width: 300,
    height: 40,
    margin: 20,
  },
  contentRow: {
    flexDirection: 'row',
    margin:10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    backgroundColor: '#1058F4',
    borderRadius: 5,
    elevation: 1,
    marginTop: 10,
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
    margin:10,
    paddingTop: 20,
    justifyContent: 'space-around',
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