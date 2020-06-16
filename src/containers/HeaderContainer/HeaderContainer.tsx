import React, { FC } from 'react';
import Header from '../../components/Header';
import {
  DEFAULT_LANGS,
  generateLang,
  LanguageSelectorProps
} from 'components/Header/LanguageSelector/LanguageSelector';
import { toLinkType } from '../../elements/Link/Link';

type HeaderContainerProps = {
  /**
   * Description above title
   */
  title?: string;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * The `HeaderContainer` component example.
 * @param props
 * @constructor
 */
const HeaderContainer: FC<HeaderContainerProps> = (
  props: HeaderContainerProps
) => {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Project', path: '/project/' },
    { title: 'Donate', path: '/donate/' },
    { title: 'Offer', path: '/' },
  ];
  return (
    <Header
      siteLinks={navLinks.map(toLinkType)}
      localeInfo={{
        languages: DEFAULT_LANGS.map(generateLang).filter(
          (e) => !!e
        ) as LanguageSelectorProps['languages'],
        activeLanguage: generateLang(
          DEFAULT_LANGS[0]
        ) as LanguageSelectorProps['activeLanguage']
      }}
    />
  );
};

export default HeaderContainer;
