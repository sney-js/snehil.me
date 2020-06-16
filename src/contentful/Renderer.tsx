import React from 'react';
import RichText from 'containers/RichText';
import RespImage from 'containers/RespImage';
import Container from 'components/Container';
import { IProjectContentBlock } from './@types/contentful';
import { getContentType } from './Resolver';
import { Asset } from 'contentful';

/**
 *
 * @param item
 * @param key
 * @param rest
 */
export const renderContentContainer = (item, key?) => {
  switch (getContentType(item)) {
    case 'rich-text':
      return (
        <Container
          key={key}
          pad={'Vertical'}
          layout={'maxWidthNarrow'}
          animateIn
        >
          <RichText document={item.fields.content} />
        </Container>
      );
    case 'image':
      return (
        <Container key={key} pad={'Vertical'} layout={'maxWidth'} animateIn>
          <RespImage image={item.fields.image} />
        </Container>
      );
    case 'Asset': {
      return (
        <Container key={key} pad={'Vertical'} layout={'maxWidth'} animateIn>
          <RespImage image={item} />
        </Container>
      );
    }
    default:
      return null;
  }
};
