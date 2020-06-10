import Header from './Header';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Components/Header',
  parameters: {
    componentSubtitle: 'Container'
  },
  component: Header,
  decorators: [withKnobs]
};

export const basic = () => {
  // Define Footer component required Data
};
