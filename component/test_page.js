import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { RNCamera } from "react-native-camera"
import AWS from "aws-sdk"
import Sound from "react-native-sound"

AWS.config.update({
    accessKeyId: 'AKIAYPG3AAD4GNGD555B',
    secretAccessKey: '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'
})

const myBucket = new AWS.S3({
    params: { Bucket: "nanuda-product-image"},
    region: "ap-northeast-2",
})

// const access = new Credentials({
//   accessKeyId: 'AKIAYXZAHY2OUUO4ZEWS',
//   secretAccessKey: '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',
// });

// const s3 = new S3({
//   credentials: access,
//   region: 'ap-northeast-2', //"us-west-2"
//   signatureVersion: "v4",
// });

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
  const uploadVideo = async (file) => {
    let res = await camera.save()
    let path = res.uri
    console.log(path)
  
    // fs.readFile(file, 'base64', function (err, data) {
    //   if (err) {
    //     console.log('fs error', err);
    //   } else {
    //     console.log("data : ", data)
    //     var params = {
    //       ACL: 'public-read',
    //       Bucket: "nanuda-product-image",
    //       Key: 'danshow.mp4',
    //       Body: data,
    //       ContentEncoding: 'base64',
    //       ContentType: 'video/mp4'
    //     };
  
    //     myBucket.putObject(params)
    //       .on('httpUploadProgress', (evt) => {
    //       })
    //       .send((err) => {
    //         if (err) console.log(err)
    //       })
    //   }
    // });
  
  
    // var putObjectPromise = myBucket.putObject(params).promise();
  
    // putObjectPromise.then(function(data) {
    //   console.log("Successfully uploaded data to " + params.Bucket + "/" + params.Key);
    // }).catch(commons.handleError);
  
    // const base64 = await fs.readFile(file, 'base64')
    // const contentType = mime.lookup(file)
    // const fileName = file.name || String(Date.now())
    // const contentDeposition = 'inline;filename="' + fileName + '"'
    // const arrayBuffer = Base64Binary.decode(base64)
  
    // s3Bucket.createBucket(() => {
    //   const params = {
    //     Bucket: "nanuda-product-image",
    //     Key: fileName,
    //     Body: arrayBuffer,
    //     ContentDeposition: contentDeposition,
    //     ContentType: contentType,
    //   }
    //   s3Bucket.upload(params)
    // }).then(res => console.log(res))
    // .catch(err => console.log(err))
  }
  var sound;

  const Submit = async () => {
    sound = new Sound('https://elasticbeanstalk-ap-northeast-2-600826168989.s3.ap-northeast-2.amazonaws.com/audio/fire_audio_abc.mp3', Sound.setCategory("Playback"), (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());

      // Play the sound with an onEnd callback
      sound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
    const { uri } = await camera.current.recordAsync()
    const data = new FormData()
    data.append("videoFile", {
      name: "danshow.mp4", type: 'video/mp4', uri: uri,
    })
    console.log(uri)
    // try {
    //   RNFS.readFile(uri, 'base64')
    //     .then(file => {
    //       console.log(file)
    //       var param = {
    //         ACL: 'public-read',
    //         Bucket: "nanuda-product-image",
    //         Key: "danshow.mp4",
    //         Body: file,
    //         ContentType: 'multipart/form-data'
    //       };
    //       myBucket.putObject(param)
    //         .on("httpUploadProgress")
    //         .send(err => console.log(err))
    //     })
    //     .catch(err => console.log(err));

    // } catch (e) {
    //   console.log(e)
    // }
  }

  const Stop = () => {
    camera.current.stopRecording();
    sound.pause()
    // navigation.navigate('tp_detail')
  }

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
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity onPress={Submit} style={{
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