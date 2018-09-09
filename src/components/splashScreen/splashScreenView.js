import React, { Component } from 'react';
import { Dimensions, Text, View, AsyncStorage } from 'react-native';
import { Container, Header, Content, Spinner } from 'native-base';
import styles from './styles';


const { height, width } = Dimensions.get('window');

export default class SplashScreen extends Component {

  componentDidMount() {
    const {navigation:{navigate}, saveToken} = this.props;
    // navigate('titleScreen');
    AsyncStorage.getItem('id_token').then((token) => {
      if (token){
        console.log('Token Received from storage');
        saveToken(token)
        navigate('library');
      } else navigate('titleScreen');
    }).catch(()=>{
      console.log('no token found in storage. Login');
    });
  }

  componentDidUpdate(){
    const {navigation:{navigate}, token, saveToken} = this.props;

    if (!!token) navigate('mainScreens');
  }

  render(){
    return (
      <View style={styles.container}>
        <Content style={styles.content}>
          <Text style={styles.text}>Loading Lost Fam</Text>
          <Spinner color='#C95656' />
        </Content>
      </View>
    );
  }
}
