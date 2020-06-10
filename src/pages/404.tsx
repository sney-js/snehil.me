import React, { FunctionComponent } from "react";
import Container from "components/Container";

type Props = {};

const ErrorPage: FunctionComponent<Props> = (props) => {
  return (
    <Container>
      <h1>404</h1>
    </Container>
  );
};

export default ErrorPage;
