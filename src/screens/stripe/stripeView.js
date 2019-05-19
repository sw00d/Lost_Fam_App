import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Body, Right, Icon, Title } from 'native-base';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';


export default class Stripe extends Component {
  componentDidMount() {
  }

  addCard(){
    const num = 1234567812345678;
    const month = 3;
    const year = 21;
    const ccv = 111;
    this.props.createCardToken(num, month, year, ccv);
  }

  render() {
    return(
      <View>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={()=>goBack()}>
              <Ionicons name="ios-arrow-back" size={32} color="white" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Stripe</Title>
          </Body>
          <Right></Right>
        </Header>

        <TouchableOpacity activeOpacity={.5} style={styles.row} onPress={()=>this.addCard()}>
          <Text style={styles.section}>Add Card</Text>
          <Text style={styles.detail}>Click Me</Text>
        </TouchableOpacity>
       </View>
     )

  }
}
