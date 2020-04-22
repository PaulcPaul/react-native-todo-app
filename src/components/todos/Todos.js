import React from 'react';
import { TodoContainer, TodoText } from './styles';

export function Todos({ todo }) {
    return(
      <TodoContainer elevation={2}>
        <TodoText>
          {todo}
        </TodoText>
      </TodoContainer>
    );
  }