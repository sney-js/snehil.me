import React, { FunctionComponent, useEffect, useState } from 'react';
import Container from 'components/Container';
import Card from 'components/Card';
import Layout from 'containers/Layout';

interface OwnProps {}

type Props = OwnProps;

const HomePage: FunctionComponent<Props> = (props) => {
  const [timeout, setTime] = useState(false);
  useEffect(() => {
    setTimeout(() => setTime(true), 5000);
  }, []);
  if (!timeout) return null;
  return <div>{timeout? <Card title={'sfssd'} /> : null}</div>;
};

export default HomePage;
