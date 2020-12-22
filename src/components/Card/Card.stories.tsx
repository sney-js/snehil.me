import * as React from 'react';
import Grid from 'components/Grid';
import Container from 'components/Container';
import Card from './Card';

export default {
  title: 'components/Card',
  parameters: {
    componentSubtitle: 'Atom'
  },
  component: Card
};

const link = {
  to: '/some/url',
  title: 'View vouchers'
};

export const basic = (): any => {
  const title = 'Title';
  const subTitle = 'Sub Title';
  const footnote = 'Footnote';

  return (
    <Container>
      <Grid template='1fr 1fr' templateMobile='1fr'>
        <Card
          image={
            <div className='container-image'>
              <img src='/assets/images/example.jpg' alt='Alt Text' />
            </div>
          }
          title={title}
          description={
            <p>
              Use <strong>Love2Shop</strong> digital reward codes to shop with
              some of the UK’s leading brands.
            </p>
          }
          footnote={footnote}
          link={link}
        />
      </Grid>
    </Container>
  );
};
