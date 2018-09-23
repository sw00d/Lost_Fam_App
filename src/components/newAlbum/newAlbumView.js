import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Body, Right, Icon, Title, } from 'native-base';
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
  componentDidUpdate(){
    const {navigation:{ navigate }, navigation, albumSaved} = this.props;
    if (albumSaved) {
      navigation.state.params.item();
      navigate('library');
    }
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
    this.setState({btnDisable: true});
    const { addAlbum, token, navigation } = this.props;
    const { cap, text } = this.state;
    if (this.checkDuplicate(text)) {
      addAlbum(token, text, cap);
    } else if (text.length < 3){
      alert("Roll name is too short");
    } else alert('You already have an roll with that name. Try Again.');
  }

  render() {
    const { navigation: { navigate, goBack}} = this.props;
    return(
      <View>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={()=>goBack()}>
              <Ionicons name="ios-arrow-back" size={32} color="white" />
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
              <Text style={styles.cap}>{ this.state.cap } days</Text>
            </View>
            <View style={styles.divider}></View>
            <View>
              <TouchableOpacity onPressOut = {()=>this.stopTimer()}onPressIn={()=>{ this.updateCap(true) }}>
                <Ionicons name="ios-arrow-up" size={42} color="grey" />
              </TouchableOpacity>
              <TouchableOpacity onPressOut = {()=>this.stopTimer()}onPressIn={()=>{ this.updateCap(false) }}>
                <Ionicons name="ios-arrow-down" size={42} color="grey" />
              </TouchableOpacity>
            </View>
          </View>


          <TouchableOpacity style={styles.button} disabled={ this.state.btnDisable } onPress={()=>this.createAlbum()}>
            <Text style={styles.btnText} >Add New Roll</Text>
          </TouchableOpacity>
        </Swipeout>
      </View>
    );
  }
}
