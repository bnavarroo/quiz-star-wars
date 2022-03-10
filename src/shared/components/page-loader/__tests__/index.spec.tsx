import { mount } from 'enzyme';
import Loader from '../index';

describe('testing Loader component', () => {
  it('should Loader render whitout errors', () => {
    const wrapper = mount(<Loader isVisible={false} />);
    expect(wrapper.isEmptyRender()).toBe(true);
    wrapper.setProps({ isVisible: true });
    wrapper.update();
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
