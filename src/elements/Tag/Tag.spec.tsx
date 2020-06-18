import * as React from 'react';
import { shallow } from 'enzyme';
import Tag from './Tag';

describe('<Tag />', () => {
  test('renders', () => {
    const wrapper = shallow(<Tag />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
