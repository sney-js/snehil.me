import React, { FC } from 'react';
import { makeClass } from 'utils/Helpers';
import Link from 'elements/Link';
import { GenericProps, LinkData } from "../../models";

/**
 * The `LinkElement` component example.
 * @param props
 * @constructor
 */
const LinkElement: FC<LinkData & GenericProps> = (props) => {
  const classes = makeClass(['d-LinkElement']);
  return (
    <Link
      className={classes}
      to={props.path}
      title={props.title}
      newTab={props.newTab}
      children={props.children}
    />
  );
};

export default LinkElement;
