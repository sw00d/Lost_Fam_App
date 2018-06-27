import React, { Component } from 'react';
import { Animated, View, Text, Easing, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export class Background extends React.Component {
  state = {
    pics: [require('../../assets/lakeinversion.jpg'),require('../../assets/background.jpg'),require('../../assets/waterfall.jpg'), require('../../assets/sunriselake.jpg')],
    activePic: require('../../assets/lakeinversion.jpg'),
    secondPic: require('../../assets/sunriselake.jpg'),
    fadeAnim: new Animated.Value(0),
    initVal: new Animated.Value(1)
  }

  updatePic(n){
    this.setState({activePic: this.state.pics[n]})
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start(()=> n > this.state.pics.length-2 ? this.reverseUpdate(0) : this.reverseUpdate(n+1));
  }
  reverseUpdate(n){
    this.setState({secondPic: this.state.pics[n]})
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 0,
        duration: 10000,
      }
    ).start(()=> n > this.state.pics.length-2 ? this.updatePic(0) : this.updatePic(n+1));
  }

  componentDidMount(){
    this.updatePic(0);
  }


  render() {
    let { fadeAnim } = this.state;

    return (
      <View style={{flex:1}}>
        <Animated.Image source={this.state.secondPic} style={{width:width,height:height,resizeMode:'cover',position:'absolute', opacity: 1}}  />
        <Animated.Image source={this.state.activePic} style={{width:width, height:height, resizeMode:'cover', opacity:this.state.fadeAnim}}  />
      </View>
    );
  }
}
