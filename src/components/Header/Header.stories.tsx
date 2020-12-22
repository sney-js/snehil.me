import React from 'react';
import Container from 'components/Container';
import Header from './Header';
import {
  DEFAULT_LANGS,
  generateLang,
  LanguageSelectorProps
} from './LanguageSelector/LanguageSelector';

export default {
  title: 'Components/Header',
  parameters: {
    componentSubtitle: 'Container'
  },
  component: Header
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

  return (
    <Container layout='columns'>
      <Header
        siteLinks={navLinks}
        localeInfo={{
          languages: DEFAULT_LANGS.map(generateLang).filter(
            (e) => !!e
          ) as LanguageSelectorProps['languages'],
          activeLanguage: generateLang(
            DEFAULT_LANGS[0]
          ) as LanguageSelectorProps['activeLanguage']
        }}
      />
    </Container>
  );
};
