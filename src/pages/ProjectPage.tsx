import React, { FunctionComponent } from 'react';
import Container from 'components/Container';
import Card from 'components/Card';
import Layout from '../containers/Layout';

interface OwnProps {}

type Props = OwnProps;

const ProjectPage: FunctionComponent<Props> = (props) => {
  console.log(props);
  return (
    <Layout>
      <Container pad={'All'} layout={'maxWidth'}>
        <Card title={'project'} />
      </Container>
    </Layout>
  );
};

export default ProjectPage;
