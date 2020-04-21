import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

export function SecondScreen() {
  const counter = useSelector(state => state.ExampleReducer.count);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hi! This is a second screen.</Text>
      <Text>Current value of count: {counter}</Text>
    </View>
  )
}
