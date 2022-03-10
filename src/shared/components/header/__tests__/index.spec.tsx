import { shallow } from 'enzyme';
import { HeaderComponent } from '../index';

describe('testing Footer component', () => {
  it('should component be render', () => {
    const wrapper = shallow(<HeaderComponent />);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
