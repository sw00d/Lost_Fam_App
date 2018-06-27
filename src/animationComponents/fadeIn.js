import React, { Component } from 'react';
import { Animated, View, Text, Easing } from 'react-native';


export class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 200,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,       // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export class TextBlink extends React.Component {
  constructor() {
    super();
    this.state = {
      blink: new Animated.Value(0),  // Initial value for opacity: 0
    }

  }

  cycleAnimation(n) {
    Animated.timing(                  // Animate over time
      this.state.blink,            // The animated value to drive
      {
        toValue: n,                   // Animate to opacity: 1 (opaque)
        duration: 1000,
        easing: Easing.back()
      }
    ).start(() => {
      n === 1 ? this.cycleAnimation(0) : this.cycleAnimation(1);
    });                        // Starts the animation
  }
  componentDidMount() {
    this.cycleAnimation(1);
  }

  render() {
    let { blink } = this.state;

    return (
      <Animated.Text                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: blink,       // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.Text>
    );
  }
}
