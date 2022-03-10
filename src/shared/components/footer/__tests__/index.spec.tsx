import { shallow } from 'enzyme';
import { FooterComponent } from '../index';

describe('testing Footer component', () => {
  it('should component be render', () => {
    const wrapper = shallow(<FooterComponent />);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
