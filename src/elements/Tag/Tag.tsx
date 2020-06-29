import React, { FC } from 'react';
import { makeClass } from 'utils/Helpers';

type TagProps = {
  /**
   * Description above title
   */
  title?: string;
  /**
   * Appearance `block | raised | none`
   */
  appearance?: 'block' | 'raised' | 'none';
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * The `Tag` component example.
 * @param props
 * @constructor
 */
const Tag: FC<TagProps> = (props: TagProps) => {
  const classes = makeClass([
    'd-Tag',
    props.className,
    `appearance-${props.appearance}`
  ]);
  return (
    <span className={classes} title={props.title}>
      {props.title || props.children}
    </span>
  );
};

Tag.defaultProps = {
  appearance: 'none'
};

export default Tag;
