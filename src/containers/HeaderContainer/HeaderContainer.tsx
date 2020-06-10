import React, { FC } from 'react';
import { makeClass } from 'utils/Helpers';
import * as styles from './HeaderContainer.module.scss';

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
  const classes = makeClass(['d-HeaderContainer', props.className]);
  return <div className={classes}>HeaderContainer</div>;
};

export default HeaderContainer;
