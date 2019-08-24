import React, { Component } from 'react';

import { StyleSheet, ScrollView,  View, Text, Platform, TouchableOpacity, Linking, PermissionsAndroid } from 'react-native';

import { CameraKitCameraScreen, } from 'react-native-camera-kit';
import {Image} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import firebase, { database } from 'firebase';
import route from '../assets/bus-route.png';

export default class ScanQR extends Component {
  constructor() {

    super();

    this.state = {

      QR_Code_Value: '',

      Start_Scanner: false,

      result: '',

      passengerName: 'surya'

    };
  }

  openLink_in_browser = () => {

    Linking.openURL(this.state.QR_Code_Value);

  }

  onQR_Code_Scan_Done = (QR_Code) => {

    this.setState({ QR_Code_Value: QR_Code });
    this.setState({ result: JSON.parse(QR_Code) });
    this.setState({ Start_Scanner: false });
  }

  open_QR_Code_Scanner=()=> {

    var that = this;

    if (Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA, {
              'title': 'Camera App Permission',
              'message': 'Camera App needs access to your camera '
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {

            that.setState({ QR_Code_Value: '' });
            that.setState({ Start_Scanner: true });
          } else {
            alert("CAMERA permission denied");
          }
        } catch (err) {
          alert("Camera permission err", err);
          console.warn(err);
        }
      }
      requestCameraPermission();
    } else {
      that.setState({ QR_Code_Value: '' });
      that.setState({ Start_Scanner: true });
    }
  }

  componentWillMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyAe0t2aRPZcutEBO7hjXp4rO-T-078QM2o",
      authDomain: "bus-bench.firebaseapp.com",
      databaseURL: "https://bus-bench.firebaseio.com",
      projectId: "bus-bench",
      storageBucket: "bus-bench.appspot.com",
      messagingSenderId: "1003500493080",
      appId: "1:1003500493080:web:f6ac4616aebe0188"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  render() {
    if (!this.state.Start_Scanner) {

      return (
        <View style={styles.MainContainer}>
          {/* <Text style={{ fontSize: 22, textAlign: 'center' }}>React Native Scan QR Code Example</Text> */}

          {/* <Text style={styles.QR_text}>
            {this.state.QR_Code_Value ? 'Scanned QR Code: ' + this.state.QR_Code_Value : ''}
          </Text> */}

          {/* {this.state.QR_Code_Value.includes("http") ?
            <TouchableOpacity
              onPress={this.openLink_in_browser}
              style={styles.button}>
              <Text style={{ color: '#FFF', fontSize: 14 }}>Open Link in default Browser</Text>
            </TouchableOpacity> : null
          } */}

          {this.state.QR_Code_Value.includes("stop") ?
            <Image 
              source={require('../assets/bus-route-1.png')}
              style={{}}
            />
            : null
          }

          {this.state.QR_Code_Value.includes("source") ?
            <View>
              {/* {
                firebase.database().ref().child(`passengers/${this.state.passengerName}`)
                  .update({
                    distance: this.state.result.distance
                  })
              } */}
              <Text>Hooray! {this.state.result.distance} points have been added to your Account!</Text>
              <TouchableOpacity
                onPress={() => Actions.Rate()}
                style={styles.rate}>
                <Text style={{ color: '#FFF', fontSize: 14 }}>
                  Rate your experience
                </Text>
              </TouchableOpacity>              
            </View>
            : null
          }

          <TouchableOpacity
            onPress={this.open_QR_Code_Scanner}
            style={styles.button}>
            <Text style={{ color: '#FFF', fontSize: 14 }}>
              Open QR Scanner
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>

        <CameraKitCameraScreen
          showFrame={true}
          scanBarcode={true}
          laserColor={'#FF3D00'}
          frameColor={'#00C853'}
          colorForScannerFrame={'black'}
          onReadCode={event =>
            this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)
          }
        />

      </View>
    );
  }
}
const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  QR_text: {
    color: '#000',
    fontSize: 19,
    padding: 8,
    marginTop: 12
  },
  button: {
    backgroundColor: '#2979FF',
    alignItems: 'center',
    padding: 12,
    width: 300,
    marginTop: 14
  },
  rate: {
    backgroundColor: '#2979FF',
    alignItems: 'center',
    padding: 12,
    width: 300,
    marginTop: 14
  },
});