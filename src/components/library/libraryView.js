import React, { Component } from 'react';
import { Image, RefreshControl, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';
import { canNavToNext } from '../../utils';
import { SwipeRow, Header, Content, Form, Item, Input, Label, Button, Left, Body, Right, Icon, Title, } from 'native-base';

export default class LibraryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      btnDisable: false
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
    const { token, getAlbums } = this.props;
    const self = this;
    this.setState({refreshing: true});
    this.setState({btnDisable: false});
    setTimeout(()=>self.setState({refreshing: false}),1000)
    getAlbums(token);
  }


  updateActiveAlbum(idx) {
    const { navigation: { navigate }, activeAlbum, albums } = this.props;
    activeAlbum(idx);
    if (albums[idx].pics.length < albums[idx].capacity) navigate('camera', {item: ()=>this.onRefresh()});
    else navigate('finishedAlbum');
  }

  deleteAndUpdate(idx) {
    const { token, deleteAlbum } = this.props;
    this.setState({ btnDisable: true }, ()=>{
      deleteAlbum(token, idx).then(()=>{
        this.onRefresh();
      });
    });

  }

  render() {
    const { navigation: { navigate }, albums } = this.props;
    const self = this;
    return(
      <View style={styles.container}>
        <Header style={ styles.header }>
          <Left>
            <TouchableOpacity onPress={ () => navigate('settings') } >
              <Ionicons name="ios-settings-outline"size={32} color="white" />
            </TouchableOpacity>
          </Left>
          <Body style={styles.directions}>
            <Text style={styles.title}>Select Roll</Text>
          </Body>
          <Right>
            <TouchableOpacity  disabled={ this.state.refreshing } onPress={ () => navigate('newAlbum', {item: ()=>this.onRefresh()}) }>
              <Ionicons name="ios-add-circle-outline" size={32} color="white" />
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
          { (albums.length > 0) ?
              albums.map((album, i) => {
                const { capacity, name, pics } = album;
                return(
                  <SwipeRow
                    rightOpenValue={-75}
                    disableRightSwipe={true}
                    style={styles.swipeCont}
                    right={
                      <Button disabled={ this.state.btnDisable } danger onPress={() => this.deleteAndUpdate(i)}>
                        <Ionicons name="ios-trash-outline" size={32} color="white"/>
                      </Button>
                    }
                    autoClose={true}
                    key={name}
                    body={

                      <TouchableOpacity disabled={ this.state.refreshing } activeOpacity={.1} style={styles.row} onPress={ () => this.updateActiveAlbum(i) }>
                        <Text style={styles.albText}>{ name }</Text>
                        {
                          pics.length < capacity ?
                          <Text style={styles.albText}>{ `${pics.length} / ${capacity}` }</Text> :
                          <Image
                          style={styles.pic}
                          key={i}
                          source={{uri: pics[0].uri}}
                          />
                        }
                      </TouchableOpacity>
                    }
                  >
                  </SwipeRow>
                )
              })
             :
             <TouchableOpacity activeOpacity={.1} style={styles.refreshBtn} onPress={ () => this.onRefresh()}>
               <Text style={styles.refreshTxt}>Refresh</Text>
               <Ionicons name="ios-refresh" size={ 40 } color="gainsboro"/>
             </TouchableOpacity>
          }
        </ScrollView>
      </View>
    );
  }
}
