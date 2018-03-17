import React, { Component } from 'react';
import {ScrollView, Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage} from 'react-native';
import styles from './styles';
import Swipeout from 'react-native-swipeout';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Body, Right, Icon, Title, } from 'native-base';



export default class FloatingLabelExample extends Component {
  checkEmail() {
    console.log('checkEmail')
  }
  submit() {
    console.log('submit')
  }
  render() {
    return (
      <Swipeout style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate.goBack()}>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
          </Right>
          </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Create a Password</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Confirm Password</Label>
              <Input />
            </Item>
          </Form>
          <Button style={styles.submitBtn} onPress={this.submit.bind(this)}>
            <Text style={styles.btnFont}>Sign Up</Text>
          </Button>
        </Content>
      </Swipeout>
    );
  }
}
