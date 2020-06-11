import * as React from 'react';
import { shallow } from 'enzyme';
import CookieBannerContainer from './CookieBannerContainer';

describe('<CookieBannerContainer />', () => {
  test('renders', () => {
    const wrapper = shallow(<CookieBannerContainer />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
