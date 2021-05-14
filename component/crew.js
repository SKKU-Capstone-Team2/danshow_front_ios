import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Crew extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
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
      <View style = {styles.contentRow}>
          <Text style = {{padding:10, fontSize:15, fontWeight:'bold', marginRight:150}}>All Crew Views</Text>
          <TouchableOpacity
          style={styles.button}><Text style={{color:'white', fontWeight:'bold'}}>Create Crew</Text></TouchableOpacity>
      </View>
  </SafeAreaView>
    );
  };
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
  contentInfo: {
      flexDirection: 'row',
      marginLeft: 20,
      marginBottom: 15,
  },
  contentRow: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 98,
    height: 29,
    backgroundColor: '#1058F4',
    borderRadius: 5,
    elevation: 1,
    marginTop: 10,
  }
});

export default Crew;