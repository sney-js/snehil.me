import * as React from 'react';
import LanguageSelector, {
  DEFAULT_LANGS,
  generateLang
} from './LanguageSelector';
import Container from "../../Container";

export default {
  title: 'components/Header/LanguageSelector',
  component: LanguageSelector
};

export const basic = (): any => {
  return (
    <div style={{width: "100px"}}>
      <LanguageSelector
        languages={DEFAULT_LANGS.map(generateLang)}
        activeLanguage={generateLang(DEFAULT_LANGS[0])}
      />
    </div>
  );
};
