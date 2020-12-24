import * as React from 'react';
import { shallow } from 'enzyme';
import ProjectTooltip from './ProjectTooltip';

describe('<ProjectTooltip />', () => {
  test('renders', () => {
    const wrapper = shallow(<ProjectTooltip />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
