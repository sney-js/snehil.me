import React, { FC } from 'react';
import { makeClass } from 'utils/Helpers';
import Grid from 'components/Grid';
import Link from 'elements/Link';
import { GenericProps, LinkType } from '../../models';
import Tag from '../../elements/Tag';

export type CardType = {
  /**
   * Determines the title if provided
   */
  title?: string;
  /**
   * Determines the secondary title if provided
   */
  subTitle?: string;
  /**
   * List of tags
   */
  tags?: string[];
  /**
   * useful if you want to use markup in the description like bold, italics, etc.
   * e.g.
   * ```
   * <p>Use <strong>Love2Shop</strong> digital reward codes to shop with some of the UK’s leading brands.</p>
   * ```
   */
  description?: JSX.Element | string;
  /**
   * Determines the footnote if provided
   */
  footnote?: string;
  link?: LinkType;
  /**
   * Image that will be provided with markup from contentful.
   * e.g.
   * ```
   * <div className='d-image'><img src='https://via.placeholder.com/450x250' alt='Alt Text' /></div>
   * ```
   */
  image?: JSX.Element;
} & GenericProps;

type CardProps = CardType;

/**
 * The `Card` component example.
 * @param props
 * @constructor
 */
const Card: FC<CardProps> = (props: CardProps) => {
  const {
    title,
    subTitle,
    description,
    link,
    tags,
    footnote,
    image,
    className
  } = props;

  const classes = makeClass(['d-card', className]);
  const template = footnote ? '1fr 1fr' : '2fr';
  return (
    <div className={classes}>
      <div className='d-card__image'>
        <Link to='' {...link}>
          {image}
        </Link>
      </div>
      <div className='d-card__body'>
        <div className='d-card__header'>
          {title && (
            <Link to='' {...link}>
              <h3 className='d-card__title'>{title}</h3>
            </Link>
          )}
          {subTitle && <h5 className='d-card__subtitle'>{subTitle}</h5>}
          {tags && (
            <div className='d-card-tags d-Tag-container'>
              {tags.map((tag, i) => (
                <Tag key={i} title={tag} appearance='raised' />
              ))}
            </div>
          )}
        </div>

        {description && (
          <div className='d-card__description'>
            <small>{description}</small>
          </div>
        )}

        <Grid template={template}>
          <small className='d-card__footnote'>
            <strong>{footnote}</strong>
          </small>
        </Grid>
      </div>
    </div>
  );
};

export default Card;
