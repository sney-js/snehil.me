import React, { FC } from 'react';
import { makeClass } from 'utils/Helpers';
import * as styles from './HeaderContainer.module.scss';
import Header from "../../components/Header";

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
    { title: 'Home', to: '/' },
    { title: 'Redeem', to: '/' },
    { title: 'Donate', to: '/' },
    { title: 'Offer', to: '/' },
    { title: 'Help & Faq', to: '/' },
    { title: 'Contact Us', to: '/' }
  ];
  return <Header siteLinks={navLinks}/>;
};

export default HeaderContainer;
