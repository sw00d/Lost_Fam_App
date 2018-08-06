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
      cap: 7
    };
    this.timer = null;

  }

  componentWillMount() {
    const {navigation:{navigate}, token} = this.props;
    if (!token) navigate('titleScreen');
  }
  componentDidUpdate(){
    const {navigation:{ navigate }} = this.props;
    if (this.props.albumSaved) navigate('library');
  }

  checkDuplicate(text) {
    const { albums } = this.props;
    if (text.length < 3 || !albums) return false;
    let nonDup = true;
    albums.forEach(album => {
      if (album.name === text) nonDup = false;
    });
    return nonDup;
  }

  updateCap(e){
    const { cap } = this.state
    const self = this;
    if (e && cap < 32){
      this.setState({cap: cap+1})
    } else if (!e && cap >= 1) {
      this.setState({cap: cap-1})
    }
    this.timer = setTimeout(()=>self.updateCap(e), 100);

  }
  stopTimer() {
    clearTimeout(this.timer);
  }

  createAlbum() {
    const { addAlbum, token, navigation: { navigate } } = this.props;
    const { cap, text } = this.state;
    if (this.checkDuplicate(text)) {
      // addAlbum(token, text, cap).then();
      addAlbum(token, text, cap)
    } else alert('You already have an roll with that name. Try Again.')
  }

  static navigationOptions = {
    title: 'New Roll',
  };

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
            <Title style={styles.title} >New Album</Title>
          </Body>
          <Right>
            <TouchableOpacity>
              <Ionicons name="ios-add-circle-outline" size={32} color="white"  onPress={ () => navigate('newAlbum') } />
            </TouchableOpacity>
          </Right>
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


          <Button block style={styles.button} onPress={()=>this.createAlbum()}>
            <Text style={styles.btnText} >Add New Album</Text>
          </Button>
        </Swipeout>
      </View>
    );
  }
}
