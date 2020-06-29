import React, { useEffect } from 'react';
import { makeClass, setCSSVar, WINDOW } from 'utils/Helpers';
import HeaderContainer from 'containers/HeaderContainer';
import FooterContainer from 'containers/FooterContainer';
import Container from 'components/Container';
import CookieBannerContainer from 'containers/CookieBannerContainer';

type LayoutProps = {
  locale?: string;
  globalLoader?: boolean;
  children?: any;
  theme?: 'dark' | 'light';
};

const globalInitialVals = {};

export const GlobalContext = React.createContext(globalInitialVals);

const toggleTheme = function (selected: string) {
  document.body.dataset.theme = selected;
};

function Layout(props: LayoutProps) {
  const globalState = {};

  useEffect(() => {
    if (WINDOW) {
      WINDOW.scrollTo({ top: 0 });

      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        // dark mode
        toggleTheme('dark');
      } else {
        toggleTheme(props.theme || 'light');
      }
    }
  }, [props.theme]);

  return (
    <div className={makeClass(['d-layout'])}>
      <GlobalContext.Provider value={globalState}>
        <HeaderContainer />

        <div className={makeClass(['d-content'])}>
          {props.children ? (
            <main>{props.children}</main>
          ) : (
            <Container
              layout='centered'
              style={setCSSVar({ '--val-spinner-size': '3' })}
            >
              <i className='gg-spinner' />
            </Container>
          )}
        </div>

        <div className='d-cookieBanner'>
          <CookieBannerContainer />
        </div>

        {/* <FooterContainer /> */}
      </GlobalContext.Provider>
    </div>
  );
}

export default Layout;
