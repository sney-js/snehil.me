import React, { FunctionComponent } from 'react';
import Container from 'components/Container';
import Card from 'components/Card';

interface OwnProps {}

type Props = OwnProps;

const ProjectPage: FunctionComponent<Props> = (props) => {
  return (
    <Container>
      <Card title={'project'}/>
    </Container>
  );
};

export default ProjectPage;
