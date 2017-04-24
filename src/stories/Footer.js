import React from 'react';
import { storiesOf, linkTo, action } from '@kadira/storybook';
import Footer from '../components/Footer';


storiesOf('Footer', module)
  .addWithInfo('No items, show_all filter', () => (
    <Footer completedCount={0} activeCount={0} filter="show_all" onClearCompleted={action('onClearCompleted')} onShow={action('onShow')}/>
  ))
  .addWithInfo('No completed, 10 active, show all filter', () => (
    <Footer completedCount={0} activeCount={10} filter="show_all" onClearCompleted={action('onClearCompleted')} onShow={action('onShow')}/>
  ))
  .addWithInfo('5 completed, 10 active, show all filter', () => (
    <Footer completedCount={5} activeCount={10} filter="show_all" onClearCompleted={action('onClearCompleted')} onShow={action('onShow')}/>
  ))
  .addWithInfo('5 completed, 10 active, show Active filter', () => (
    <Footer completedCount={5} activeCount={10} filter="show_active" onClearCompleted={action('onClearCompleted')} onShow={action('onShow')}/>
  ))
  .addWithInfo('5 completed, 10 active, show completed filter', () => (
    <Footer completedCount={5} activeCount={10} filter="show_completed" onClearCompleted={action('onClearCompleted')} onShow={action('onShow')}/>
  ))
