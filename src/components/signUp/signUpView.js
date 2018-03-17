import React, { Component } from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import { Container, Header, Content, Form, Button, Left, Body, Right, Icon, Title, } from 'native-base';
import { renderField } from './renderField';
import {Field} from 'redux-form';
import { canNavToNext } from '../../utils';
import Swipeout from 'react-native-swipeout';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Body, Right, Icon, Title, } from 'native-base';


export default class SignUpView extends Component {

  submit() {
    const { register, validate } = this.props;
    if (!register) return;
    if (!canNavToNext(register, validate)) return;
    this.props.createUser(register);
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
              <Field name="fullName" label="Full Name" component={renderField} />
              <Field name="email" label={"Email"} component={renderField} />
              <Field name="username" label={"Username"} component={renderField} />
              <Field name="password" label={"Password"} component={renderField} />
              <Field name="confirmPass" label={"Confirm Password"} component={renderField} />
          </Form>
<<<<<<< HEAD
          <Button style={styles.submitBtn} onPress={() => this.submit()}>
            <Text style={styles.btnFont}>Sign Up</Text>
          </Button>
=======
>>>>>>> e81887cad274fd16c6f3d9c48afc42e91c29e91d
        </Content>
        <Button style={styles.submitBtn} onPress={this.submit.bind(this)}>
          <Text style={styles.btnFont}>Sign Up</Text>
        </Button>

      </View>
    );
  }
}
