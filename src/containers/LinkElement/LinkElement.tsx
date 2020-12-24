import React from 'react';
import { makeClass } from 'utils/Helpers';
import Link from 'elements/Link';
import { toLinkType } from '../../elements/Link/Link';
import { ILink } from '../../contentful/@types/contentful';

/**
 * The `LinkElement` component example.
 * @param props
 * @constructor
 */
const LinkElement: (link: ILink) => JSX.Element = (link) => {
  const classes = makeClass(['d-LinkElement']);
  return <Link className={classes} {...toLinkType(link)} />;
};

export default LinkElement;
