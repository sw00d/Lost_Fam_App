import React, { Component } from 'react';
import { Dimensions, TextInput, ScrollView, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import {Field, reduxForm} from 'redux-form';
import { canNavToNext } from '../../utils';
import Swipeout from 'react-native-swipeout';
import { InputGroup, Container, Header, Content, Form, Item, Input, Label, Button, Left, Body, Right, Icon, Title, } from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import { BlurView } from 'expo';
const { height, width } = Dimensions.get('window');

class RenderField extends Component {


  render() {
    const { refName, meta: { touched, error, active, visited }, input: { value, name, onFocus, onChange} } = this.props;
    const display = (!error && name === 'confirmPass') ? 'submitBtn' : 'btnHidden';
      return (
        <View>
          <KeyboardAvoidingView style={!visited ? null : (visited && error) || (error && active) ? styles.hasDanger : styles.success}>
            <Item floatingLabel>
              <Label>{error && active ? error : this.props.label}</Label>
              <Input
                autoCorrect={false}
                ref={refName}
                value={value}
                style={{color: 'black'}}
                onFocus={onFocus}
                onChange={onChange}
                keyboardType={name === 'email' ? 'email-address' : 'default' }
                secureTextEntry={name === 'confirmPass' || name === 'password' ? true : false }
              />
            </Item>
          </KeyboardAvoidingView>
        </View>
      );
      // <Button style={styles[display]} onPress={() => this.submit()}>
      //   <Text style={styles.btnFont}>Sign Up</Text>
      // </Button>
  }
};


export default class SignUpView extends Component {
  submit() {
    const { validate, navigation:{navigate}, createUser } = this.props;
    createUser(validate);
    navigate('titleScreen');
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Header style={styles.header}>
            <Left>
              <Button transparent onPress={()=>this.props.navigation.goBack()}>
                <Ionicons name="ios-arrow-back" size={32} color="white" />
              </Button>
            </Left>
            <Body>
              <Title style={styles.title}>Sign Up</Title>
            </Body>
            <Right>
            </Right>
            </Header>
          <Content style={styles.content}>
            <Form>
              <Field
                component={RenderField}
                name="name"
                type="text"
                label="Your Name"
                refName={(c) => this.nameRef = c}
                refName='pomc'
                withRef
              />
              <Field
                name="email"
                label="Email"
                component={RenderField}
              />
              <Field
                name="username"
                label="Username"
                component={RenderField} />
              <Field
                name="password"
                label="Password"
                component={RenderField} />
              <Field
                name="confirmPass"
                label="Confirm Password"
                component={RenderField} />
            </Form>
          </Content>
          <Button style={styles.submitBtn} onPress={() => this.submit()}>
            <Text style={styles.btnFont}>Sign Up</Text>
          </Button>
        </View>
      </View>
    );
  }
}
// < SubmitButton />
