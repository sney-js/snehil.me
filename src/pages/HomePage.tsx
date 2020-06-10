import React, { FunctionComponent, useEffect, useState } from 'react';
import Card from 'components/Card';
import Grid from '../components/Grid';
import Container from "../components/Container";

interface OwnProps {}

type Props = OwnProps;

const HomePage: FunctionComponent<Props> = (props) => {
  const [timeout, setTime] = useState(false);
  useEffect(() => {
    setTimeout(() => setTime(true), 1000);
  }, []);
  if (!timeout) return null;
  return (
    <Container layout={"maxWidth"} pad={"All"}>
    <Grid template='repeat(auto-fill, minmax(300px, 1fr))'>
      {timeout ? (
        <Card
          title={'Card Example'}
          subTitle={'Subtitle'}
          image={<img src={'/assets/images/example.jpg'} />}
          link={{ to: '/about', title: 'About' }}
          description={
            'Me non paenitet nullum festiviorem excogitasse ad hoc. Quisque ut dolor gravida, placerat libero vel, euismod. Hi omnes lingua, institutis, legibus inter se differunt.'
          }
        />
      ) : null}
    </Grid>
    </Container>
  );
};

export default HomePage;
