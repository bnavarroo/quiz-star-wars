import { shallow } from 'enzyme';
import MyHead from '../index';

describe('testing MyHead component', () => {
  it('should component be render', () => {
    const wrapper = shallow(<MyHead />);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
