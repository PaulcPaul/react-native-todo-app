import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addTodo } from '../../actions/TodoAction';
import { Container, TodoInput, Send, ButtonText } from './styles';

export function Main({ navigation }) {
  const todos = useSelector(state => state.TodoReducer.todos);
  const dispatch = useDispatch();

  const [newTodo, setTodo] = useState('');

  const sendNewTodo = () => {
    let newTodos = [];
    newTodos.push(newTodo, ...todos);
    dispatch(addTodo(newTodos));
  }

  return (
    <Container>
      <TodoInput onChangeText={(text) => setTodo(text)} />
      <Send>
        <ButtonText onPress={sendNewTodo}>Send</ButtonText>
      </Send>

      <FlatList 
        data={todos}
        renderItem={({item, index}) => <Text id={index}>{item}</Text>}
      />
    </Container>
  )
}
