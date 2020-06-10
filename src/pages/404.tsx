import React, { FunctionComponent } from "react";
import Container from "components/Container";

type Props = {};

const ErrorPage: FunctionComponent<Props> = (props) => {
  return (
    <Container layout={"maxWidth"} pad={"All"}>
      <h1>404</h1>
    </Container>
  );
};

export default ErrorPage;
