import * as React from 'react';
import { shallow } from 'enzyme';
import Abc from './Abc';

describe('<Abc />', () => {
  test('renders', () => {
    const wrapper = shallow(<Abc />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
