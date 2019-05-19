import React, { Component } from 'react';
import { Dimensions, Text, View, AsyncStorage } from 'react-native';
import { Container, Header, Content, Spinner } from 'native-base';
import styles from './styles';



export default class SplashScreen extends Component {
  constructor(){
    super();
    this.state = {
      token: false
    }
  }
  componentDidMount() {
    const {navigation:{navigate}, saveToken} = this.props;
    AsyncStorage.getItem('id_token').then((token) => {
      if (token){
        saveToken(token)
        console.log(token);
        navigate('library');
      } else navigate('titleScreen');
    }).catch(()=>{
      Alert.alert('no token found in storage. Login Please');
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
