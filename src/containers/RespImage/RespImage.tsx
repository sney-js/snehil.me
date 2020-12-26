import React, { FC, HTMLAttributes } from 'react';
import { makeClass } from '../../utils';

const createSrcSetEntry = (url, width, extraParams = '') =>
  `${url}?q=85&w=${width}${extraParams}`;

export const getUrl = (image, width = '1440', extraParams = undefined) =>
  `${createSrcSetEntry(image.fields.file.url, width, extraParams)}`;

type RespImageType = {
  /**
   * Contentful image object
   */
  image?: any;
  imageUrl?: string;
  /**
   * in pixels
   */
  widthMax?: number;
  widthVw?: number;
} & HTMLAttributes<HTMLImageElement>;

const RespImage: FC<RespImageType> = (props) => {
  const {
    image = undefined,
    imageUrl = undefined,
    widthMax = 1440,
    widthVw = 100,
    className,
    ...rest
  } = props;

  if (!imageUrl && !image?.fields.file.url) return null;

  const url = imageUrl || image.fields.file.url;
  const srcsets = [400, 800, 1440, 1920].map((width) => {
    return createSrcSetEntry(url, width, ` ${width}w`);
  });
  return (
    <img
      className={makeClass(['d-image', className])}
      src={url}
      srcSet={srcsets.join(', ')}
      sizes={`(max-width: ${widthMax}px) ${widthVw}vw, ${widthMax}px`}
      alt={
        (image && (image.fields.description || image.fields.title)) || imageUrl
      }
      {...rest}
    />
  );
};

export default RespImage;
