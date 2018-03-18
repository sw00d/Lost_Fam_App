import React from 'react';
import { Item, Input, Label } from 'native-base';
import { TextInput } from 'react-native';

export const renderField = field => {
  const { meta:{ touched, error }} = field;
  const container = `form-group ${touched && error ? 'has-danger' : '' }`;
  return(
    <Item floatingLabel last classname={ container }>
      <Label>{field.label}</Label>
      <Input {...field.input}/>
    </Item>
  )
}
