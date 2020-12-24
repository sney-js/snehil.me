import React from 'react';
import Button from './Button';

export default {
  title: 'Elements/Button',
  parameters: {
    componentSubtitle: 'Atom'
  },
  component: Button
};

export const basic = (args) => {
  return (
    <div>
      <Button title='Button' {...args} />
    </div>
  );
};
