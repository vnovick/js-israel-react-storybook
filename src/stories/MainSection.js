import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import MainSection from '../components/MainSection';
import * as actions from '../actions';

const loggedActions = Object.keys(actions).reduce((acc, actionName) => ({
  ...acc,
  [actionName]: action(actionName)
}), {});

storiesOf('MainSection', module)
  .addWithInfo('no todos', () => (
    <MainSection todos={[]} actions={{}}/>
  ))
  .addWithInfo('one todo', () => (
    <MainSection todos={[{
      text: 'One Todo',
      completed: false,
      id: 0
    }]} actions={{
      completeTodo: linkTo('MainSection', 'several todos'),
      deleteTodo: linkTo('MainSection', 'no todos'),
      editTodo: action('edit todo')
    }} />
)).addWithInfo('several todos', () => (
  <MainSection todos={[{
      text: 'Completed todo',
      completed: true,
      id: 1
    }, {
      text: 'Learn Storybook',
      completed: false,
      id: 2
    }]} actions={loggedActions}/>
))
