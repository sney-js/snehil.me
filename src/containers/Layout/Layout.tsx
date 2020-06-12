import React from 'react';
import { makeClass, setCSSVar } from '../../utils/Helpers';
import HeaderContainer from '../../containers/HeaderContainer';
import FooterContainer from '../../containers/FooterContainer';
import Container from '../../components/Container';
import CookieBannerContainer from '../../containers/CookieBannerContainer';

type LayoutProps = {
  locale?: string;
  globalLoader?: boolean;
  children?: any;
  theme?: 'dark' | 'light';
};

const globalInitialVals = {};

export const GlobalContext = React.createContext(globalInitialVals);

function Layout(props: LayoutProps) {
  const globalState = {};

  return (
    <div className={makeClass(['d-layout'])}>
      <GlobalContext.Provider value={globalState}>
        <HeaderContainer />

        <div className={makeClass(['d-content'])}>
          {props.children ? (
            <main>{props.children}</main>
          ) : (
            <Container
              layout={'centered'}
              style={setCSSVar({ '--val-spinner-size': '3' })}
            >
              <i className='gg-spinner' />
            </Container>
          )}
        </div>

        <div className={'d-cookieBanner'}>
          <CookieBannerContainer />
        </div>

        <FooterContainer />
      </GlobalContext.Provider>
    </div>
  );
}

export default Layout;
