import * as React from 'react';
import { shallow } from 'enzyme';
import Tooltip from './Tooltip';

describe('<Tooltip />', () => {
  test('renders', () => {
    const wrapper = shallow(<Tooltip />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
