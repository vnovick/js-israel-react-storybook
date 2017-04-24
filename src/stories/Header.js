import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';
import Header from '../components/Header';


storiesOf('Header', module)
  .addWithInfo('base', () => (
    <Header addTodo={linkTo('MainSection', 'one todo')}/>
  ))
