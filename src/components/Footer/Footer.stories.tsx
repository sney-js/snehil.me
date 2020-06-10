import React from 'react';
import Footer from './Footer';
import { radios, text, withKnobs } from '@storybook/addon-knobs';
import Container from 'components/Container';
import { IcBrandlogo } from 'elements/SvgElements';

export default {
  title: 'Components/Footer',
  parameters: {
    componentSubtitle: 'Container'
  },
  component: Footer,
  decorators: [withKnobs]
};

export const basic = () => {
  // Define Footer component required Data

  // Define site links
  const siteLinks = [
    { title: 'Home', to: '/home.html' },
    { title: 'Earn', to: '/home.html' },
    { title: 'Redeem', to: '/home.html' },
    { title: 'Donate', to: '/home.html' },
    { title: 'Help & Faq', to: '/home.html' },
    { title: 'Contact Us', to: '/home.html' },
    { title: 'Cookies Policy', to: '/home.html' },
    { title: 'Privacy Policy', to: '/home.html' },
    { title: 'Terms & Condition', to: '/home.html' }
  ];

  // Define Social links data
  const socialLinks = [
    { title: 'facebook', to: 'http://facebook.com' },
    { title: 'twitter', to: 'http://twitter.com' },
    { title: 'youtube', to: 'http://youtube.com' }
  ];

  // Define Knobs
  const theme = radios('Theme', { Dark: 'dark', Light: 'light' }, 'dark');
  const socialTitle = text('Social Title', 'Follow us');
  const appTitle = text('App Title', 'Find a BP Site');
  const copyright = text('Copyright', 'BP Oil Ltd. Copyright@ 2019');
  const footnote = text('Footnote', 'Everyday, Brighter');
  return (
    <Container theme={theme}>
      <Footer
        socialLinks={socialLinks}
        socialTitle={socialTitle}
        siteLinks={siteLinks}
        copyright={copyright}
        footnote={footnote}
        brandIcon={<IcBrandlogo />}
      />
    </Container>
  );
};
