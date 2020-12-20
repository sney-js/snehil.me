import React, { useEffect, useState } from 'react';
import { makeClass, setCSSVar, WINDOW } from 'utils/Helpers';
import HeaderContainer from 'containers/HeaderContainer';
import Container from 'components/Container';
import CookieBannerContainer from 'containers/CookieBannerContainer';
import Modal from '../../components/Modal';
import { ModalProps } from '../../components/Modal/Modal';

type LayoutProps = {
  locale?: string;
  globalLoader?: boolean;
  children?: any;
  theme?: 'dark' | 'light';
};

export type GlobalContextType = {
  showModal(modalData: ModalProps): void;
  hideModal(): void;
};

const globalInitialVals: GlobalContextType = {
  showModal: () => {},
  hideModal: () => {}
};
export const GlobalContext = React.createContext(globalInitialVals);

const toggleTheme = function (selected: string) {
  document.body.dataset.theme = selected;
};

function Layout(props: LayoutProps) {
  const [modalData, setModalData] = useState<ModalProps | undefined>(undefined);
  const globalState: GlobalContextType = {
    showModal: (data) => {
      setModalData(data || {});
    },
    hideModal: () => setModalData(undefined)
  };

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

        <div className='d-modalContainer'>
          <Modal
            {...modalData}
            open={!!modalData}
            onClickClose={() => {
              globalState.hideModal();
            }}
          />
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
