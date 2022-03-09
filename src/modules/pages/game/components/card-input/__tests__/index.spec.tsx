import { mount } from 'enzyme';
import { CardInputComponent } from '../index';

describe('testing CardInput component', () => {
  it('should CardInputComponent render whitout errors', () => {
    const wrapper = mount(
      <CardInputComponent setReply={jest.fn()} registerReply={false} disabled />
    );
    wrapper.setProps({ registerReply: true });
    wrapper.update();
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
