import React, { FC } from 'react';
import Header from '../../components/Header';

type HeaderContainerProps = {} & React.HTMLAttributes<HTMLDivElement>;

/**
 * The `HeaderContainer` component example.
 * @param props
 * @constructor
 */
const HeaderContainer: FC<HeaderContainerProps> = (
  props: HeaderContainerProps
) => {
  return <Header />;
};

export default HeaderContainer;
