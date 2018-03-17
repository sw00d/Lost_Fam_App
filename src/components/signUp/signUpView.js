import React, { Component } from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
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
      <View style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.goBack()}>
              <Text style={styles.btnFont}>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title style={styles.btnFont}>Sign Up</Title>
          </Body>
          <Right>
          </Right>
          </Header>
        <Content style={styles.content}>
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
        </Content>
        <Button style={styles.submitBtn} onPress={this.submit.bind(this)}>
          <Text style={styles.btnFont}>Sign Up</Text>
        </Button>

      </View>
    );
  }
}
