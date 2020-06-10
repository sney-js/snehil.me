import React from 'react';
import { getUrl } from '../../utils/RespImage';
import { makeClass, setCSSVar } from "utils/Helpers";
import HeaderContainer from 'containers/HeaderContainer';
import FooterContainer from 'containers/FooterContainer';
// import CookieBannerContainer from 'components/CookieBannerContainer';
import { Helmet } from 'react-helmet';
import Container from '../../components/Container';

const styles = require('./layout.module.scss');

type MetaDataStructure = {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
};

type LayoutProps = {
  locale?: string;
  globalLoader?: boolean;
  children?: any;
  theme?: 'dark' | 'light';
};

export const MetaData = (props: MetaDataStructure) => {
  return (
    <Helmet>
      <title>{props?.title}</title>
      {props?.description ? (
        <meta name='description' content={props.description} />
      ) : null}
      {props?.keywords ? (
        <meta name='keywords' content={props.keywords?.join(',')} />
      ) : null}
      {props?.image ? (
        <meta
          property='og:image'
          content={props.image && getUrl(props.image).replace('//', 'https://')}
        />
      ) : null}
    </Helmet>
  );
};

const globalInitialVals = {};

export const GlobalContext = React.createContext(globalInitialVals);

function Layout(props: LayoutProps) {
  const globalState = {};

  return (
    <div className={makeClass([styles.layout])}>
      <GlobalContext.Provider value={globalState}>
        <Helmet>
          <html lang={props.locale} />

          <link rel='manifest' href='/manifest.json' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-title' content='BPL' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black' />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='/assets/app-icons/icon.png'
            type='image/png'
          />
        </Helmet>

        {/*<div className={styles.cookieBanner}>{CookieBannerContainer()}</div>*/}

        <HeaderContainer />

        <div className={makeClass([styles.content])}>
          {props.children ? (
            <main>{props.children}</main>
          ) : (
            <div style={setCSSVar({ '--ggs': '3' })}>
              <i className='gg-spinner' />
            </div>
          )}
        </div>

        <FooterContainer />
      </GlobalContext.Provider>
    </div>
  );
}

export default Layout;
