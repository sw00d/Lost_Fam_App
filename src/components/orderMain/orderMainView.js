import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Body, Right, Icon, Title } from 'native-base';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default class OrderMain extends React.Component {
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

        <View style={styles.body}>
          <TouchableOpacity activeOpacity={.5} style={styles.row} onPress={()=>navigate('finishedAlbum')}>
            <Text style={styles.section}>Roll to Order</Text>
            <Text style={styles.detail}>{pics.length} photos from {name}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <TouchableOpacity activeOpacity={.5} style={styles.row} onPress={()=>navigate('address')}>
            <Text style={styles.section}>Address</Text>
            <Text style={styles.detail}>1237 Kensington Ave. Missoula, MT 59801</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <TouchableOpacity activeOpacity={.5} style={styles.row} onPress={()=>navigate('stripe')}>
            <Text style={styles.section}>Card Info</Text>
            <Text style={styles.detail}>Visa ****2199</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
