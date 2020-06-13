import React from 'react';
import RichText from 'containers/RichText';
import RespImage from 'containers/RespImage';
import Container from 'components/Container';

/**
 *
 * @param item
 * @param key
 * @param rest
 */
export const renderContentContainer = (item, key?) => {
  switch (item.type) {
    case 'rich-text':
      return (
        <Container key={key} pad={'All'} layout={'maxWidth'} animateIn>
          <RichText document={item.fields.content} />
        </Container>
      );
    case 'image':
      return (
        <Container key={key} layout={'maxWidth'} animateIn>
          <RespImage image={item.fields.image} />
        </Container>
      );
    case 'list':
    // return <ListContainer key={key} item={item.fields} />;
    default:
      return null;
  }
};
