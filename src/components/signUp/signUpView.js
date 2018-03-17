import React, { Component } from 'react';
import {ScrollView, Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage} from 'react-native';
import styles from './styles';
import { Container, Header, Content, Form, Button, Left, Body, Right, Icon, Title, } from 'native-base';
import { renderField } from './renderField';
import {Field} from 'redux-form';
import { canNavToNext } from '../../utils';


export default class SignUpView extends Component {

  submit() {
    const { register, validate } = this.props;
    if (!register) return;
    if (!canNavToNext(register, validate)) return;
    this.props.createUser(register);
  }

  render() {
    return (
      <Container style={styles.container}>
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
              <Field name="fullName" label="Full Name" component={renderField} />
              <Field name="email" label={"Email"} component={renderField} />
              <Field name="username" label={"Username"} component={renderField} />
              <Field name="password" label={"Password"} component={renderField} />
              <Field name="confirmPass" label={"Confirm Password"} component={renderField} />
          </Form>
          <Button style={styles.submitBtn} onPress={() => this.submit()}>
            <Text style={styles.btnFont}>Sign Up</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
