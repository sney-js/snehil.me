import React from 'react';
import Header from './Header';
import { radios, withKnobs } from '@storybook/addon-knobs';
import Container from 'components/Container';

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

  // Define site links
  const navLinks = [
    { title: 'Home', to: '/home.html' },
    { title: 'Earn', to: '/home.html' },
    { title: 'Redeem', to: '/home.html' },
    { title: 'Donate', to: '/home.html' },
    { title: 'Offer', to: '/home.html' },
    { title: 'Help & Faq', to: '/home.html' },
    { title: 'Contact Us', to: '/home.html' }
  ];

  const theme = radios('Theme', { Dark: 'dark', Light: 'light' }, 'none');
  return (
    <Container
      layout='columns'
      pad='Horizontal'
      theme={theme}
      style={{ backgroundColor: '#ccc', height: '1000px' }}
      className={theme === 'dark' ? 'background-Primary' : ''}
    >
      <Header siteLinks={navLinks} />
    </Container>
  );
};
