import * as React from 'react';
import Tooltip from './Tooltip';

export default {
  title: 'components/Tooltip',
  component: Tooltip
};

export const basic = (): any => {
  return (
    <Tooltip show={true}>
      <h1>Title</h1>
    </Tooltip>
  );
};
