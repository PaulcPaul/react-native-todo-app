import React from 'react';
import { View, Button, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from './actions/ExampleAction';

export function Main({ navigation }) {
  const counter = useSelector(state => state.ExampleReducer.count);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button title="Increment" onPress={() => dispatch(increment())}></Button>
        <Text style={{textAlign: 'center'}}>{counter}</Text>
      <Button title="Decrement" onPress={() => dispatch(decrement())}></Button>
      <Button title="Next Screen" onPress={() => navigation.navigate('SecondScreen')}></Button>
    </View>
  )
}
