import * as React from 'react';
import Card from './Card';
import Grid from 'components/Grid';
import { text, withKnobs, radios } from '@storybook/addon-knobs';
import Container from 'components/Container';

export default {
  title: 'components/Card',
  parameters: {
    componentSubtitle: 'Atom'
  },
  component: Card,
  decorators: [withKnobs]
};

const link = {
  to: '/some/url',
  title: 'View vouchers'
};

export const basic = (): any => {
  const title = text('Title', 'Gift');
  const subTitle = text('Sub Title', 'vouchers');
  const footnote = text('Footnote', 'Access 40+ UK retailers');
  const theme = radios(
    'Theme',
    {
      Dark: 'dark',
      Light: 'light',
      DefaultDark: 'dsdark',
      DefaultLight: 'dslight'
    },
    'none'
  );

  return (
    <Container theme={theme}>
      <Grid template='1fr 1fr' templateMobile='1fr'>
        <Card
          image={
            <div className='container-image'>
              <img src='images/hero.jpg' alt='Alt Text' />
            </div>
          }
          title={title}
          subTitle={subTitle}
          description={
            <p>
              Use <strong>Love2Shop</strong> digital reward codes to shop with
              some of the UK’s leading brands.
            </p>
          }
          footnote={footnote}
          className='background-Primary'
          link={link}
        />
      </Grid>
    </Container>
  );
};
