import React, { FC } from 'react';
import { makeClass } from 'utils/Helpers';
import Link from 'elements/Link';
import { GenericProps, LinkData } from "../../models";
import { toLinkType } from '../../elements/Link/Link';

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
      {...toLinkType(props)}
    />
  );
};

export default LinkElement;
