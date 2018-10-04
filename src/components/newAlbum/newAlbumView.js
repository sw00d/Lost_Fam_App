import React, { Component } from 'react';
import { Text, Alert, View, TouchableOpacity, TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Body, Right, Icon, Title, Spinner } from 'native-base';
import styles from './styles';
import Swipeout from 'react-native-swipeout';
import { Ionicons } from '@expo/vector-icons';


export default class NewAlbumView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      cap: 7,
      btnDisable: false
    };

    this.timer = null;

  }

  componentWillMount() {
    const {navigation:{navigate}, token} = this.props;
    this.setState({ btnDisable: false });
    if (!token) navigate('titleScreen');
  }

  checkDuplicate(text) {
    const { albums } = this.props;
    if (!albums) return false;
    let nonDup = true;
    albums.forEach(album => {
      if (album.name === text) nonDup = false;
    });
    return nonDup;
  }

  updateCap(e){
    const { cap } = this.state
    const self = this;
    if (e && cap < 36){
      this.setState({cap: cap+1})
    } else if (!e && cap > 7) {
      this.setState({cap: cap-1})
    }
    this.timer = setTimeout(()=>self.updateCap(e), 100);

  }
  stopTimer() {
    clearTimeout(this.timer);
  }

  createAlbum() {
    const { addAlbum, token, navigation: { navigate, state } } = this.props;
    const self = this;
    const { cap, text } = this.state;
    let txt = text;
    if (text[text.length-1] === ' ') {
      txt = txt.substring(0,txt.length-1);
    }
    else if (text[0] === ' ') {
      txt = txt.substring(1 ,txt.length);
    }


    if (txt.length < 2 || !txt.length) Alert.alert("Roll name too short");
    else if (this.checkDuplicate(txt)) {
      this.setState({ btnDisable: true });
      addAlbum(token, txt, cap).then((e)=>{
        if (e) {
          state.params.item();
          navigate('library');
        }
      });
    }
    else Alert.alert('You already have an roll with that name. Try Again.');

  }

  render() {
    const { navigation: { navigate, goBack}} = this.props;
    return(
      <View>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={()=>goBack()}>
              <Ionicons style={styles.backBtn} name="ios-arrow-back" size={32} color="white" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title} >Create Roll</Title>
          </Body>
          <Right></Right>
        </Header>
        <Swipeout style={styles.container}>
          <TextInput
            placeholder="Enter Roll Name"
            onChangeText={ (text) => this.setState({ text }) }
            onFocus={ (text) => this.setState({ text }) }
            value={ (this.state.text.length > 0) ? this.state.text : '' }
            placeholderTextColor='rgba(0,0,0,.2)'
            style={styles.input}
            autoCorrect={true}
          />

          <View style={styles.row2}>
            <View style={styles.column1}>
              <View style={styles.container2}>
                <Text style={styles.h2}>Roll Length</Text>
              </View>
              <Text style={styles.cap}>{ this.state.cap } shots</Text>
            </View>
            <View style={styles.divider}></View>
            <View>
              <TouchableOpacity onPressOut = {()=>this.stopTimer()}onPressIn={()=>{ this.updateCap(true) }}>
                <Ionicons name="ios-arrow-up" size={42} color={ this.state.cap === 36 ? "lightgrey" : "grey"}/>
              </TouchableOpacity>
              <TouchableOpacity onPressOut = {()=>this.stopTimer()}onPressIn={()=>{ this.updateCap(false) }}>
                <Ionicons name="ios-arrow-down" size={42} color={ this.state.cap === 7 ? "lightgrey" : "grey"} />
              </TouchableOpacity>
            </View>
          </View>

          {
            !this.state.btnDisable ?
              <TouchableOpacity style={styles.button} disabled={ this.state.btnDisable } onPress={()=>this.createAlbum()}>
                <Text style={styles.btnText} >Add New Roll</Text>
              </TouchableOpacity> :
              <Content style={styles.spinnerContainer}>
                <Spinner color='#C95656' />
              </Content>
          }

        </Swipeout>
      </View>
    );
  }
}
