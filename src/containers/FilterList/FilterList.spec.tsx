import * as React from 'react';
import { shallow } from 'enzyme';
import FilterList from './FilterList';

describe('<FilterList />', () => {
  test('renders', () => {
    const wrapper = shallow(<FilterList filterList={[]}/>);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
