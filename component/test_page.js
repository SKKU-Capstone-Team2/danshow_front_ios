import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { RNCamera } from "react-native-camera"
import AWS from "aws-sdk"
import Sound from "react-native-sound"
import AsyncStorage from '@react-native-community/async-storage';
import * as RNFS from 'react-native-fs';

AWS.config.update({
  accessKeyId: 'AKIAYPG3AAD4GNGD555B',
  secretAccessKey: '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'
})

const myBucket = new AWS.S3({
  params: { Bucket: "nanuda-product-image" },
  region: "ap-northeast-2",
})

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

export default function Test_page({ navigation }) {
  const camera = useRef(null);
  console.log(RNFS.DocumentDirectoryPath)

  const [start, setStart] = useState(false)
  const [sound, setSound] = useState(new Sound('https://elasticbeanstalk-ap-northeast-2-600826168989.s3.ap-northeast-2.amazonaws.com/audio/58e333c3-c766-4691-b6a8-817c3a0f52d0-KakaoTalk_20210610_045252320_audio.mp3', Sound.MAIN_BUNDLE));
  
  const [submitStart, setSubmitStart] = useState(false)
  const Submit = async () => {
    setSubmitStart(true)
    setStart(false)
    var path = RNFS.DocumentDirectoryPath + '/test.json';
    RNFS.writeFile(path, `{"title" : "hojun test video!!",
      "description" : "haha",
      "userId" : "lol",
      "difficulty" : "123",
      "genre" : "pop",
      "gender" : "male",
      "length" : "120",
      "score" : "90",
      "postType" : "TEST"
      }`, 'utf8')
      .then((success) => {
        console.log('FILE WRITTEN!');
      })
      .catch((err) => {
        console.log(err.message);
      });
    sound.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
    const { uri } = await camera.current.recordAsync()

    try {
      const data = new FormData()
      data.append("video", {
        name: "danshow.mp4",
        type: 'video/mp4',
        uri: uri
      })
      data.append("post", {
        name: "test.json",
        type: "application/json",
        uri: 'file://' + path
      })
      console.log(uri)
      AsyncStorage.getItem('authToken', async (err, result) => {
        const authToken = result;
        console.log(authToken)
        await fetch("http://3.37.74.8:8080/api/v1/file", {
          method: "POST",
          headers: {
            'X-AUTH-TOKEN': `${authToken}`,
            // 'Content-Type': 'multipart/form-data',
          },
          body: data,
        })
          .then(res => {
            console.log(res)
            res.json()
          })
          .then(res => console.log(res))
          .catch(err => console.log(err))
      })
      // })
      // .catch(err => console.log(err))
    } catch (err) {
      console.log(err)
    }
  }

  const Stop = () => {
    sound.pause()
    camera.current.stopRecording();
    navigation.navigate('tp_detail')
  }

  useEffect(() => {
    if (submitStart) {
      setTimeout(() => {
        Stop()
      }, 14000)
    }
  }, [submitStart])

  return (
    <SafeAreaView style={styles.container}>
      <RNCamera
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end"
        }}
        ref={camera}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      >
        {({ camera, status, recordAudioPermissionStatus }) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View style={{
              flex: 1
            }}>
              {start ?
                <View style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <Text style={{
                    fontSize: 36,
                    color: "#1058F4",
                    fontWeight: "bold"
                  }}>5초 뒤 시작됩니다.</Text>
                </View>
                :
                <View style={{ flex: 1 }}></View>
              }
              <View style={{ flex: 0, display: "flex", flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => {
                  setStart(true)
                  setTimeout(() => {
                    Submit()
                  }, 5000)
                }} style={{
                  width: 150,
                  backgroundColor: '#1058F4',
                  borderRadius: 5,
                  padding: 15,
                  paddingHorizontal: 20,
                  alignSelf: 'center',
                  margin: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: "bold" }}> Start </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Stop} style={{
                  width: 150,
                  backgroundColor: '#1058F4',
                  borderRadius: 5,
                  padding: 15,
                  paddingHorizontal: 20,
                  alignSelf: 'center',
                  margin: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: "bold" }}> End </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </RNCamera>
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
    height: 54,
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
    width: 300,
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