import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Body, Right, Icon, Title, } from 'native-base';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default class orderMain extends React.Component {
  componentWillMount() {
    const {navigation:{navigate}, token} = this.props;
    if (!token) navigate('titleScreen');
  }

  render() {
    const {navigation:{ navigate, goBack }, token} = this.props;

    return (
      <View>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={()=>goBack()}>
              <Ionicons name="ios-arrow-back" size={32} color="white" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Order Prints</Title>
          </Body>
          <Right></Right>
        </Header>
      </View>
    );
  }
}
