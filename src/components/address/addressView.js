import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Body, Right, Icon, Title } from 'native-base';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'


class RenderField extends Component {
  render() {
    const { meta: { touched, error, active, visited } } = this.props;
      return (
        <View style={!visited ? null : (visited && error) || (error && active) ? styles.hasDanger : styles.success}>
          <Item floatingLabel>
            <Label>{error && touched && !active ? error : this.props.label}</Label>
            <Input
              onFocus={this.props.input.onFocus}
              onBlur={this.props.input.onBlur}
              onChange={this.props.input.onChange}
              keyboardType={this.props.input.name === 'email' ? 'email-address' : 'default' }
              secureTextEntry={this.props.input.name === 'confirmPass' || this.props.input.name === 'password' ? true : false }
            />
          </Item>
        </View>
      );
  }
}

export default class AddressView extends React.Component {
  componentWillMount() {
    const {navigation:{navigate}, token} = this.props;
    if (!token) navigate('titleScreen');
  }

  render() {
    const {navigation:{ navigate, goBack }, token, activeAlbum:{name, pics}} = this.props;

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

        <Content style={styles.content}>
          <Form>
              <Field name="email" label="Email" component={RenderField} />
              <Field name="password" label="Password" component={RenderField} />
          </Form>
        </Content>

      </View>
    );
  }
}
