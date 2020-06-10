import React, { FunctionComponent } from "react";
import Container from "components/Container";
import Layout from "../containers/Layout";

type Props = {};

const ErrorPage: FunctionComponent<Props> = (props) => {
  return (
        <Layout>
    <Container layout={"maxWidth"} pad={"All"}>
      <h1>404</h1>
    </Container>
        </Layout>
  );
};

export default ErrorPage;
