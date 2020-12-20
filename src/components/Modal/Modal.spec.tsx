import * as React from 'react';
import Modal from './Modal';
import { shallow } from 'enzyme';

const props = (
  <div>
    <div style={{ fontSize: 32 }}>About For Good Causes</div>
    <p>
      Choose to do something truly amazing with your BP points and donate them
      to a charity of your choice. Via For Good Causes, you can donate to a
      charity that close to your heart and help make a difference today! Over
      17,000 charities are available from global causes to small local
      charities, in the heart of your community. With charities covering every
      cause, including the environment, medical research, children and the
      young, animals and conservation, mental health and many more, there is
      something for everyone. Because we all care about different things. Once
      you have logged in, select the amount of points you want to exchange Click
      proceed and confirm your redemption. We will send you an email with your
      For Good Causes charity token To donate go to
      https://my.forgoodcauses.org/ BP Terms n Conditions apply, see
      https://www.bpmerewards.co.uk/terms-and-conditions for full details. For
      Good Causes Terms n Conditions apply, see
      https://www.forgoodcauses.org/terms-and-conditions/ for full details. For
      Good Causes deducts a small commission from each donation to cover the
      cost of the distribution to over 17,000 charities.
    </p>
  </div>
);
describe('<Modal />', () => {
  test('Rendered component with html as child', () => {
    const results = shallow(<Modal open={true}>{props}</Modal>);

    expect(results.exists()).toBe(true);
    expect(results.html()).toMatchSnapshot();
  });
  // FIXME
  // test('Should not rendered component if click close button', () => {
  //   const results = shallow(<Modal open={true}>{props}</Modal>);

  //   results.find('.d-modal__close').simulate('click');
  //   expect(results.find('.active').length).toBe(0);
  // });
});
