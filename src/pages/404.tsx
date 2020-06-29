import React, { FunctionComponent } from 'react';
import Container from 'components/Container';
import Layout from '../containers/Layout';
import { PageProps } from './PageType';

const ErrorPage: FunctionComponent<PageProps> = (props) => {
  return (
    <div>
      <Container layout='maxWidth' pad='All'>
        <h1>404</h1>
      </Container>
    </div>
  );
};

export default ErrorPage;
