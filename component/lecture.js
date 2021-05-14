import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Main extends React.Component{
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
        <View style>
            <Text>Cover Channel</Text>
        </View>
        <Button
            title="Log in with Google"
            color = "#9B9A9A"
            onPress={() => this.props.navigation.navigate('Login')}
            />
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    fontFamily:"LibreFranklin-ExtraBold",
  },
});

export default Main;