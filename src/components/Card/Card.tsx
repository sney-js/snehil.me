import React, { FC } from 'react';
import { makeClass } from 'utils/Helpers';
import Link from 'elements/Link';
import { LinkType } from '../../models';
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
  link?: LinkType;
  /**
   * Image that will be provided with markup from contentful.
   * e.g.
   * ```
   * <div className='d-image'><img src='https://via.placeholder.com/450x250' alt='Alt Text' /></div>
   * ```
   */
  image?: JSX.Element;
} & React.HTMLAttributes<HTMLDivElement>;

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
    image,
    className,
    ...rest
  } = props;

  const classes = makeClass(['d-card', className]);
  return (
    <div className={classes} {...rest}>
      {image && <div className='d-card__image'>{image}</div>}
      <div className='d-card__body'>
        <div className='d-card__header'>
          {title && <h3 className='d-card__title'>{title}</h3>}
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

        {link && <Link {...link} appearance='primary' />}
      </div>
    </div>
  );
};

export default Card;
