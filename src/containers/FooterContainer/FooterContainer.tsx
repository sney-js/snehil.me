import React, { FC } from 'react';
import { makeClass } from 'utils/Helpers';
import Styles from './FooterContainer.module.scss';

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
  const classes = makeClass([Styles.dFooterContainer, props.className]);
  return <div className={classes}>FooterContainer</div>;
};

export default FooterContainer;
