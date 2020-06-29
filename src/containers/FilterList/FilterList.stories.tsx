import * as React from 'react';
import FilterList from './FilterList';

export default {
  title: 'containers/FilterList',
  component: FilterList
};

export const basic = (): any => {
  return <FilterList filterList={[]} />;
};
