import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ToDoItem from '../components/TodoItem';


const actions = {
  editTodo: action('editTodo'),
  deleteTodo: action('deleteTodo'),
  completeTodo: action('completeTodo')
}

storiesOf('ToDoItem', module)
  .addWithInfo('new todo', () => (
    <ToDoItem
      todo={{
        id: 0,
        text: 'My todo',
        completed: false
      }}
      { ...actions }
    />
  ))
  .addWithInfo('completed todo', () =>(
    <ToDoItem
      todo={{
        id: 0,
        text: 'My todo',
        completed: true
      }}
      { ...actions }
    />
  ))
