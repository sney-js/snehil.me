import React, { FC } from 'react';
import Footer from '../../components/Footer';

type FooterContainerProps = {
  /**
   * Description above title
   */
  title?: string;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * The `FooterContainer` component example.
 * @param props
 * @constructor
 */
const FooterContainer: FC<FooterContainerProps> = (
  props: FooterContainerProps
) => {
  return <Footer theme='light' copyright='All Ltd. Copyright@ 2020' />;
};

export default FooterContainer;
