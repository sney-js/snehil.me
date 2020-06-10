import React, { FC } from 'react';
import { makeClass } from 'utils/Helpers';
import { LinkType } from 'models/Link';
import Navigation from "./Navigation";
import Container from "../Container";

type HeaderProps = {
  /**
   * Displays the navigation links.
   * e.g.
   * `
   * navigation={<navigation/>}
   * `
   */
  siteLinks: LinkType[];
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Use `Header` to highlight key info with a predefined status.
 */
const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const { siteLinks, className } = props;
  const classes = makeClass(['d-header', className]);

  return (
    <div className={classes}>
      <Container className='d-header__nav' layout={"maxWidth"} pad={"Horizontal"}>
        <Navigation
            mobileAnimationDirection={"top"}
            siteLinks={siteLinks}
            active={true}
          />
      </Container>
    </div>
  );
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default Header;
