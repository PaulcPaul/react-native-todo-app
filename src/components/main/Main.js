import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addTodo } from '../../actions/TodoAction';
import { Todos } from '../todos/Todos';
import { Container, TodoInput, Send, ButtonText, Title } from './styles';

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

      <Title>My Todos</Title>

      <FlatList 
        data={todos}
        renderItem={({item, index}) => <Todos todo={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  )
}
