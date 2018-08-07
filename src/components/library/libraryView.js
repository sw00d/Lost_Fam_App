import React, { Component } from 'react';
import { RefreshControl, ScrollView, Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';
import Swipeout from 'react-native-swipeout';
import { canNavToNext } from '../../utils';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Body, Right, Icon, Title, } from 'native-base';

export default class LibraryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAlb: '',
      refreshing: false
    }
  }
  componentDidMount(){
    this.onRefresh();
  }

  componentWillMount() {
    this.onRefresh();
    // if (!token) navigate('titleScreen');
  }

  onRefresh = () => {
    const self = this;
    this.setState({refreshing: true});
    const { token, getAlbums } = this.props;
    setTimeout(()=>self.setState({refreshing: false}),1000)
    getAlbums(token)
  }


  updateActiveAlbum(idx) {
    const { navigation: { navigate }, activeAlbum, albums } = this.props;
    activeAlbum(idx);
    if (albums[idx].pics.length < albums[idx].capacity) navigate('camera');
    else navigate('finishedAlbum');
  }

  deleteAndUpdate() {
    const { token } = this.props;
    const { selectedAlb } = this.state;
    this.props.deleteAlbum(token, selectedAlb);
    this.forceUpdate();

  }

  render() {
    const { navigation: { navigate }, albums } = this.props;

    const self = this;
    const swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'transparent',
      onPress: () => this.deleteAndUpdate()
    }];
    return(
      <View style={styles.container}>
        <Header style={styles.header}>
          <Left>
          <TouchableOpacity size={32} onPress={ () => navigate('settings') } underlayColor='white'>
            <Ionicons name="ios-settings-outline" size={32} color="white" />
          </TouchableOpacity>
          </Left>
          <Body>
            <View style={styles.directions}>
              <Text style={styles.title}>Select Roll</Text>
            </View>
          </Body>
          <Right>
            <TouchableOpacity>
              <Ionicons name="ios-add-circle-outline" size={32} color="white"  onPress={ () => navigate('newAlbum') } />
            </TouchableOpacity>
          </Right>
        </Header>
        <ScrollView
          showsVerticalScrollIndicator={true}
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
        >
          { (albums) ?
              albums.map((album, i) => {
                const { capacity, name, pics } = album;
                return(
                  <Swipeout onOpen={() => this.setState({selectedAlb: i})} style={styles.swipeCont} right={swipeBtns} autoClose={true} key={name}>
                    <TouchableOpacity activeOpacity={.1} style={styles.row} onPress={ () => this.updateActiveAlbum(i) }>
                      <Text style={styles.albText}>{ name }</Text>
                      <Text style={styles.albText}>{ `${pics.length} / ${capacity}` }</Text>
                    </TouchableOpacity>
                  </Swipeout>
                )
              })
             : null
          }
        </ScrollView>
      </View>
    );
  }
}
