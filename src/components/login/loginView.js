import React, { Component } from 'react';
import {TextInput, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
// import { Container, Header, Content, Form, Button, Left, Body, Right, Icon, Title, } from 'native-base';
import {Field, reduxForm} from 'redux-form';
import { canNavToNext } from '../../utils';
import Swipeout from 'react-native-swipeout';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Body, Right, Icon, Title, } from 'native-base';
import {Ionicons} from '@expo/vector-icons';


export default class LoginView extends Component {

  renderField(field) {
    const { meta: { touched, error, active } } = field;
    const className = `${touched && error ? styles.hasDanger : ''}`;
      return (
        <View >
        <Item floatingLabel style={(active || touched) && error ? styles.hasDanger : ''}>
        <Label>{(active || touched) && error ? error : field.label}</Label>
        <Input
        type='text'
        placeholderTextColor='red'
        {...field.input}
        />
        </Item>
        </View>
      );
  }
  submit() {
    const { validate, navigation:{navigate} } = this.props;
    this.props.authenticateUser(validate);
    navigate('titleScreen');
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
            <Title style={styles.title}>Login</Title>
          </Body>
          <Right>
          </Right>
          </Header>
        <Content style={styles.content}>
          <Form>
              <Field name="username" label="Username" component={this.renderField} />
              <Field name="password" label="Password" component={this.renderField} />
          </Form>
          <Button style={styles.submitBtn} onPress={() => this.submit()}>
            <Text style={styles.btnFont}>Login</Text>
          </Button>
        </Content>
      </View>
    );
  }
}
