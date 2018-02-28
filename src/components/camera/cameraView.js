import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Camera, Permissions } from 'expo';


export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: true,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    console.log("pomc")
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    // this.setState({ hasCameraPermission: status === 'granted' });
  }

  typeConfig() {
    console.log('dumpshit')

  }

  render() {
    const { hasCameraPermission } = this.state;
    const type = this.state.type;
    const {height, width} = Dimensions.get('window');


    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else if (hasCameraPermission === true){
      return (
        <View>
          <View style={styles.topBanner}></View>
          <Camera style={{ width: width, height: height }} type= { type }>
          <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                 this.setState({
                   type: this.state.type === Camera.Constants.Type.back
                     ? Camera.Constants.Type.front
                     : Camera.Constants.Type.back,
                 });
              }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </View>
          </View>
          </Camera>
          <View style={styles.bottomBanner}></View>
        </View>
      );
    }
  }
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({

  topBanner: {
    height: height/6,
    width: width,
    backgroundColor: '#E9C28B',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
  },
  bottomBanner: {
    position: 'absolute',
    bottom: 0,
    height: height/6,
    width: width,
    backgroundColor: '#E9C28B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
