import * as React from 'react';
import Grid from 'components/Grid';
import Container from 'components/Container';
import Card from './Card';

export default {
  title: 'components/Card',
  component: Card
};

const link = {
  to: '/some/url',
  title: 'View More'
};

export const basic = (args): any => {
  const title = 'Title';
  const subTitle = 'Sub Title';
  const footnote = 'Footnote';

  return (
    <Container>
      <Grid template='1fr 1fr' templateMobile='1fr'>
        <Card
          image={
            <div className='container-image'>
              <img src='/images/example.jpg' alt='Alt Text' />
            </div>
          }
          title={title}
          description={
            <p>
              Nec dubitamus multa iter quae et nos invenerat. Quisque ut dolor
              gravida, placerat libero vel, euismod.
            </p>
          }
          footnote={footnote}
          link={link}
          {...args}
        />
      </Grid>
    </Container>
  );
};
