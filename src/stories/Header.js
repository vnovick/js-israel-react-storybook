import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';
import Header from '../components/Header';
import { WithNotes } from '@kadira/storybook-addon-notes';

storiesOf('Header', module)
  .addWithInfo('base', () => (
    <WithNotes notes={"Here is an example of notes panel"}>
      <Header addTodo={linkTo('MainSection', 'one todo')}/>
    </WithNotes>
  ))
