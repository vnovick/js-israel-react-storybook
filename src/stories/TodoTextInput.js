import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import TodoTextInput from '../components/TodoTextInput';

storiesOf('TodoTextInput', module)
  .addWithInfo('with text, not editing', () => (
    <TodoTextInput
      text="example text"
      placeholder=""
      editing={false}
      newTodo={true}
    />
  ))
  .addWithInfo('with text, editing', () => (
    <TodoTextInput
      text="example text"
      placeholder=""
      editing={true}
      newTodo={false}
    />
  ))
  .addWithInfo('without text, no placeholder', () => (
    <TodoTextInput
      text=""
      placeholder=""
      editing={false}
      newTodo={true}
    />
  ))
  .addWithInfo('without text, with placeholder', () => (
    <TodoTextInput
      text=""
      placeholder="Enter text here"
      editing={false}
      newTodo={true}
    />
  ))
