import React, { FC } from 'react';

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
  return <footer />;
};

export default FooterContainer;
