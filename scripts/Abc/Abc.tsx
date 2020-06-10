import React, { FC } from 'react';
import { makeClass } from 'utils/Helpers';

type AbcProps = {
  /**
   * Description above title
   */
  title?: string;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * The `Abc` component example.
 * @param props
 * @constructor
 */
const Abc: FC<AbcProps> = (props: AbcProps) => {
  const classes = makeClass(['d-Abc', props.className]);
  return <div className={classes}>Abc</div>;
};

export default Abc;
