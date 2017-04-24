import React from 'react';
import { storiesOf, linkTo, action } from '@kadira/storybook';
import Footer from '../components/Footer';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';




storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .addWithInfo('No items, show_all filter', () => (
    <Footer
      completedCount={0}
      activeCount={0}
      filter="show_all"
      onClearCompleted={action('onClearCompleted')}
      onShow={action('onShow')}
    />
  ))
  .addWithInfo('No completed, 10 active, show all filter', () => (
    <Footer
      completedCount={0}
      activeCount={10}
      filter="show_all"
      onClearCompleted={action('onClearCompleted')}
      onShow={action('onShow')}
    />
  ))
  .addWithInfo('5 completed, 10 active, show all filter', () => (
    <Footer
      completedCount={5}
      activeCount={10}
      filter="show_all"
      onClearCompleted={action('onClearCompleted')}
      onShow={action('onShow')}
    />
  ))
  .addWithInfo('5 completed, 10 active, show Active filter', () => (
    <Footer
      completedCount={5}
      activeCount={10}
      filter="show_active"
      onClearCompleted={action('onClearCompleted')}
      onShow={action('onShow')}
    />
  ))
  .addWithInfo('5 completed, 10 active, show completed filter', () => (
    <Footer
      completedCount={5}
      activeCount={10}
      filter="show_completed"
      onClearCompleted={action('onClearCompleted')}
      onShow={action('onShow')}
    />
  ))
  .addWithInfo('dynamic props', () => (
    <Footer
      completedCount={number("completed count", 0)}
      activeCount={number("active count", 0)}
      filter={text("filter", "show_all")}
      onClearCompleted={action('onClearCompleted')}
      onShow={action('onShow')}
    />
  ))
