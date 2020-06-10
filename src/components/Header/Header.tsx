import React, { FC } from 'react';
import { makeClass } from 'utils/Helpers';
import Link from 'elements/Link/';
import { LinkType } from 'models/Link';

type HeaderProps = {
  /**
   * Displays logo on the left.
   * e.g.
   * `
   * title: string, to: string, icon: JSX.Element
   * `
   */
  brand?: LinkType[];
  /**
   * Displays logo on the left.
   * e.g.
   * `
   * title: string, to: string, icon: JSX.Element
   * `
   */
  subBrand?: LinkType[];
  /**
   * Displays the navigation links.
   * e.g.
   * `
   * navigation={<navigation/>}
   * `
   */
  navigation?: JSX.Element;
  /**
   * Displays the navigation links.
   * e.g.
   * `
   * to: string, title: string
   * `
   */
  profile?: JSX.Element;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Use `Header` to highlight key info with a predefined status.
 */
const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const { brand, subBrand, navigation, className, profile } = props;
  const classes = makeClass(['d-header', className]);

  return (
    <div className={classes}>
      <div className='d-header__logo'>
        {brand &&
          brand?.map((item: any, i: number) => (
            <Link
              key={item.to + i}
              className='d-header__logo-brand'
              to={item.to}
              aria-label={item.title}
            >
              {item.icon ? item.icon : item.title}
            </Link>
          ))}
        {subBrand &&
          subBrand?.map((item: any, i: number) => (
            <Link
              key={item.to + i}
              className='d-header__logo-subbrand'
              to={item.to}
              aria-label={item.title}
            >
              {item.icon ? item.icon : item.title}
            </Link>
          ))}
      </div>
      <div className='d-header__nav'>
        {navigation}
        {profile}
      </div>
    </div>
  );
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default Header;
