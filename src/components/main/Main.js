import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addTodo } from '../../actions/TodoAction';
import { Container, TodoInput, Send, ButtonText, TodoContainer, TodoText, Title } from './styles';

export function Main({ navigation }) {
  const todos = useSelector(state => state.TodoReducer.todos);
  const dispatch = useDispatch();

  const [newTodo, setTodo] = useState('');

  const sendNewTodo = () => {
    let newTodos = [];
    newTodos.push(newTodo, ...todos);
    dispatch(addTodo(newTodos));
  }

  const renderToDo = (todo, index) => {
    return(
      <TodoContainer key={index} elevation={5}>
        <TodoText>
          {todo}
        </TodoText>
      </TodoContainer>
    );
  }

  return (
    <Container>
      <TodoContainer elevation={5}>
        <TodoInput onChangeText={(text) => setTodo(text)} />
        <Send>
          <ButtonText onPress={sendNewTodo}>Send</ButtonText>
        </Send>
      </TodoContainer>

      <Title>My Todos</Title>

      <FlatList 
        data={todos}
        renderItem={({item, index}) => renderToDo(item, index)}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  )
}
